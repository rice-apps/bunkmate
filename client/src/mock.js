const mock = {
    mockSections:[
    {
        id: 0,
        name: "Getting started"
    },
    {
        id: 1,
        name: "Room"
    },
    {
        id: 2,
        name: "Lifestyle"
    },
    {
        id: 3,
        name: "Preferences"
    },
    {
        id: 4,
        name: "Finished"
    },
    ],
    mockForms : [
        {
        id: 0,
        welcome: "Hi! You are new here!",
        header: "Let's get started!",

        fields: [{
            id : 1,
            attribute: "name",
            label: "Full Name",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 2,
            attribute: "email",
            label: "Email",
            type: "text",
            options: [],
            placeholder: ""
        },              
        {
            id : 3,
            attribute: "phoneNumber",
            label: "Phone",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 4,
            attribute: "gradYear",
            label: "Class",
            type: "select",
            options: ["2026", "2025", "2024", "2023", "Graduate"],
            placeholder: ""
        },
        {
            id: 5,
            attribute: "resCollege",
            label:"Residential College",
            type: "dropdown",
            options: ["Baker", "Will Rice", "Hanszen", "Weiss", "Jones", "Brown", "Lovett", "Sid Richardson", "Martel", "McMurtry", "Duncan"],
            placeholder: ""

        },
        {
            id : 6,
            attribute: "major",
            label: "Major(s)",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 7,
            attribute: "minor",
            label: "Minor(s)",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 8, 
            attribute: "pronouns",
            label: "Pronouns",
            type: "select",
            options: ["He/Him", "She/Her", "They/Them", "Other"],
            placeholder: ""
        },
        {
            id : 9,
            attribute: "sex",
            label: "Sex",
            type: "select",
            options: ["Male", "Female", "Other",],
            placeholder: ""
        },
    
        ]},
        {
            id: 1,
            welcome: "How exciting!",
            header: "Now, tell us more :)",
    
            fields: [{
                id: 0,
                attribute: "roomType",
                label: "What type of room are you looking for?",
                type: "text",
                options: [],
                placeholder: "Ex: 4-person suite in Old Sid"
            },
            {
                id: 1,
                attribute: "numRoommates",
                label: "I am looking for __ roommate(s)",
                type: "select",
                options: ["0", "1", "2", "3", ">3"],
                placeholder: "Ex: 4-person suite in Old Sid"
            },

            ]},
            {
                id: 2,
                welcome: "Good to know!",
                header: "Now, let's talk about you ...",
        
                fields: [{
                    id: 0,
                    attribute: "personality",
                    label: "My friends would describe me as ...",
                    type: "multiple-select",
                    options: ["Funny", "Athletic", "Serious", "Easy-Going", "Studious", "Patient", "Introverted", "Friendly", "Calm"],
                    placeholder: ""
                },

                {
                    id: 3,
                    attribute: "outingFrequency",
                    label: "On average, I go out __ per week",
                    type: "select",
                    options: ["0", "1", "2", "3+"],
                    placeholder: ""
                },
                {
                    id: 4,
                    attribute: "neatness",
                    label: "I clean my room...",
                    type: "select",
                    options: ["Daily", "Weekly", "Occasionally", "Rarely"],
                    placeholder: ""
                },
                {
                    id: 6,
                    attribute: "smoker",
                    label: "I smoke ...",
                    type: "select",
                    options: ["Daily", "Occasionally", "Never"],
                    placeholder: ""
                },

                {   
                    id: 8,
                    attribute: "noise",
                    label: "What is your general noise level in the room?",
                    type: "textarea",
                    options: [],
                    placeholder: "Ex: Snoring, taking phone calls in the room, gaming, etc."
                },
                    
                ]},
                {
                    id: 3,
                    welcome: "Almost There!",
                    header: "Now, tell us more :)",
            
                    fields: [{
                        id: 0,
                        attribute: "genderPref",
                        label: "I am looking for ______ roommates.",
                        type: "select",
                        options: ["Male", "Female", "Either"],
                        placeholder: ""
                    },
                    {
                        id: 1,
                        attribute: "overnightGuests",
                        label: "Do you plan on having overnight guests?",
                        type: "select",
                        options: ["Yes", "No"],
                        placeholder: ""
                    },

                    {   
                        id: 5,
                        attribute: "presence",
                        label: "How often will you be in the room?",
                        type: "textarea",
                        options: [],
                        placeholder: "Ex: Not often. I will be using the room mostly to sleep."
                    },                
                    ]}
    ]
    
}

export default mock