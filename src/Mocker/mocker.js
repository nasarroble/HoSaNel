var imports = require('../importOrganizer')
const faker = require('faker')
const schemas = require('../Schemas/personDataSchemas')

function createPerson(){
    var genders = ['male', 'female']
    var gender = genders[Math.floor(Math.random() * Math.floor(2))]
    var person = schemas.person
        person.user_ID =  faker.internet.userName()
        person.first_Name =  faker.name.firstName() 
        person.middle_Name =  faker.name.firstName() 
        person.last_Name =  faker.name.lastName() 
        person.picture_ID = String 
        person.summary =  faker.lorem.paragraph()
        person.gender = gender
        person.age = Math.floor(Math.random() * Math.floor(100))
        person.residences = [] 
        person.work = [] 
        person.family = {}
        person.phones = []
        person.visitations = []
        person.primary_Phone_Number = faker.phone.phoneNumber()
        person.contacts = []
    return person
}


module.exports.createContent = () => {
    var localPost = []
    for(var a = 0; a < 100; a++){
        var temp = createPerson()
        localPost.push(temp)
    }

    return localPost
}

