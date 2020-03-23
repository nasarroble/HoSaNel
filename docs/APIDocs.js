/*
Methods:
POST
Operations: (this is the queryType field in the params)
ADD 
GET
SET (simple fields such as first, middle name, age...definitely works for. Also works for the residence object. Rest will soon be updated)

*/


module.exports.GET_PERSON_BY_FULL_NAME_SCHEMA = { //only uses first and middle name as of now
    "query": {
        "queryType": "GETPERSON",
        "querySubType": "GET_PERSON_BY_FULL_NAME",
        "params": {
            "values": [
                "Samatar",
                "Samaale",
                "Sugule"


            ]
        }
    }
}


module.exports.GET_ALL_PATIENTS = { //coming soon

}

module.exports.GET_AGGREGATE_DATA = {//coming soon

}


module.exports.GET_PATIENTS = {
    "query": {
        "queryType": "GETPERSON",
        "querySubType": "GETPATIENTS",
        "params": {
            "institution_ID": "ibrahim123"
        }
    }
}


//This needs to be updated to reflect new schema requirements
module.exports.ADD_PARAM_SCHEMA = { //you will have to change these values before you send them, you can use the save mockdata method in the DBOps.js file to do so. Or you can hard code youre values
    "query": {
        "queryType": "ADD",
        "querySubType": "ADD_PERSON",
        "params": {
            "person": {
                "user_ID": "k1111djfd030ejkskjf",
                "first_Name": "Saraare",
                "middle_Name": "Samatar",
                "last_Name": "Sugule",
                "picture_ID": "String",
                "summary": "string",
                "gender": "Male",
                "age": 36,
                "residences": [],
                "work": [],
                "family": {},
                "phones": {},
                "visitations": [],
                "primary_Phone_Number": "5654-9878956",
                "contacts": []
            }
        }
    }
}


module.exports.SEND_TEXT_MESSAGE_EXAMPLE = {

    "user_ID": "Cecile55",
    "message": true,
    "messageType": "GETPERSON",
    "message_Content": "bal adba garo",
    "phone_Number": "+18959878978"
}


module.exports.GET_PERSON_BY_USER_ID_SCHEMA = {//Since all you're doing is getting, and not saving, a person, you can use this as is. However, you can change it to another if you want to.
    "query": {
        "queryType": "GETPERSON",
        "querySubType": "GET_PERSON_BY_USER_ID",
        "params": {
            "user_ID": "Cecile55"
        }
    }

}


module.exports.SETTING_SIMPLE_FIELDS = {//same approach works for any of the simple fields (names, gender, age, summary, picture id)
    "query": {
        "queryType": "SET",
        "params": {
            "user_ID": {
                "field_Name": "user_ID",
                "field_Type": "string",
                "value": "Cecile55"
            },
            "gender": {
                "field_Name": "gender",
                "field_Type": "string",
                "alphabetic": true,
                "value": "male"
            },

            "age": {
                "field_Name": "age",
                "field_Type": "number",
                "value": 50
            }
        }
    }
}

