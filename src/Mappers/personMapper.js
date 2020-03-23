const personSchemas = require('../Schemas/personDataSchemas')
const netMapper = require('../Mappers/networkMapper')
const validators = require('../Validators/dynamicValidators')
const update_Mapper = require('./updateMapper')


module.exports.personMapper = (newPerson) => {
    try{
        var person = personSchemas.person
        update_Mapper.validation_Function_Mapper(newPerson)
        return person
    }catch(e){
        return netMapper.mapOutGoingRequest({err: e})
    }

}

module.exports.finalized_re_Mapper =() =>{
    try{                               
        return update_Mapper.validated_Fields
    }catch(e){
        return netMapper.mapOutGoingRequest({err: e})
    }
}