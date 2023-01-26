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
        {
            id: 10,
            attribute: "accommodation",
            label: "Accomodations / Accessibility",
            type: "textarea",
            options: [],
            placeholder: ""
        }
        
    
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
                label: "I already have __ roommate(s)",
                type: "select",
                options: ["0", "1", "2", "3", ">3"],
                placeholder: "Ex: 4-person suite in Old Sid"
            },
            {
                id: 2,
                attribute: "additionalRoomInfo",
                label: "Additional info?",
                type: "textarea",
                options: [],
                placeholder: "Particular room preferences and habits, special circumstances, etc."
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
                    id: 1,
                    attribute: "isMorningPerson",
                    label: "I am a ...a",
                    type: "select",
                    options: ["Morning person", "Night person"],
                    placeholder: ""
                },
                {
                    id: 2,
                    attribute: "personalSpace",
                    label: "I use my personal space for",
                    type: "multiple-select",
                    options: ["Studying", "Relaxing", "Hanging out with friends", "I plan on rarely using my space"],
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
                    attribute: "coexistCondition",
                    label: "I want to ______ with my roommate(s)",
                    type: "select",
                    options: ["do everything", "be friends", "peacefully and respectfully coexist"],
                    placeholder: ""
                },
                {
                    id: 5,
                    attribute: "outgoingness",
                    label: "I consider myself",
                    type: "select",
                    options: ["Shy", "Fairly shy", "Neutral", "Fairly outgoing", "Outgoing"],
                    placeholder: ""
                },
                {
                    id: 6,
                    attribute: "smoker",
                    label: "Are you a smoker?",
                    type: "select",
                    options: ["Yes, and I smoke daily", "Yes, but I only smoke occassionally", "No, I do not smoke"],
                    placeholder: ""
                },
                {
                    id: 7,
                    attribute: "smokerPref",
                    label: "I prefer roommate(s) that",
                    type: "select",
                    options: ["Smoke", "Don't smoke", "I have no preference"],
                    placeholder: ""
                },
                {   
                    id: 8,
                    attribute: "additionalHabitInfo",
                    label: "Additional info?",
                    type: "textarea",
                    options: [],
                    placeholder: "Particular room preferences and habits, special circumstances, etc."
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
                        id: 4,
                        attribute: "neatness",
                        label: "I clean my room...",
                        type: "select",
                        options: ["Daily", "Weekly", "Occasionally", "Rarely"],
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
                    {   
                        id: 6,
                        attribute: "additionalPrefInfo",
                        label: "How often will you be in the room?",
                        type: "textarea",
                        options: [],
                        placeholder: "Ex: Particular room preferences and habits, special circumstances, etc."
                    },                      
                    ]}
    ]
    
}

export default mock