module.exports.SETTING_OBJECTS_EXAMPLE_RESIDENCE = {//this example uses the residence object and it's subfields
    "query": {
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

module.exports.SETTING_OBJECT_EXAMPLE_MEDICAL = {}

module.exports.SETTING_OBJECTS_FAMILY_EXAMPLE =
{
    "query": {
        "queryType": "SET",
        "params": {
            "family": {
                "field_Name": "family",
                "field_Type": "object",
                "value": {
                    "number_In_Town": {
                        "field_Name": "number_In_Town",
                        "field_Type": "number",
                        "value": 12
                    },

                    "number_Recently_In_Town": {
                        "field_Name": "number_Recently_In_Town",
                        "field_Type": "number",
                        "value": 5
                    },

                    "number_Contacted": {
                        "field_Name": "number_Contacted",
                        "field_Type": "number",
                        "value": 14
                    },

                    "members": {
                        "field_Name": "members",
                        "field_Type": "object",
                        "actual_Type": "Array",
                        "value": [
                            {
                                "field_Name": "members",
                                "field_Type": "object",

                                "value": {
                                    "first_Name": {
                                        "field_Name": "first_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "lkjsdf"
                                    },

                                    "middle_Name": {
                                        "field_Name": "middle_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "asldfk"

                                    },

                                    "last_Name": {
                                        "field_Name": "last_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "aslfskd"

                                    },

                                    "user_ID": {
                                        "field_Name": "user_ID",
                                        "field_Type": "string",
                                        "value": "NA"
                                    },

                                    "relationship": {
                                        "field_Name": "relationship",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "aunt"

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
                                                        "value": true
                                                    },

                                                    "hug": {
                                                        "field_Name": "hug",
                                                        "field_Type": "boolean",
                                                        "value": true
                                                    },

                                                    "long_Duration_Body_Contact": {
                                                        "field_Name": "long_Duration_Body_Contact",
                                                        "field_Type": "boolean",
                                                        "value": true
                                                    },

                                                    "general_Touch": {
                                                        "field_Name": "general_Touch",
                                                        "field_Type": "boolean",
                                                        "value": true
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
                                                        "value": true
                                                    },

                                                    "shared_Vehicle": {
                                                        "field_Name": "shared_Vehicle",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    }
                                                }


                                            }
                                        }
                                    }
                                }
                            }

                        ]
                    }
                }
            }
        }
    }
}

module.exports.SETTING_OBJECTS_PHONE_EXAMPLE = {
    "query": {
        "queryType": "SET",
        "params": {
            "phone": {
                "field_Name": "phone",
                "field_Type": "object",
                "value": [
                    {
                        "owner_ID": {
                            "field_Name": "owner_ID",
                            "field_Type": "string",
                            "value": "lksdfjlks"
                        },

                        "relationship": {
                            "field_Name": "relationship",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "friend"
                        },

                        "number": {
                            "field_Name": "number",
                            "field_Type": "string",
                            "value": "897-897-564"
                        },

                        "first_Name": {
                            "field_Name": "first_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kdksjdsd"
                        },

                        "middle_Name": {
                            "field_Name": "middle_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kdllskjd"
                        },

                        "last_Name": {
                            "field_Name": "last_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kjdskjsl"
                        }
                    }
                ]
            }
        }
    }
}

