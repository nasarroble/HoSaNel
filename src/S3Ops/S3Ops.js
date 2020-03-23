const S3 = require("aws-sdk/clients/s3");
const uniqid = require("uniqid");
const mime = require("mime");
const os = require('os')
const env = process.env.s3Bucket
const netMappers = require('../Mappers/networkMapper')
/**
 * We need to respond with adequate CORS headers.
 * @type {{"Access-Control-Allow-Origin": *, "Access-Control-Allow-Credentials": true}}
 */

const createPresignedGet = (key ) => {
  const s3 = new S3();
  const params = {
    Expires: 60,
    Bucket: env,
    Key: key
  };

  return new Promise(async (resolve, reject) => {
    s3.getSignedUrl('getObject', params, function(err, url){
      if(err){
        reject(err)
      }
      resolve(url)
    })
    /*s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });*/
  });
};


module.exports.getObject = async function(body){
  try {
    // const body  = JSON.parse(event.body)
     var name = body.name
     const presignedPostData = await createPresignedGet(name);
 
     return netMappers.mapOutGoingRequest({success: presignedPostData})
   } catch (e) {
     return netMappers.mapOutGoingRequest({err: e.message})
   }
}

/**
 * Use AWS SDK to create pre-signed POST data.
 * We also put a file size limit (100B - 10MB).
 * @param key
 * @param contentType
 * @returns {Promise<object>}
 */
const createPresignedPost = ({ key, contentType }) => {
  const s3 = new S3();
  const params = {
    Expires: 60,
    Bucket: env,
    Key: key,
    ContentType: 'application/octet-stream'
  };

  return new Promise(async (resolve, reject) => {
    s3.getSignedUrl('putObject', params, function(err, url){
      if(err){
        reject(err)
      }
      resolve(url)
    })
    /*s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });*/
  });
};


exports.upload = async function(body){
  console.log("in upload")
  try {
     //const body  = JSON.parse(event.body)
     var name = body.name
     var partName = name.substring(0, name.lastIndexOf('.'))
     const presignedPostData = await createPresignedPost({
       key: `${uniqid()}_${partName}`,
       contentType: mime.getType(name)
     });
     
     return netMappers.mapOutGoingRequest({success: presignedPostData})
   } catch (e) {
     return netMappers(mapOutGoingRequest({success: e.message}))
   }
}

exports.objectExists = async function(key){

  const s3Local = new S3();
  const params = {
    Bucket: env,
    Key: key
  };
  
  return s3Local.headObject(params, (err, data ) =>{
    if(err) return err
    else return data
  })
  /*return new Promise(async (resolve, reject) => {
    s3Local.headObject(params, function(err, url){
      console.log("printing error")
      console.log(err)
      console.log("printing url")
      console.log(url)
      if(err){
        reject(err)
      }
      resolve(url)
    })
  });*/
}