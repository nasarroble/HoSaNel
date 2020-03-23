const personsTableName = process.env.personsTableName
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


//query GSI by 
function getPersonByFullName(names){
    var first_Name = names[0]
    var middle_Name = names[1]
    var last_Name = names[2]
    var params = {        
        TableName: personsTableName,
        IndexName: "first_Name-middle_Name-index",
        KeyConditionExpression: "first_Name = :firstName and middle_Name = :middleName",
        ExpressionAttributeValues: {
            ":firstName": first_Name,
            ":middleName": middle_Name
        },     
      };
    var posts = docClient.query(params).promise()
    return posts
}


//Query table by primary key
function getPersonByUserID(user_ID){
    var params = {
        TableName: personsTableName,
        Key: {
          'user_ID': user_ID
        },
      };
    var profile = docClient.get(params).promise()
    
    return profile
}

function getPatients(prover_ID){
  var params = {        
    TableName: personsTableName,
    IndexName: "provider_ID-index",
    KeyConditionExpression: "provider_ID = :provider",
    ExpressionAttributeValues: {
        ":provider": prover_ID
    },     
  };
  return docClient.query(params).promise()
}
module.exports.getPersonByFullName = getPersonByFullName
module.exports.getPersonByUserID = getPersonByUserID
module.exports.getPatients = getPatients