module.exports.SETTING_OBJECTS_WORK_EXAMPLE = {
    "query": {
        "queryType": "SET",
        "params": {
            "work": {
                "field_Name": "work",
                "field_Type": "object",

                "value": [
                    {

                        "profession": {
                            "field_Name": "profession",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "developer"
                        },

                        "last_Visit_Time": {
                            "field_Name": "last_Visit_Time",
                            "field_Type": "string",
                            "value": "3 days ago"
                        },

                        "last_Visit_Date": {
                            "field_Name": "last_Visit_Date",
                            "field_Type": "string",
                            "value": "3/15/2020"
                        },

                        "last_Visit_Duration": {
                            "field_Name": "last_Visit_Duration",
                            "field_Type": "string",
                            "value": "full day"
                        },

                        "location": {
                            "field_Name": "location",
                            "field_Type": "object",
                            "value": {
                                "lat": {
                                    "field_Name": "lat",
                                    "field_Type": "string",
                                    "value": "kdjfk293k"
                                },

                                "long": {
                                    "field_Name": "long",
                                    "field_Type": "string",
                                    "value": "fjdl3849skjf"
                                },

                                "number": {
                                    "field_Name": "number",
                                    "field_Type": "number",
                                    "value": 63
                                },

                                "location_Name": {
                                    "field_Name": "location_Name", 
                                    "field_Type": "string"
                                },
                        
                                "description": {
                                    "field_Name": "description",
                                    "field_Type": "string"
                                },

                                "road": {
                                    "field_Name": "road",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Jariiban"
                                },

                                "location_Type": {
                                    "field_Name": "location_Type",
                                    "field_Type": "object",
                                    "value": {
                                        "general": {
                                            "field_Name": "general",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "business": {
                                            "field_Name": "business",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "social": {
                                            "field_Name": "social",
                                            "field_Type": "boolean",
                                            "value": true
                                        },
                                        "institutional": {
                                            "field_Name": "institutional",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "religious": {
                                            "field_Name": "religious",
                                            "field_Type": "boolean",
                                            "value": false
                                        }
                                    }
                                },

                                "city": {
                                    "field_Name": "city",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Xamar"
                                },

                                "burough": {
                                    "field_Name": "burough",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "jslfkdj"
                                },

                                "state": {
                                    "field_Name": "state",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Benadir"
                                },

                                "contact_Count": {
                                    "field_Name": "contact_Count",
                                    "field_Type": "number",
                                    "value": 5
                                }

                            }
                        }
                    }
                ]
            }
        }
    }
}

module.exports.SETTING_OBJECTS_VISITATIONS = {
    "query": {
        "queryType": "SET",
        "params": {
            "visitations": {

                "field_Name": "visitations",
                "field_Type": "object",
                "value": [
                    {

                        "time": {
                            "field_Name": "time",
                            "field_Type": "string",
                            "value": "5 PM"
                        },

                        "date": {
                            "field_Name": "date",
                            "field_Type": "string",
                            "value": "3/15/2020"
                        },

                        "duration": {
                            "field_Name": "duration",
                            "field_Type": "string",
                            "value": "5 hours"
                        },

                        "location": {
                            "field_Name": "location",
                            "field_Type": "object",
                            "value": {

                                "lat": {
                                    "field_Name": "lat",
                                    "field_Type": "string",
                                    "value": "kdjfk293k"
                                },

                                "long": {
                                    "field_Name": "long",
                                    "field_Type": "string",
                                    "value": "fjdl3849skjf"
                                },

                                "number": {
                                    "field_Name": "number",
                                    "field_Type": "number",
                                    "value": 63
                                },

                                "location_Name": {
                                    "field_Name": "location_Name", 
                                    "field_Type": "string"
                                },
                        
                                "description": {
                                    "field_Name": "description",
                                    "field_Type": "string"
                                },

                                "road": {
                                    "field_Name": "road",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Jariiban"
                                },

                                "location_Type": {
                                    "field_Name": "location_Type",
                                    "field_Type": "object",
                                    "value": {
                                        "general": {
                                            "field_Name": "general",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "business": {
                                            "field_Name": "business",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "social": {
                                            "field_Name": "social",
                                            "field_Type": "boolean",
                                            "value": true
                                        },
                                        "institutional": {
                                            "field_Name": "institutional",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "religious": {
                                            "field_Name": "religious",
                                            "field_Type": "boolean",
                                            "value": false
                                        }
                                    }
                                },

                                "city": {
                                    "field_Name": "city",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Xamar"
                                },

                                "burough": {
                                    "field_Name": "burough",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "jslfkdj"
                                },

                                "state": {
                                    "field_Name": "state",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Benadir"
                                },

                                "contact_Count": {
                                    "field_Name": "contact_Count",
                                    "field_Type": "number",
                                    "value": 5
                                }

                            }
                        }
                    }
                ]
            }
        }
    }
}


module.exports.SETTING_MULTIPLE_FIELDS_EXAMPLE = {
    "query": {
        "queryType": "SET",
        "params": {
            "user_ID": {
                "field_Name": "user_ID",
                "field_Type": "string",
                "value": "Cecile55"
            },
            "gender": {
                "field_Name": "gender",
                "field_Type": "string",
                "alphabetic": true,
                "value": "male"
            },

            "age": {
                "field_Name": "age",
                "field_Type": "number",
                "value": 50
            },

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

                                    "location": {
                                        "field_Name": "location",
                                        "field_Type": "object",
                                        "value": {

                                            "lat": {
                                                "field_Name": "lat",
                                                "field_Type": "string",
                                                "value": "kdjfk293k"
                                            },

                                            "long": {
                                                "field_Name": "long",
                                                "field_Type": "string",
                                                "value": "fjdl3849skjf"
                                            },

                                            "number": {
                                                "field_Name": "number",
                                                "field_Type": "number",
                                                "value": 63
                                            },

                                            "road": {
                                                "field_Name": "road",
                                                "field_Type": "string",
                                                "alphabetic": true,
                                                "value": "Jariiban"
                                            },

                                            "location_Type": {
                                                "field_Name": "location_Type",
                                                "field_Type": "object",
                                                "value": {
                                                    "general": {
                                                        "field_Name": "general",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    },
                                                    "business": {
                                                        "field_Name": "business",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    },
                                                    "social": {
                                                        "field_Name": "social",
                                                        "field_Type": "boolean",
                                                        "value": true
                                                    },
                                                    "institutional": {
                                                        "field_Name": "institutional",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    },
                                                    "religious": {
                                                        "field_Name": "religious",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    }
                                                }
                                            },

                                            "city": {
                                                "field_Name": "city",
                                                "field_Type": "string",
                                                "alphabetic": true,
                                                "value": "Xamar"
                                            },

                                            "burough": {
                                                "field_Name": "burough",
                                                "field_Type": "string",
                                                "alphabetic": true,
                                                "value": "jslfkdj"
                                            },

                                            "state": {
                                                "field_Name": "state",
                                                "field_Type": "string",
                                                "alphabetic": true,
                                                "value": "Benadir"
                                            },

                                            "contact_Count": {
                                                "field_Name": "contact_Count",
                                                "field_Type": "number",
                                                "value": 5
                                            }

                                        }
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
            ],



            "family": {
                "field_Name": "family",
                "field_Type": "object",
                "value": {
                    "number_In_Town": {
                        "field_Name": "number_In_Town",
                        "field_Type": "number",
                        "value": 12
                    },

                    "number_Recently_In_Town": {
                        "field_Name": "number_Recently_In_Town",
                        "field_Type": "number",
                        "value": 5
                    },

                    "number_Contacted": {
                        "field_Name": "number_Contacted",
                        "field_Type": "number",
                        "value": 14
                    },

                    "members": {
                        "field_Name": "members",
                        "field_Type": "object",
                        "actual_Type": "Array",
                        "value": [
                            {
                                "field_Name": "members",
                                "field_Type": "object",

                                "value": {
                                    "first_Name": {
                                        "field_Name": "first_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "lkjsdf"
                                    },

                                    "middle_Name": {
                                        "field_Name": "middle_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "asldfk"

                                    },

                                    "last_Name": {
                                        "field_Name": "last_Name",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "aslfskd"

                                    },

                                    "user_ID": {
                                        "field_Name": "user_ID",
                                        "field_Type": "string",
                                        "value": "NA"
                                    },

                                    "relationship": {
                                        "field_Name": "relationship",
                                        "field_Type": "string",
                                        "alphabetic": true,
                                        "value": "aunt"

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
                                                        "value": true
                                                    },

                                                    "hug": {
                                                        "field_Name": "hug",
                                                        "field_Type": "boolean",
                                                        "value": true
                                                    },

                                                    "long_Duration_Body_Contact": {
                                                        "field_Name": "long_Duration_Body_Contact",
                                                        "field_Type": "boolean",
                                                        "value": true
                                                    },

                                                    "general_Touch": {
                                                        "field_Name": "general_Touch",
                                                        "field_Type": "boolean",
                                                        "value": true
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
                                                        "value": true
                                                    },

                                                    "shared_Vehicle": {
                                                        "field_Name": "shared_Vehicle",
                                                        "field_Type": "boolean",
                                                        "value": false
                                                    }
                                                }


                                            }
                                        }
                                    }
                                }
                            }

                        ]
                    }
                }
            },
            "phone": {
                "field_Name": "phone",
                "field_Type": "object",
                "value": [
                    {
                        "owner_ID": {
                            "field_Name": "owner_ID",
                            "field_Type": "string",
                            "value": "lksdfjlks"
                        },

                        "relationship": {
                            "field_Name": "relationship",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "friend"
                        },

                        "number": {
                            "field_Name": "number",
                            "field_Type": "string",
                            "value": "897-897-564"
                        },

                        "first_Name": {
                            "field_Name": "first_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kdksjdsd"
                        },

                        "middle_Name": {
                            "field_Name": "middle_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kdllskjd"
                        },

                        "last_Name": {
                            "field_Name": "last_Name",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "kjdskjsl"
                        }
                    }
                ]
            },

            "work": {
                "field_Name": "work",
                "field_Type": "object",

                "value": [
                    {

                        "profession": {
                            "field_Name": "profession",
                            "field_Type": "string",
                            "alphabetic": true,
                            "value": "developer"
                        },

                        "last_Visit_Time": {
                            "field_Name": "last_Visit_Time",
                            "field_Type": "string",
                            "value": "3 days ago"
                        },

                        "last_Visit_Date": {
                            "field_Name": "last_Visit_Date",
                            "field_Type": "string",
                            "value": "3/15/2020"
                        },

                        "last_Visit_Duration": {
                            "field_Name": "last_Visit_Duration",
                            "field_Type": "string",
                            "value": "full day"
                        },

                        "location": {
                            "field_Name": "location",
                            "field_Type": "object",
                            "value": {
                                "lat": {
                                    "field_Name": "lat",
                                    "field_Type": "string",
                                    "value": "kdjfk293k"
                                },

                                "long": {
                                    "field_Name": "long",
                                    "field_Type": "string",
                                    "value": "fjdl3849skjf"
                                },

                                "number": {
                                    "field_Name": "number",
                                    "field_Type": "number",
                                    "value": 63
                                },

                                "road": {
                                    "field_Name": "road",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Jariiban"
                                },

                                "location_Type": {
                                    "field_Name": "location_Type",
                                    "field_Type": "object",
                                    "value": {
                                        "general": {
                                            "field_Name": "general",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "business": {
                                            "field_Name": "business",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "social": {
                                            "field_Name": "social",
                                            "field_Type": "boolean",
                                            "value": true
                                        },
                                        "institutional": {
                                            "field_Name": "institutional",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "religious": {
                                            "field_Name": "religious",
                                            "field_Type": "boolean",
                                            "value": false
                                        }
                                    }
                                },

                                "city": {
                                    "field_Name": "city",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Xamar"
                                },

                                "burough": {
                                    "field_Name": "burough",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "jslfkdj"
                                },

                                "state": {
                                    "field_Name": "state",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Benadir"
                                },

                                "contact_Count": {
                                    "field_Name": "contact_Count",
                                    "field_Type": "number",
                                    "value": 5
                                }

                            }
                        }
                    }
                ]
            },
            "visitations": {

                "field_Name": "visitations",
                "field_Type": "object",
                "value": [
                    {

                        "time": {
                            "field_Name": "time",
                            "field_Type": "string",
                            "value": "5 PM"
                        },

                        "date": {
                            "field_Name": "date",
                            "field_Type": "string",
                            "value": "3/15/2020"
                        },

                        "duration": {
                            "field_Name": "duration",
                            "field_Type": "string",
                            "value": "5 hours"
                        },

                        "location": {
                            "field_Name": "location",
                            "field_Type": "object",
                            "value": {

                                "lat": {
                                    "field_Name": "lat",
                                    "field_Type": "string",
                                    "value": "kdjfk293k"
                                },

                                "long": {
                                    "field_Name": "long",
                                    "field_Type": "string",
                                    "value": "fjdl3849skjf"
                                },

                                "number": {
                                    "field_Name": "number",
                                    "field_Type": "number",
                                    "value": 63
                                },

                                "road": {
                                    "field_Name": "road",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Jariiban"
                                },

                                "location_Type": {
                                    "field_Name": "location_Type",
                                    "field_Type": "object",
                                    "value": {
                                        "general": {
                                            "field_Name": "general",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "business": {
                                            "field_Name": "business",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "social": {
                                            "field_Name": "social",
                                            "field_Type": "boolean",
                                            "value": true
                                        },
                                        "institutional": {
                                            "field_Name": "institutional",
                                            "field_Type": "boolean",
                                            "value": false
                                        },
                                        "religious": {
                                            "field_Name": "religious",
                                            "field_Type": "boolean",
                                            "value": false
                                        }
                                    }
                                },

                                "city": {
                                    "field_Name": "city",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Xamar"
                                },

                                "burough": {
                                    "field_Name": "burough",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "jslfkdj"
                                },

                                "state": {
                                    "field_Name": "state",
                                    "field_Type": "string",
                                    "alphabetic": true,
                                    "value": "Benadir"
                                },

                                "contact_Count": {
                                    "field_Name": "contact_Count",
                                    "field_Type": "number",
                                    "value": 5
                                }

                            }
                        }
                    }
                ]
            }


        }
    }
}


