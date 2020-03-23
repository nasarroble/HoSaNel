var schemas = require('../../Schemas/personDataSchemas')
var validators = require('../../Validators/dynamicValidators')
module.exports.validated_Location = {}

module.exports.validation_Location_Mapper = (location) => {
    validators.dynamic_Type_Validator(schemas.location, location.value, location.field_Name)
    //location = location.value
    for (var key in location.value) {
        if (location.value[key].field_Name !== "location_Type") {
            validators.dynamic_Type_Validator(schemas.location[key], location.value[key].value,location.value[key].field_Name)
            validators.dynamic_Value_Validator(schemas.location[key], location.value[key].value)
            validators.dynamic_Spec_Verifier(location.value[key])
            this.validated_Location[location.value[key].field_Name] = location.value[key].value
        } else if (location.value[key].field_Name === "location_Type") {
            for (var kay in location.value[key].value) {
                validators.dynamic_Type_Validator(schemas.location_Type[kay], location.value[key].value[kay].value,location.value[key].value[kay].field_Name)
                validators.dynamic_Value_Validator(schemas.location_Type[kay], location.value[key].value[kay].value)
                validators.dynamic_Spec_Verifier(location.value[key].value[kay])
                if(this.validated_Location[location.value[key].field_Name] === undefined) this.validated_Location[location.value[key].field_Name] = {}
                this.validated_Location[location.value[key].field_Name][location.value[key].value[kay].field_Name] = location.value[key].value[kay].value
            }
        }
    }
}

