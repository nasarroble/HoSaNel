
const alphanumeric = "[A-Za-z0-9_]"
const alphabetic = "[A-Za-z]"
const numeric = "^(0|[1-9][0-9]*)$"


module.exports.dynamic_Type_Validator = (spec, value, field_Name) => {
    if(typeof value === spec.field_Type && spec.field_Name === field_Name){
        return true
    }else  if(spec.field_Name !== field_Name){

         throw new Error(JSON.stringify({"fieldNameMismatchError": "The provided field name (" + field_Name + ") does not match the expected field name (" + spec.field_Name + ")."}))
    }else{
        console.log(spec)
        throw new Error(JSON.stringify({"valueTypeMismatchError":"The type of the provided value (" + typeof value +") does not match the expected type (" + spec.field_Type + ")."}))
    }
}

module.exports.dynamic_Value_Validator = (spec, value) => {
    var temp = "" + value + ""
    if(spec.field_Type === "string" && spec.alphabetic === undefined){
        var runner = RegExp(alphanumeric)
        if(!runner.test(temp)) {  throw new Error(JSON.stringify({"unexpectedValueError": "The " + spec.field_Name + " field may not have any special characters (not a letter or a number)."}))}
        return true
    }else if(spec.field_Type === "string" && spec.alphabetic){
        var runner = RegExp(alphabetic)
        if(!runner.test(temp)) {  throw new Error(JSON.stringify({"unexpectedValueError": "The " + spec.field_Name + " field may not have any numbers or special characters (only alphabets)."}))}
        return true
    }else if(spec.field_Type === "number"){
        var runner = RegExp(numeric)
        if(!runner.test(temp)) {  throw new Error(JSON.stringify({"unexpectedValueError": "The " + spec.field_Name + " field may not have any characters other than numbers."}))}
        return true
    }

}

module.exports.dynamic_Type_Validation_Repeater = (spec, values, field_Names) => {//Spec might have more keys than there are values, so modify this to limit loop to length of values
    if(values.length === field_Names.length){
        for(var a = 0; a < field_Names.length; a++){
            if(spec[field_Names[a]] !== undefined){
                if(typeof values[a] !== spec[field_Names[a]].field_Type){
                    throw new Error(JSON.stringify({"fieldNameMismatchError": "The provided field name (" + field_Names[i] + ") does not match the expected field name."}))
                }
            }else{
                throw new Error(JSON.stringify({"valueTypeMismatchError":"The type of the provided value (" + values[i] +") does not match the expected type (" + spec.field_Type + ")."}))
            }
        }

    }//What to do about mismatching lengths?
}

module.exports.dynamic_Value_Validation_Repeater = (spec, values, field_Names) => {
    if(values.length === field_Names.length){
        var i = -1;
        var temp = ""

        for(var i = 0; i < values.length; i++){
            temp = "" + values[i] + ""

            if(spec[field_Names[i]].field_Type === "string" && spec[field_Names[i]].alphabetic === undefined){
                var runner = RegExp(alphanumeric)
                if(!runner.test(temp)) {
                    throw new Error(JSON.stringify({"unexpectedValueError": "The " + field_Name[i] + " field may not have any special characters (not a letter or a number)."}))
                }
                continue
            }if(spec[field_Names[i]].field_Type === "string" && spec[field_Names[i]].alphabetic){
                var runner = RegExp(alphabetic)
                if(!runner.test(temp)) {
                    throw new Error(JSON.stringify({"unexpectedValueError": "The " + field_Name[i] + " field may not have any numbers or special characters (only alphabets)."}))
                }
                continue
            }else if(spec[field_Names[a]].field_Type === number){
                var runner = RegExp(numeric)
                if(!runner.test(temp)) {
                    throw new Error(JSON.stringify({"unexpectedValueError": "The " + field_Name[i] + " field may not have any characters other than numbers."}))
                    }
                continue
            }
        }
    }
}

module.exports.dynamic_Spec_Verifier = (spec) => {
    for(var key in spec){
        if(key === "field_Name" || key === "field_Type" || key === "value" || key === "alphabetic" || key === "actual_Type"){
        }else {
            throw new Error(JSON.stringify({"illegalField": "The field named (" + key + ") is not allowed. Please include only the allowed fields in your JSON. Refer to the docs for the allowed fields"}))

        }
    }
}