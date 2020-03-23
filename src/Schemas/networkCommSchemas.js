module.exports = {
    basic: {
        statusCode: 200,
        'isBase64Encoded': false,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        'body': JSON.stringify({ //body must be a stringyfied object of this format
            error: false,
            data: {},
            message: null
        })
    }
}
