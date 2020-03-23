var schemas = require('../Schemas/personDataSchemas')
var validators = require('../Validators/dynamicValidators')
var residences_Mapper = require('./objectMappers/residencesMapper')
var location_Mapper = require('./objectMappers/locationMapper')

//Make sure in the schema, the object properties have a reference field to their sub specs

module.exports.validated_Fields = []

module.exports.validated_Basic_Fields = {}

module.exports.validated_Message = {
    field_Name: "messages",
    value: {}
}

module.exports.validated_Residence = {
    field_Name: "residence",
    value: {}
}


module.exports.validated_Work = {
    field_Name: "worq",
    value: {}
}

module.exports.validated_Family = {
    field_Name: "fam",
    value: {}
}

module.exports.validated_Phone = {
    field_Name: "phone",
    value: {}
}

module.exports.validated_Visitations = {
    field_Name: "visitations",
    value: {}
}

module.exports.validated_Medical = {
    field_Name: "medical",
    value: {}
}

module.exports.validation_Basic_Fields_Mapper = (fields) => {
    if (fields.field_Type !== "object") {
        validators.dynamic_Type_Validator(schemas.person[fields.field_Name], fields.value, fields.field_Name)
        validators.dynamic_Value_Validator(schemas.person[fields.field_Name], fields.value)
        validators.dynamic_Spec_Verifier(fields)
        this.validated_Basic_Fields[fields.field_Name] = { field_Name: fields.field_Name }
        this.validated_Basic_Fields[fields.field_Name].value = fields.value
    }
}


module.exports.validation_Residences_Mapper = (residences) => {//when should i be passing in value and whould should i not be passing in value
    schemas.contact.field_Name = "co_Dwellers"
    if (residences.length === 1) {
        validators.dynamic_Type_Validator(schemas.residence, residences[0], residences[0].field_Name)
        this.validated_Residence.field_Name = residences[0].field_Name
        this.validated_Residence.value = {}
        for (var key in residences[0].value) {
            if (schemas.residence[key].field_Type !== "object") {
                validators.dynamic_Type_Validator(schemas.residence[key], residences[0].value[key].value, residences[0].value[key].field_Name)
                validators.dynamic_Value_Validator(schemas.residence[key], residences[0].value[key].value)
                validators.dynamic_Spec_Verifier(residences[0].value[key])
                this.validated_Residence.value[residences[0].value[key].field_Name] = residences[0].value[key].value
            } else if (schemas.residence[key].field_Type === "object") {
                if (schemas.residence[key].field_Name === "residence_Types") {
                    validators.dynamic_Type_Validator(schemas.residence_Types, residences[0].value[key], residences[0].value[key].field_Name)
                    residences_Mapper.type(residences[0].value[key])
                    validators.dynamic_Spec_Verifier(residences[0].value[key])
                    this.validated_Residence.value.residence_Types = residences_Mapper.validated_Type
                } else if (schemas.residence[key].field_Name === "co_Dwellers") {
                    validators.dynamic_Type_Validator(schemas.contact, residences[0].value[key], residences[0].value[key].field_Name)
                    residences_Mapper.co_Dwellers(residences[0].value[key].value)
                    validators.dynamic_Spec_Verifier(residences[0].value[key])
                    this.validated_Residence.value[residences[0].value[key].field_Name] = residences_Mapper.validated_Contact
                }
            }
        }
    } else if (residences.length > 1) {//future feature for batch processing data, all other general object arrays (arrays of family, residence ...) are same NOTE TESTED
        for (var key in residences) {
            validators.dynamic_Type_Validator(schemas.residence, residences[key], residences[key].field_Name)
            for (var kay in residences[key].value) {
                if (schemas.residence[key].value[kay].field_Type !== "object") {
                    validators.dynamic_Type_Validator(schemas.residence[key][kay], residences[key].value[kay], residences[key].value[kay].field_Name)
                    validators.dynamic_Value_Validator(schemas.residence[key][kay], residences[key].value[kay])
                } else if (schemas.residence[key][kay].field_Type === "object") {
                    if (schemas.residence[key][kay].field_Name === "residence_Types") {
                        validators.dynamic_Type_Validator(schemas.residence_Types, residences[key].value[kay], residences[key].value[kay].field_Name)
                        residences_Mapper.type(residences[key].value[kay])
                    } else if (schemas.residence[key][kay].field_Name === "co_Dwellers") {
                        validators.dynamic_Type_Validator(schemas.contact, residences[key].value[kay], residences[key].value[kay].field_Name)
                        residences_Mapper.co_Dwellers(residences[key].value[kay])
                    }
                }
            }
        }
    }
}

