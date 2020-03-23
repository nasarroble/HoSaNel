module.exports = {
    institution: {
        institution_ID: {
            field_Name: "institution_ID",
            field_Type: "string"
        },

        institution_Name: {
            field_Name: "institution_Name",
            field_Type: "string"
        }, 

        institution_City: {
            field_Name: "institution_City",
            field_Type: "string"
        },

        institution_State: {
            field_Name: "institution_State",
            field_Type: "string"
        },

        total_Confirmed_Cases: {
            field_Name: "total_Confirmed_Cases",
            field_Type: "number"
        },

        total_Cases: {
            field_Name: "total_Cases",
            field_Type: "number"
        },

        total_Presumptive_Positive_Cases:{
            field_Name: "total_Presumptive_Positive_Cases",
            field_Type: "number"
        },

        total_Negative_Tests: {
            field_Name: "total_Negative_Tests",
            field_Type: "number"
        },

        new_Case_Count: {
            field_Name: "new_Case_Count",
            field_Type: "number"
        },

        total_Death: {
            field_Name: "total_Death",
            field_Type: "number"
        },

        phones: {
            field_Name: "phones",
            field_Type: "object",
            actual_Type: "Array"
        }
    }
}