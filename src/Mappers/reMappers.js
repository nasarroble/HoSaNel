module.exports.simp_Fields_Remapper = (field) => {
    var newField = {}
    newField[field.field_Name] = field.value
    return newField
}


module.exports.residence_Remapper = (residence) => {
    var res = {}
    res[residence.field_Name] = residence.field_Name
    Object.keys(residence).map(function(key, index){

    })
}