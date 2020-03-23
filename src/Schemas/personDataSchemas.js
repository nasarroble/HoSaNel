module.exports = {
    person:
    {
        user_ID: {
            field_Name: "user_ID",
            field_Type: "string"
        },

        first_Name: {
            field_Name: "first_Name",
            field_Type: "string",
            alphabetic: true

        },

        middle_Name: {
            field_Name: "middle_Name",
            field_Type: "string",
            alphabetic: true

        },

        last_Name: {
            field_Name: "last_Name",
            field_Type: "string",
            alphabetic: true

        },
        
        instituion_ID: {
            field_Name: "instituion_ID",
            field_Type: "string"
        },
        
        provider_ID: {
            field_Name: "provider_ID",
            field_Type: "string"
        },

        medical: {
            field_Name: "medical",
            field_Type: "object"
        },

        messages: {
            field_Name: "messages",
            field_Type: "object",
            actual_Type: "Array"
        },
        picture_ID: {
            field_Name: "picture_ID",
            field_Type: "string"
        },

        summary: {
            field_Name: "summary",
            field_Type: "string"
        },

        gender: {
            field_Name: "gender",
            field_Type: "string",
            alphabetic: true

        },

        age: {
            field_Name: "age",
            field_Type: "number"
        },

        residences: {
            field_Name: "residences",
            field_Type: "object",
            actual_Type: "Array"
        },
        worq: {
            field_Name: "worq",
            field_Type: "object",
            actual_Type: "Array"
        },
        fam: {
            field_Name: "fam",
            field_Type: "object",
    
            number_In_Town: {
                field_Name: "number_In_Town",
                field_Type: "number"
            },
    
            number_Recently_In_Town: {
                field_Name: "number_Recently_In_Town",
                field_Type: "number"
            },
    
            number_Contacted: {
                field_Name: "number_Contacted",
                field_Type: "number"
            },
    
            members: {
                field_Name: "members",
                field_Type: "object",
                actual_Type: "Array"
            }
        },

        primary_Phone_Number: {
            field_Name: "primary_Phone_Number",
            field_Type: "string"
        },

        phones: {
            field_Name: "phones",
            field_Type: "object",
            actual_Type: "Array"
        },
        visitations: {
            field_Name: "visitations",
            field_Type: "object",
            actual_Type: "Array"
        },
        contacts: {
            field_Name: "contacts",
            field_Type: "object",
            actual_Type: "Array"
        },

    },

    residence: {
        field_Name: "residence",
        field_Type: "object",
        lat: {
            field_Name: "lat",
            field_Type: "string"
        },

        long: {
            field_Name: "long",
            field_Type: "string"
        },

        number: {
            field_Name: "number",
            field_Type: "number"
        },

        road: {
            field_Name: "road",
            field_Type: "string"
        },

        residence_Types:{
            field_Name: "residence_Types",
            field_Type: "object"
        },

        city: {
            field_Name: "city",
            field_Type: "string",
            alphabetic: true

        },

        burough: {
            field_Name: "burough",
            field_Type: "string",
            alphabetic: true

        },

        state: {
            field_Name: "state",
            field_Type: "string",
            alphabetic: true

        },

        exposure_Count: {
            field_Name: "exposure_Count",
            field_Type: "number"
        },

        co_Dwellers: {
            field_Name: "co_Dwellers",
            field_Type: "object",
            actual_Type: "Array"
        } ///array of contacts

    },

    residence_Types: {//for later
        field_Name: "residence_Types",
        field_Type: "object",

        rural: {
            field_Name: "rural",
            field_Type: "boolean"
        },

        urban: {
            field_Name: "urban",
            field_Type: "boolean"
        },

        house: {
            field_Name: "house",
            field_Type: "boolean"
        },

        apartment: {
            field_Name: "apartment",
            field_Type: "boolean"
        },

        shared: {
            field_Name: "shared",
            field_Type: "boolean"
        }
    },

    message: {
        field_Name: "message",
        field_Name: "object",

        sentTo: {
            field_Name: "sentTo",
            field_Type: "string"
        },

        sentDate: {
            field_Name: "sentDate",
            field_Type: "string"
        },

        sendTime: {
            field_Name: "sendTime",
            field_Type: "string"
        },

        content: {
            field_Name: "content", 
            field_Type: "string"
        }
    },

    phone: {
        field_Name: "phone",
        field_Type: "object",

        owner_ID: {
            field_Name: "owner_ID",
            field_Type: "string"
        },

        relationship: {
            field_Name: "relationship",
            field_Type: "string",
            alphabetic: true
        },

        number: {
            field_Name: "number",
            field_Type: "string"
        },

        first_Name: {
            field_Name: "first_Name",
            field_Type: "string",
            alphabetic: true
        },

        middle_Name: {
            field_Name: "middle_Name",
            field_Type: "string",
            alphabetic: true
        },

        last_Name: {
            field_Name: "last_Name",
            field_Type: "string",
            alphabetic: true
        }
    },

    familyMember: {//for later
        field_Name: "members",
        field_Type: "object",

        first_Name: {
            field_Name: "first_Name",
            field_Type: "string",
            alphabetic: true
        },

        middle_Name: {
            field_Name: "middle_Name",
            field_Type: "string",
            alphabetic: true

        },

        last_Name: {
            field_Name: "last_Name",
            field_Type: "string",
            alphabetic: true

        },

        user_ID: {
            field_Name: "user_ID",
            field_Type: "string"
        },

        relationship: {
            field_Name: "relationship",
            field_Type: "string",
            alphabetic: true

        },

        exposure_Type: {
            field_Name: "exposure_Type",
            field_Type: "string"
        },
    },

    contact: {
        field_Name: "contact",
        field_Type: "object",
        
        first_Name: {
            field_Name: "first_Name",
            field_Type: "string",
            alphabetic: true
        },

        middle_Name: {
            field_Name: "middle_Name",
            field_Type: "string",
            alphabetic: true
        },

        last_Name: {
            field_Name: "last_Name",
            field_Type: "string",
            alphabetic: true
        },

        user_ID: {
            field_Name: "user_ID",
            field_Type: "string"
        },

        phones: {
           field_Name: "phones",
           field_Type: "object",
           actual_Type: "Array"
        },
        exposure_Type: {
            field_Name: "exposure_Type",
            field_Type: "object"
        },

        time: {
            field_Name: "time",
            field_Type: "string"
        },

        date: {
            field_Name: "date", 
            field_Type: "string"
        },

        duration: {
            field_Name: "duration",
            field_Type: "string"
        },
    },

    exposure_Type: {

        field_Name: "exposure_Type",
        field_Type: "object",
    
        physical: {
            
            field_Name: "physical",
            field_Type: "object",

            hand_Shake: {
                field_Name: "hand_Shake",
                field_Type: "boolean",
                alphabetic: true
            },

            hug: {
                field_Name: "hug",
                field_Type: "boolean",
                alphabetic: true
            },

            long_Duration_Body_Contact: {
                field_Name: "long_Duration_Body_Contact",
                field_Type: "boolean",
                alphabetic: true
            },

            general_Touch: {
                field_Name: "general_Touch",
                field_Type: "boolean",
                alphabetic: true
            },
        },

        spacial: {

            field_Name: "special",
            field_Type: "object",

            shared_Room: {
                field_Name: "shared_Room",
                field_Type: "boolean"
            },

            personal_Space: {
                field_Name: "personal_Space",
                field_Type: "boolean"
            },

        },

        utility: {

            field_Name: "utility",
            field_Type: "object",

            shared_Foodware: {
                field_Name: "shared_Foodware",
                field_Type: "boolean"
            },

            shared_Food: {
                field_Name: "shared_Food",
                field_Type: "boolean"
            },

            shared_Vehicle: {
                field_Name: "shared_Vehicle",
                field_Type: "boolean"
            },

        }
    },

    visitations: {

        field_Name: "visitations",
        field_Type: "object",

        time: {
            field_Name: "time",
            field_Type: "string"
        },

        date: {
            field_Name: "date",
            field_Type: "string"
        },

        duration: {
            field_Name: "duration",
            field_Type: "string"
        },

        location: {
            field_Name: "location",
            field_Type: "object",
        }
    },

    location: {

        field_Name: "location",
        field_Type: "object",

        lat: {
            field_Name: "lat",
            field_Type: "string"
        },

        location_Name: {
            field_Name: "location_Name", 
            field_Type: "string"
        },

        description: {
            field_Name: "description",
            field_Type: "string"
        },
        long: {
            field_Name: "long",
            field_Type: "string"
        },

        number: {
            field_Name: "number",
            field_Type: "number"
        },

        road: {
            field_Name: "road",
            field_Type: "string",
            alphabetic: true
        },

        type: {
            field_Name: "type",
            field_Type: "object",
        },

        city: {
            field_Name: "city",
            field_Type: "string",
            alphabetic: true
        },

        burough: {
            field_Name: "burough",
            field_Type: "string",
            alphabetic: true
        },

        state: {
            field_Name: "state",
            field_Type: "string",
            alphabetic: true
        },

        contact_Count: {
            field_Name: "contact_Count",
            field_Type: "number",
        },

    },

    worq: {

        field_Name: "worq",
        field_Type: "object",
        
        profession: {
            field_Name: "profession",
            field_Type: "string",
            alphabetic: true
        },

        last_Visit_Time: {
            field_Name: "last_Visit_Time",
            field_Type: "string"
        },

        last_Visit_Date: {
            field_Name: "last_Visit_Date",
            field_Type: "string"
        },

        last_Visit_Duration: {
            field_Name: "last_Visit_Duration",
            field_Type: "string"
        },

        location: {
            field_Name: "location",
            field_Type: "object",
        }
    },

    location_Type: {
        field_Name: "location_Type",
        field_Type: "object",
        general: {
            field_Name: "general",
            field_Type: "boolean"
        },
        business: {
            field_Name: "business",
            field_Type: "boolean"
        },
        social: {
            field_Name: "social",
            field_Type: "boolean"
        },
        institutional: {
            field_Name: "institutional",
            field_Type: "boolean"
        },
        religious: {
            field_Name: "religious",
            field_Type: "boolean"
        }
    }, 

    medical: {
        field_Name: "medical",
        field_Type: "object",

        testing: {
            field_Name: "testing",
            field_Type: "object",
            actual_Type: "Array",
        },
        
        current_Symptoms: {
            field_Name: "current_Symptoms",
            field_Type: "object",

            fever: {
                field_Name: "fever",
                field_Type: "number"
            },

            cough: {
                field_Name: "cough",
                field_Type: "boolean"
            },

            difficulty_Breathing: {
                field_Name: "difficulty_Breathing",
                field_Type: "boolean"
            }, 

            muscle_Pain: {
                field_Name: "muscle_Pain",
                field_Type: "boolean"
            }, 

            tiredness: {
                field_Name: "tiredness",
                field_Type: "boolean"
            }, 

            sore_Throat: {
                field_Name: "sore_Throat",
                field_Type: "boolean"
            }, 

            runny_Nose: {
                field_Name: "runny_Nose",
                field_Type: "boolean"
            },

            shortness_Of_Breath: {
                field_Name: "shortness_Of_Breath", 
                field_Type: "boolean"
            }, 

            chills: {
                field_Name: "chills", 
                field_Type: "boolean"
            }, 

            others: {
                field_Name: "others", 
                field_Type: "string"
            },

            date_Updated: {
                field_Name: "date_Updated", 
                field_Type: "string"
            }, 

            time_Updated: {
                field_Name: "time_Updated", 
                field_Type: "string"
            }
        },

        past_Symptoms: {//no validation needed, it is a metadata field, and user isn't aware of
            field_Name: "past_Symptoms",
            field_Type: "object",
            actual_Type: "Array"
        },

    }, 

    test_Schema: {
        field_Name: "test_Schema",
        field_Type: "object",

        date_Sample_Collected: {
            field_Name: "date_Sample_Collected",
            field_Type: "string"
        },

        date_Sample_Received: {
            field_Name: "date_Sample_Received",
            field_Type: "string"
        }, 

        sample_Type: {
            field_Name: "sample_Type",
            field_Type: "string"
        },
    }
}