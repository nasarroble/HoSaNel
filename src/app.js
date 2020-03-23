const imports = require('./importOrganizer')
const DBOps = require('./DBOps/DBOps')
const netMappers = require('./Mappers/networkMapper')
const SNSOps = require('./SNSOps/SNSOps')
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */


exports.lambdaHandler = async (event, context) => {
    try {
        var body = {    "query": {
            "queryType": "SET",
            "params": {
                "residence": [
                    {
                        "field_Name": "residence",
                        "field_Type": "object",
                        "value": {
                            "lat": {
                                "field_Name": "lat",
                                "field_Type": "string",
                                "value": "kdkfh3938jslj"
                            },
    
                            "long": {
                                "field_Name": "long",
                                "field_Type": "string",
                                "value": "dkfj393859djfks"
                            },
    
                            "number": {
                                "field_Name": "number",
                                "field_Type": "number",
                                "value": 897
                            },
    
                            "road": {
                                "field_Name": "road",
                                "field_Type": "string",
                                "value": "Hodan"
                            },
    
                            "residence_Types": {
                                "field_Name": "residence_Types",
                                "field_Type": "object",
                                "value": {
    
                                    "rural": {
                                        "field_Name": "rural",
                                        "field_Type": "Boolean",
                                        "value": false
                                    },
    
                                    "urban": {
                                        "field_Name": "urban",
                                        "field_Type": "Boolean",
                                        "value": true
                                    },
    
                                    "house": {
                                        "field_Name": "house",
                                        "field_Type": "Boolean",
                                        "value": false
                                    },
    
                                    "apartment": {
                                        "field_Name": "apartment",
                                        "field_Type": "Boolean",
                                        "value": true
                                    },
    
                                    "shared": {
                                        "field_Name": "shared",
                                        "field_Type": "Boolean",
                                        "value": false
                                    }
                                }
                            },
    
                            "city": {
                                "field_Name": "city",
                                "field_Type": "string",
                                "alphabetic": true,
                                "value": "Kismanyo"
    
                            },
    
                            "burough": {
                                "field_Name": "burough",
                                "field_Type": "string",
                                "alphabetic": true,
                                "value": "Calanleey"
    
                            },
    
                            "state": {
                                "field_Name": "state",
                                "field_Type": "string",
                                "alphabetic": true,
                                "value": "Jubba"
    
                            },
    
                            "exposure_Count": {
                                "field_Name": "exposure_Count",
                                "field_Type": "number",
                                "value": 5
                            },
    
                            "co_Dwellers": {
                                "field_Name": "co_Dwellers",
                                "field_Type": "object",
                                "actual_Type": "Array",
                                "value": [
                                    {
    
                                        "first_Name": {
                                            "field_Name": "first_Name",
                                            "field_Type": "string",
                                            "alphabetic": true,
                                            "value": "Qaanso"
                                        },
    
                                        "middle_Name": {
                                            "field_Name": "middle_Name",
                                            "field_Type": "string",
                                            "alphabetic": true,
                                            "value": "Qaar"
                                        },
    
                                        "last_Name": {
                                            "field_Name": "last_Name",
                                            "field_Type": "string",
                                            "alphabetic": true,
                                            "value": "Qumane"
                                        },
                                        "phones": {
                                            "field_Name": "phones",
                                            "field_Type": "object",
                                            "actual_Type": "Array"
                                         },
                                        "user_ID": {
                                            "field_Name": "user_ID",
                                            "field_Type": "string",
                                            "value": "NA"
                                        },
    
                                        "exposure_Type": {
                                            "field_Name": "exposure_Type",
                                            "field_Type": "object",
                                            "value": {
    
                                                "physical": {
    
                                                    "field_Name": "physical",
                                                    "field_Type": "object",
                                                    "value": {
                                                        "hand_Shake": {
                                                            "field_Name": "hand_Shake",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        },
    
                                                        "hug": {
                                                            "field_Name": "hug",
                                                            "field_Type": "boolean",
                                                            "value": true
                                                        },
    
                                                        "long_Duration_Body_Contact": {
                                                            "field_Name": "long_Duration_Body_Contact",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        },
    
                                                        "general_Touch": {
                                                            "field_Name": "general_Touch",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        }
                                                    }
    
                                                },
    
                                                "spacial": {
    
                                                    "field_Name": "special",
                                                    "field_Type": "object",
                                                    "value": {
                                                        "shared_Room": {
                                                            "field_Name": "shared_Room",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        },
    
                                                        "personal_Space": {
                                                            "field_Name": "personal_Space",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        }
                                                    }
    
    
                                                },
    
                                                "utility": {
    
                                                    "field_Name": "utility",
                                                    "field_Type": "object",
                                                    "value": {
                                                        "shared_Foodware": {
                                                            "field_Name": "shared_Foodware",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        },
    
                                                        "shared_Food": {
                                                            "field_Name": "shared_Food",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        },
    
                                                        "shared_Vehicle": {
                                                            "field_Name": "shared_Vehicle",
                                                            "field_Type": "boolean",
                                                            "value": false
                                                        }
                                                    }
    
                                                }
                                            }
                                        },
    
                                        "time": {
                                            "field_Name": "time",
                                            "field_Type": "string",
                                            "value": "kdkfhs"
                                        },
                                        "date": {
                                            "field_Name": "date",
                                            "field_Type": "string",
                                            "value": "ljsdfksldf"
                                        },
                                        "duration": {
                                            "field_Name": "duration",
                                            "field_Type": "string",
                                            "value": "10 mnts"
                                        }
                                    }
                                ]
                            }
                        }
    
                    }
                ]
    
            }
        }
    }
        if (body.query !== undefined) {
            if (body.query.queryType === "GETPERSON") {
                return DBOps.get(body.query)
            } else if (body.query.queryType === "ADD") {
                return DBOps.add(body.query)
            } else if (body.query.queryType === "SET") {
                return DBOps.set(body.query)
            }
        } else if (body.message !== undefined) {
            if (body.messageType !== undefined && body.message_Content !== undefined && body.phone_Number !== undefined) {
                return SNSOps.sendMessage(body)
            }
        }

    } catch (err) {
        return netMappers.mapOutGoingRequest({ err: err });
    }
};



