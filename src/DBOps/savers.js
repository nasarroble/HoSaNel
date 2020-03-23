const imports = require('../importOrganizer')
const personsTableName = process.env.personsTableName
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const mappers = require('../Mappers/personMapper')
const netMappers = require('../Mappers/networkMapper')


async function  add_Person(person) {
    if (person.user_ID != undefined) {
        var retData = docClient.put({
            TableName: personsTableName,
            Item: person
            
        }).promise()
        return retData
    }
}

module.exports.pre_Add_Person = async (newPerson) => {
    var person = {}
    //validate data
    try{
            person = mappers.personMapper(newPerson)
            person = mappers.finalized_re_Mapper(person)
            var response = await add_Person(person)
            return netMappers.mapOutGoingRequest({success: response})
    }catch(err){
        return netMappers.mapOutGoingRequest({err: err})
    }
}

module.exports.savePerson = add_Person
