const schemas = require('./../../Schemas/personDataSchemas')
const validators = require('../../Validators/dynamicValidators')
const update_Mapper = require('../updateMapper')

module.exports.validated_Type = {}
module.exports.validated_Contact = {}
module.exports.validated_Exposure_Type = {}

this.validated_Location = {}
module.exports.exposure_Type = (exposure_Types) => {
    validators.dynamic_Type_Validator(schemas.exposure_Type, exposure_Types.value, exposure_Types.field_Name)
    for (var key in exposure_Types.value) {
        validators.dynamic_Type_Validator(schemas.exposure_Type[key], exposure_Types.value[key], exposure_Types.value[key].field_Name)
        validators.dynamic_Value_Validator(schemas.exposure_Type[key], exposure_Types.value[key])
        validators.dynamic_Spec_Verifier(exposure_Types.value[key])
        this.validated_Exposure_Type[exposure_Types.value[key].field_Name] = exposure_Types.value[key].value 
        for (var kay in exposure_Types.value[key].value) {
            validators.dynamic_Type_Validator(schemas.exposure_Type[key][kay], exposure_Types.value[key].value[kay].value, exposure_Types.value[key].value[kay].field_Name)
            validators.dynamic_Value_Validator(schemas.exposure_Type[key][kay], exposure_Types.value[key].value[kay].value)
            validators.dynamic_Spec_Verifier(exposure_Types.value[key].value[kay])
            this.validated_Exposure_Type[exposure_Types.value[key].field_Name][exposure_Types.value[key].value[kay].field_Name] = exposure_Types.value[key].value[kay].value
        }
    }
}


module.exports.type = (type) => {
    for (var key in type.value) {
        if (schemas.residence_Types[key] !== undefined) {
            validators.dynamic_Type_Validator(schemas.residence_Types[key], type.value[key].value, type.value[key].field_Name)
            validators.dynamic_Value_Validator(schemas.residence_Types[key], type.value[key].value)
            validators.dynamic_Spec_Verifier(type.value[key])
            this.validated_Type[type.value[key].field_Name] = type.value[key].value
        } else {
            //throw error, this is needed everywhere
        }
    }
}

module.exports.co_Dwellers = (co_Dwellers) => {//complete adding the .value
    schemas.contact.field_Name = "cow_Dwellers"
    if (co_Dwellers.length > 1) {
        for (var key in co_Dwellers) {
            validators.dynamic_Type_Validator(schemas.contact, co_Dwellers[key], co_Dwellers[key].field_Name)
            for (var kay in co_Dwellers[key]) {
                if (co_Dwellers[key][kay].field_Name !== "exposure_Type" && co_Dwellers[key][kay].field_Name !== "location") {
                    validators.dynamic_Type_Validator(schemas.contact[kay], co_Dwellers[key][kay], co_Dwellers[key][kay].field_Name)
                    validators.dynamic_Value_Validator(schemas.contact[kay], co_Dwellers[key][kay])
                } else if (co_Dwellers[key][kay].field_Name === "exposure_Type") {
                    exposure_Type(co_Dwellers[key][kay])
                } else if (co_Dwellers[key][kay].field_Name === "location") {
                    for (var koy in co_Dwellers[key][kay]) {
                        if (co_Dwellers[key][kay][koy].field_Name !== "location_Type") {
                            validators.dynamic_Type_Validator(schemas.location[koy], co_Dwellers[key][kay][koy], co_Dwellers[key][kay][koy].field_Name)
                            validators.dynamic_Value_Validator(schemas.location[koy], co_Dwellers[key][kay][koy])
                        } else if (co_Dwellers[key][kay][koy].field_Name === "location_Type") {
                            for (var kuy in co_Dwellers[key][kay][koy]) {
                                validators.dynamic_Type_Validator(schemas.location_Type[kuy], co_Dwellers[key][kay][koy][kuy], co_Dwellers[key][kay][koy][kuy].field_Name)
                                validators.dynamic_Value_Validator(schemas.location_Type[kuy], co_Dwellers[key][kay][koy][kuy])
                            }
                        }
                    }
                }
            }
        }
    } else if (co_Dwellers.length === 1) {
        for (var key in co_Dwellers[0]) {
            if (co_Dwellers[0][key].field_Name !== "exposure_Type" && co_Dwellers[0][key].field_Name !== "location") {
                validators.dynamic_Type_Validator(schemas.contact[key], co_Dwellers[0][key].value, co_Dwellers[0][key].field_Name)
                validators.dynamic_Value_Validator(schemas.contact[key], co_Dwellers[0][key].value)
                validators.dynamic_Spec_Verifier(co_Dwellers[0][key])
                this.validated_Contact[co_Dwellers[0][key].field_Name] = co_Dwellers[0][key].value
            } else if (co_Dwellers[0][key].field_Name === "phones"){
                update_Mapper.validation_Phones_Mapper(co_Dwellers[0][key])
                this.validated_Contact[co_Dwellers[0][key].field_Name] = update_Mapper.validated_Phone//This only works for one value right now!
            } else if (co_Dwellers[0][key].field_Name === "exposure_Type") {
                this.exposure_Type(co_Dwellers[0][key])
                validators.dynamic_Spec_Verifier(co_Dwellers[0][key])
                this.validated_Contact[co_Dwellers[0][key].field_Name] = this.validated_Exposure_Type
            } else if (co_Dwellers[0][key].field_Name === "location") {
                validators.dynamic_Type_Validator(schemas.location, co_Dwellers[0][key], co_Dwellers[0][key].field_Name)
                
                for (var kay in co_Dwellers[0][key].value) {
                    if (co_Dwellers[0][key].value[kay].field_Name !== "location_Type") {
                        validators.dynamic_Type_Validator(schemas.location[kay], co_Dwellers[0][key].value[kay].value, co_Dwellers[0][key].value[kay].field_Name)
                        validators.dynamic_Value_Validator(schemas.location[kay], co_Dwellers[0][key].value[kay].value)
                        validators.dynamic_Spec_Verifier(co_Dwellers[0][key].value[kay])
                        this.validated_Location[co_Dwellers[0][key].value[kay].field_Name] = co_Dwellers[0][key].value[kay].value
                    } else if (co_Dwellers[0][key].value[kay].field_Name === "location_Type") {
                        for (var kuy in co_Dwellers[0][key].value[kay].value) {
                            validators.dynamic_Type_Validator(schemas.location_Type[kuy], co_Dwellers[0][key].value[kay].value[kuy].value, co_Dwellers[0][key].value[kay].value[kuy].field_Name)
                            validators.dynamic_Value_Validator(schemas.location_Type[kuy], co_Dwellers[0][key].value[kay].value[kuy].value)
                            validators.dynamic_Spec_Verifier(co_Dwellers[0][key].value[kay].value[kuy])
                            if(this.validated_Location[co_Dwellers[0][key].value[kay].field_Name] === undefined) this.validated_Location[co_Dwellers[0][key].value[kay].field_Name]= {} 
                            this.validated_Location[co_Dwellers[0][key].value[kay].field_Name][co_Dwellers[0][key].value[kay].value[kuy].field_Name] = co_Dwellers[0][key].value[kay].value[kuy].value
                        }
                    }
                }
                this.validated_Contact.location = this.validated_Location
            }
        }

    }
}