module.exports.validation_Work_Mapper = (worq) => {
    if (worq.value.length === 1) {
        for (var key in worq.value[0]) {
            if (worq.value[0][key].field_Type !== "object") {
                validators.dynamic_Type_Validator(schemas.worq[key], worq.value[0][key].value, worq.value[0][key].field_Name)
                validators.dynamic_Value_Validator(schemas.worq[key], worq.value[0][key].value)
                validators.dynamic_Spec_Verifier(worq.value[0][key])
                //this.validated_Work.value[worq.value[0][key].field_Name] = worq.value[0][key].value
            } else if (worq.value[0][key].field_Type === "object") {
                location_Mapper.validation_Location_Mapper(worq.value[0][key])
                validators.dynamic_Spec_Verifier(worq.value[0][key])
                this.validated_Work.value[worq.value[0][key].field_Name] = location_Mapper.validated_Location
            }
        }
    }
}

module.exports.validation_Family_Mapper = (fam) => {
    for (var key in fam.value) {
        if (key !== "members") {
            validators.dynamic_Type_Validator(schemas.person.fam[key], fam.value[key].value, fam.value[key].field_Name)
            validators.dynamic_Value_Validator(schemas.person.fam[key], fam.value[key].value)
            validators.dynamic_Spec_Verifier(fam.value[key])
            this.validated_Family.value[fam.value[key].field_Name] = fam.value[key].value
        } else if (key === "members") {
            for (var kay in fam.value[key].value) {
                for (var koy in fam.value[key].value[kay].value) {
                    if (koy !== "exposure_Type") {
                        validators.dynamic_Type_Validator(schemas.familyMember[koy], fam.value[key].value[kay].value[koy].value, fam.value[key].value[kay].value[koy].field_Name)
                        validators.dynamic_Value_Validator(schemas.familyMember[koy], fam.value[key].value[kay].value[koy].value)
                        validators.dynamic_Spec_Verifier(fam.value[key].value[kay].value[koy])
                        this.validated_Family.value[fam.value[key].value[kay].value[koy].field_Name] = fam.value[key].value[kay].value[koy].value
                    } else if (koy === "exposure_Type") {
                        residences_Mapper.exposure_Type(fam.value[key].value[kay].value[koy])
                        validators.dynamic_Spec_Verifier(fam.value[key].value[kay].value[koy])
                        this.validated_Family.value[fam.value[key].value[kay].value[koy].field_Name] = residences_Mapper.validated_Exposure_Type
                    }
                }
            }
        }
    }
}

module.exports.validation_Phones_Mapper = (phones) => {
    if (phones.length > 1) {
        for (var key in phones) {
            validators.dynamic_Type_Validator(schemas.phone, phones[key], phones[key].field_Name)
            for (var kay in phones[key][kay]) {
                if (kay !== "field_Name" && kay !== "field_Type") {
                    validators.dynamic_Type_Validator(schemas.phone, phones[key][kay], phones[key][kay].field_Name)
                    validators.dynamic_Value_Validator(schemas.phone, phones[key][kay])
                }
            }
        }
    } else if (phones.value.length === 1) {
        for (var key in phones.value[0]) {
            validators.dynamic_Type_Validator(schemas.phone[key], phones.value[0][key].value, phones.value[0][key].field_Name)
            validators.dynamic_Value_Validator(schemas.phone[key], phones.value[0][key].value)
            validators.dynamic_Spec_Verifier(phones.value[0][key])
            this.validated_Phone.value[phones.value[0][key].field_Name] = phones.value[0][key].value
        }

    }
}

module.exports.validation_Visitations_Mapper = (visits) => {
    if (visits.value.length === 1) {
        validators.dynamic_Spec_Verifier(visits)
        for (var key in visits.value[0]) {
            if (visits.value[0][key].field_Type !== "object") {
                validators.dynamic_Type_Validator(schemas.visitations[key], visits.value[0][key].value, visits.value[0][key].field_Name)
                validators.dynamic_Value_Validator(schemas.visitations[key], visits.value[0][key].value)
                validators.dynamic_Spec_Verifier(visits.value[0][key])
                this.validated_Visitations.value[visits.value[0][key].field_Name] = visits.value[0][key].value
            } else if (visits.value[0][key].field_Type === "object" && visits.value[0][key].field_Name === "location") {
                location_Mapper.validation_Location_Mapper(visits.value[0][key])
                this.validated_Visitations.value[visits.value[0][key].field_Name] = location_Mapper.validated_Location
            }
        }
    } else if (visits.length > 1) {
        for (var key in visits.value[0]) {
            for (var kay in visits[0][key][kay]) {
                if (kay !== "field_Name" && kay !== "field_Type") {
                    if (visits[0][key][kay].field_Type !== "object") {
                        validators.dynamic_Type_Validator(schemas.visitations, visits[0][key][kay], visits[0][key][kay].field_Name)
                        validators.dynamic_Value_Validator(schemas.visitations, visits[key][kay])
                    } else if (visits[0][key][kay].field_Type === "object" && visits[key][kay].field_Name === "location") {
                        location_Mapper.validation_Location_Mapper(visits[0][key][kay])
                    }
                }
            }
        }
    }

}

