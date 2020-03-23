const AWS = require('aws-sdk');
const netMapper = require('../Mappers/networkMapper')
//var publishTextPromise = new AWS.SNS()

module.exports.sendMessage = async (data) => {
    const SMSparams = {
        Message: data.message_Content, /* required */
        PhoneNumber: data.phone_Number
      };

      const publishTextPromise = new AWS.SNS({ apiVersion: 
        '2010-03-31' }).publish(SMSparams).promise();

      await publishTextPromise.then( data => {
        console.log("MessageID is " + data.MessageId);
            return netMapper.mapOutGoingRequest({success: data})//Change this to return the message ID so it can be saved
      }).catch( err => {
          console.error(err, err.stack);
          return netMapper.mapOutGoingRequest({err: err})
      });
}
