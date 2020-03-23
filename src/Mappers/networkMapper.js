const imports = require('../importOrganizer')
const networkSchemas = require('../Schemas/networkCommSchemas')


//ensures that the data set back to the user meets the formatting requirements of API Gateway
module.exports.mapOutGoingRequest = (data) => {
    var response = networkSchemas.basic
    if(data.success){
        response.body = JSON.stringify({
            error: false,
            data: data.success,
            message: null
        })
        return response
    }else if(data.err){
        response.statusCode = 500
        response.body = JSON.stringify({
            error: true,
            data: null,
            message: data.err.message
        })
        return response
    }
}

var mapIncomingRequest = (data) => {
//map incoming requests to actions/remove the messy logic away from the handler/direct traffic
}