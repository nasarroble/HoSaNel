const imports = require('../importOrganizer')

const mappers = require('../Mappers/personMapper')
const netMappers = require('../Mappers/networkMapper')
const mocker = require('../Mocker/mocker')
const setters = require('./setters')
const savers = require('./savers')
const getters = require('./getters')
const dynamicValidator = require('../Validators/dynamicValidators')
const schemas = require('../Schemas/personDataSchemas')
const update_Mapper = require('../Mappers/updateMapper')
var GET_PERSON_BY_FULLNAME = [
    "first_Name",
    "middle_Name",
    "last_Name"
]


module.exports.get = async (query) => {
    var person = {}
    try {
        if (query.queryType === "GETPERSON") {
            //validate query params
            //then run query
            if (query.querySubType === "GET_PERSON_BY_USER_ID") {
                dynamicValidator.dynamic_Type_Validator(schemas.person.user_ID, query.params.user_ID, "user_ID")
                dynamicValidator.dynamic_Value_Validator(schemas.person.user_ID, query.params.user_ID)
                person = await getters.getPersonByUserID(query.params.user_ID)
                return netMappers.mapOutGoingRequest({ success: person.Item })

            } else if (query.querySubType === "GET_PERSON_BY_FULL_NAME") {
                dynamicValidator.dynamic_Type_Validation_Repeater(schemas.person, query.params.values, GET_PERSON_BY_FULLNAME)
                dynamicValidator.dynamic_Value_Validation_Repeater(schemas.person, query.params.values, GET_PERSON_BY_FULLNAME)
                person = await getters.getPersonByFullName(query.params.values)
                if (person.Item) {
                    return netMappers.mapOutGoingRequest({ success: person.Item })
                } else if (person.Items) {
                    return netMappers.mapOutGoingRequest({ success: person.Items })
                }
            }else if(query.querySubType === "GETPATIENTS"){
                var patients = await getters.getPatients(query.params.provider_ID)
                if (patients.Item) {
                    return netMappers.mapOutGoingRequest({ success: patients.Item })
                } else if (patients.Items) {
                    return netMappers.mapOutGoingRequest({ success: patients.Items })
                }
            }
        }
    } catch (err) {
        return netMappers.mapOutGoingRequest({ err: err })
    }
}


module.exports.add = async (query) => {
    try {
        if (query.queryType === "ADD") {
            if (query.querySubType === "ADD_PERSON") {
                return savers.pre_Add_Person(query.params.person)
            }//what if it's add, but there's no subtype?
        }
    } catch (err) {
        return netMappers.mapOutGoingRequest({ err: err })
    }
}


module.exports.set = async (query) => {
    try {
        if (query.queryType === "SET") {
            update_Mapper.validation_Function_Mapper(query.params)//updater_Mapper maps and validates data
            const validated_Fields = update_Mapper.validated_Fields//this the mapped and validated data ready for the db table
            var ret = {}
            for (key in validated_Fields) {//Loop through data and set all the fields dynamicaly, except user_ID field (primary key)
                if (key !== "user_ID" && validated_Fields[key].field_Name !== "user_ID") {
                    var setter_Name = "" + validated_Fields[key].field_Name
                    const regex = /_/gi
                    setter_Name = setter_Name.replace(regex, '')
                    ret = await setters.dynamic_Field_Setter(validated_Fields[key], setter_Name, query.user_ID)
                }
            }

            return netMappers.mapOutGoingRequest({ success: ret })
        }
    } catch (err) {
        return netMappers.mapOutGoingRequest({ err: err })
    }
}



/*
module.exports.setPersonPictureID = async (data) => {
if(data.table_Name, data.user_ID, data.picture_ID){
    try{
        var response = await setters.setPersonPictureID(data.table_Name, data.user_ID, data.picture_ID)
        console.log("printing picture id response")
        console.log(response)
        return netMappers.mapOutGoingRequest({success: response})
    }catch(e){
        return netMappers.mapOutGoingRequest({err: e})
    }
}
}

module.exports.saveMockData = async () => {
var mocked_Persons = mocker.createContent()
try{
    for(var i = 0; i < mocked_Persons.length; i++){
        await savers.savePerson(mocked_Persons[i])
    }
    return netMappers.mapOutGoingRequest({success: "all persons saved"})
}catch(e){
    console.log(e)
    return netMappers.mapOutGoingRequest({err: e})
}
}*/