module.exports.validation_Medical_Mapper = (medical) => {
    validators.dynamic_Type_Validator(medical, medical.value, medical.field_Name)
    for (var key in medical.value) {
        validators.dynamic_Spec_Verifier(medical.value[key])
        if (!medical.value[key].actual_Type) {
            for (var inner in medical.value[key]) {
                validators.dynamic_Spec_Verifier(medical.value[key][inner])
                validators.dynamic_Type_Validator(schemas.medical[key][inner], medical.value[key][inner].value, medical.value[key][inner].field_Name)
                validators.dynamic_Value_Validator(schemas.medical[key][inner], medical.value[key][inner].value)
                this.validated_Medical.value[key][inner] = medical.value[key][inner].value
            }
        } else if (medical.value[key].actual_Type === "Array" && key === "testing") {
            for (var test in medical.value[key].value) {
                validators.dynamic_Spec_Verifier(medical.value[key][test])
                validators.dynamic_Type_Validator(schemas.test_Schema[test], medical.value[key][test].value, medical.value[key][test].field_Name)
                validators.dynamic_Value_Validator(schemas.test_Schema[test], medical.value[key][test])
                this.validated_Medical.value[key][test] = medical.value[key][test].value
            }
        }
    }
}

module.exports.validation_Messages_Mapper = (messages) => {
    if(messages.value.length === 1){
        validators.dynamic_Spec_Verifier(messages)
        for(var key in messages.value){
            validators.dynamic_Spec_Verifier(messages.value[key])
            validators.dynamic_Type_Validator(schemas.message[key], messages.value[key].value, messages.value[key].field_Name)
            validators.dynamic_Value_Validator(schemas.message[key], messages.value[key].value)
            this.validated_Message.value[key] = messages.value[key].value
        }
    }
}

module.exports.validation_Function_Mapper = (params) => {
    for (var key in params) {
        if (key === "user_ID" || key === "first_Name" || key === "middle_Name" || 
        key === "last_Name" || key === "picture_ID" || key === "summary" || key === "gender" || key === "age" || 
        key === "primary_Phone_Number" || key === "provider_ID" || key === "institution_ID") {
            this.validation_Basic_Fields_Mapper(params[key])
            //console.log(this.validated_Basic_Fields)
        } else if (key === "medical") {
            this.validation_Medical_Mapper(params[key])
            this.validated_Fields.push(this.validated_Medical)
            //console.log(this.validated_Medical)
        } else if (key === "residence") {
            this.validation_Residences_Mapper(params[key])
            this.validated_Fields.push(this.validated_Residence)
            //console.log(this.validated_Residence)
        } else if (key === "worq") {
            this.validation_Work_Mapper(params[key])
            this.validated_Fields.push(this.validated_Work)
            //console.log(this.validated_Work)
        } else if (key === "fam") {
            this.validation_Family_Mapper(params[key])
            this.validated_Fields.push(this.validated_Family)
            //console.log(this.validated_Family)
        } else if (key === "phone") {
            this.validation_Phones_Mapper(params[key])
            this.validated_Fields.push(this.validated_Phone)
            //console.log(this.validated_Phone)
        } else if (key === "visitations") {
            this.validation_Visitations_Mapper(params[key])
            this.validated_Fields.push(this.validated_Visitations)
            //console.log(this.validated_Visitations)
        } else if (key === "contacts") {
            residences_Mapper.co_Dwellers(params[key])
            this.validated_Fields.push(this.validated_Contact)
            //console.log(this.validated_Contact)
        } else if (key === "messages") {
            this.validation_Messages_Mapper(params[key])
            this.validated_Fields.push(this.validated_Message)
            //console.log(this.validated_Contact)
        }
    }

    if (this.validated_Basic_Fields !== undefined) for (var k in this.validated_Basic_Fields) this.validated_Fields.push(this.validated_Basic_Fields[k])


}

