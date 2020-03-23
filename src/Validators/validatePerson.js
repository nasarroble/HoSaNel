module.exports.typeValidater = (newPerson) => {
    if(typeof newPerson.user_ID !== "string"){
        throw Error("user_ID field must be of type string")
    }
    if(typeof newPerson.first_Name !== "string"){
        throw Error("first_Name field must be of type string")
    }
    if(typeof newPerson.middle_Name !== "string"){
        throw Error("middle_Name field must be of type string")
    }
    if(typeof newPerson.last_Name !== "string"){
        throw Error("last_Namefield must be of type string")
    }
    if(typeof newPerson.picture_ID !== "string"){
        throw Error("picture_ID  field must be of type string")
    }
    if(typeof newPerson.summary !== "string"){
        throw Error("summary field must be of type string")
    }
    if(typeof newPerson.gender !== "string"){
        throw Error("gender field must be of type string")
    }
    if(typeof newPerson.age !== "number"){
        throw Error("age field must be of type string")
    }
    if(typeof newPerson.residences !== "object"){
        throw Error("residences field must be of type string")
    }
    if(typeof newPerson.work !== "object"){
        throw Error("work field must be of type string")
    }
    if(typeof newPerson.family !== "object"){
        throw Error("family field must be of type string")
    }
    if(typeof newPerson.phones !== "object"){
        throw Error("phones field must be of type string")
    }if(typeof newPerson.primary_Phone_Number !== "string"){
        throw Error("primary_Phone_Number field must be of type strings")
    }
    if(typeof newPerson.visitations !== "object"){
        throw Error("visitations field must be of type string")
    }
    if(typeof newPerson.contacts !== "object"){
        throw Error("contacts field must be of type string")
    }
    return true
}