const faker = require('faker')
const schemas = require('./Schemas/personDataSchemas')
const uuid = require('uuid')
const personsTableName = process.env.personsTable
const networkSchemas = require('./Schemas/networkCommSchemas')
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const uniqid = require("uniqid");
const mappers = require('./Mappers/personMapper')
const netMappers = require('./Mappers/networkMapper')
const mocker = require('./Mocker/mocker')
const personValidator = require('./Validators/validatePerson')
const setters = require('./DBOps/setters')
const savers = require('./DBOps/savers')
const getters = require('./DBOps/getters')
const DBOps = require('./DBOps/DBOps')
module.exports = {
    faker,
    schemas,
    uuid,
    personsTableName,
    networkSchemas,
    AWS,
    docClient,
    uniqid,
    mappers,
    netMappers, 
    mocker,
    personValidator,
    setters,
    savers,
    getters,
    DBOps
}