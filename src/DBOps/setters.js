const imports = require('../importOrganizer')
const personsTableName = process.env.personsTableName
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function setPersonPictureID(user_ID, picture_ID){
    var params = {
        TableName: personsTableName,
        Key: {
            "user_ID":user_ID
        },
        UpdateExpression: "SET picture_ID = :picid",
        ExpressionAttributeValues: { 
            ":picid": picture_ID
        }
    }

    return docClient.update(params).promise()

}


function dynamic_Field_Setter(spec, setter_Name, user_ID){
    var paramstemp = {
        TableName: personsTableName,
        Key: {
            "user_ID":user_ID
        },
        UpdateExpression: "SET picture_ID = :picid",
        ExpressionAttributeValues: { 
            ":picid": spec.value
        }
    }


    var UpdateExpression = "SET " + spec.field_Name + " = :" + setter_Name
    var temp = ":" + setter_Name
    var ExpressionAttributeValues = {}
    ExpressionAttributeValues[temp] = spec.value
    var params = {
        TableName: personsTableName,
        Key: {
            "user_ID":user_ID
        },
        UpdateExpression: UpdateExpression,
        ExpressionAttributeValues: ExpressionAttributeValues,
        
    }

    return docClient.update(params).promise()
}








module.exports.dynamic_Field_Setter = dynamic_Field_Setter
module.exports.setPersonPictureID = setPersonPictureID