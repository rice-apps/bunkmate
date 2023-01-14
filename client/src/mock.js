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
            label: "Full Name",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 2,
            label: "Email",
            type: "text",
            options: [],
            placeholder: ""
        },              
        {
            id : 3,
            label: "Phone",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 4,
            label: "Class",
            type: "select",
            options: ["2026", "2025", "2024", "2023", "Graduate"],
            placeholder: ""
        },
        {
            id: 5,
            label:"Residential College",
            type: "dropdown",
            options: ["Baker", "Will Rice", "Hanszen", "Weiss", "Jones", "Brown", "Lovett", "Sid Richardson", "Martel", "McMurtry", "Duncan"],
            placeholder: ""

        },
        {
            id : 6,
            label: "Major(s)",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 7,
            label: "Minor(s)",
            type: "text",
            options: [],
            placeholder: ""
        },
        {
            id : 8, 
            label: "Pronouns",
            type: "select",
            options: ["He/Him", "She/Her", "They/Them", "Other"],
            placeholder: ""
        },
        {
            id : 9,
            label: "Sex",
            type: "select",
            options: ["Male", "Female", "Other",],
            placeholder: ""
        },
        {
            id: 10,
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
                label: "What type of room are you looking for?",
                type: "text",
                options: [],
                placeholder: "Ex: 4-person suite in Old Sid"
            },
            {
                id: 1,
                label: "I already have __ roommate(s)",
                type: "select",
                options: ["0", "1", "2", "3", ">3"],
                placeholder: "Ex: 4-person suite in Old Sid"
            },
            {
                id: 2,
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
                    label: "My friends would describe me as ...",
                    type: "select",
                    options: ["Funny", "Athletic", "Serious", "Easy-Going", "Studious", "Patient", "Introverted", "Friendly", "Calm"],
                    placeholder: ""
                },
                {
                    id: 1,
                    label: "I am a ...a",
                    type: "select",
                    options: ["Morning person", "Night person"],
                    placeholder: ""
                },
                {
                    id: 2,
                    label: "I use my personal space for",
                    type: "select",
                    options: ["Studying", "Relaxing", "Hanging out with friends", "I plan on rarely using my space"],
                    placeholder: ""
                },
                {
                    id: 3,
                    label: "On average, I go out __ per week",
                    type: "select",
                    options: ["0", "1", "2", "3+"],
                    placeholder: ""
                },
                {
                    id: 4,
                    label: "I want to ______ with my roommate(s)",
                    type: "select",
                    options: ["do everything", "be friends", "peacefully and respectfully coexist"],
                    placeholder: ""
                },
                {
                    id: 5,
                    label: "I consider myself",
                    type: "select",
                    options: ["Shy", "Fairly shy", "Neutral", "Fairly outgoing", "Outgoing"],
                    placeholder: ""
                },
                {
                    id: 6,
                    label: "Are you a smoker?",
                    type: "select",
                    options: ["Yes, and I smoke daily", "Yes, but I only smoke occassionally", "No, I do not smoke"],
                    placeholder: ""
                },
                {
                    id: 7,
                    label: "I prefer roommate(s) that",
                    type: "select",
                    options: ["Smoke", "Don't smoke", "I have no preference"],
                    placeholder: ""
                },
                {   
                    id: 8,
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
                        label: "I am looking for ______ roommates.",
                        type: "select",
                        options: ["Male", "Female", "Either"],
                        placeholder: ""
                    },
                    {
                        id: 1,
                        label: "Do you plan on having overnight guests?",
                        type: "select",
                        options: ["Yes", "No"],
                        placeholder: ""
                    },
                    {
                        id: 2,
                        label: "I use my personal space for",
                        type: "select",
                        options: ["Studying", "Relaxing", "Hanging out with friends", "I plan on rarely using my space"],
                        placeholder: ""
                    },
                    {
                        id: 3,
                        label: "On average, I go out __ per week",
                        type: "select",
                        options: ["0", "1", "2", "3+"],
                        placeholder: ""
                    },
                    {
                        id: 4,
                        label: "I want to ______ with my roommate(s)",
                        type: "select",
                        options: ["do everything", "be friends", "peacefully and respectfully coexist"],
                        placeholder: ""
                    },
                    {
                        id: 5,
                        label: "I consider myself",
                        type: "select",
                        options: ["Shy", "Fairly shy", "Neutral", "Fairly outgoing", "Outgoing"],
                        placeholder: ""
                    },
                    {
                        id: 6,
                        label: "Are you a smoker?",
                        type: "select",
                        options: ["Yes, and I smoke daily", "Yes, but I only smoke occassionally", "No, I do not smoke"],
                        placeholder: ""
                    },
                    {
                        id: 7,
                        label: "I prefer roommate(s) that",
                        type: "select",
                        options: ["Smoke", "Don't smoke", "I have no preference"],
                        placeholder: ""
                    },
                    {   
                        id: 8,
                        label: "Additional info?",
                        type: "textarea",
                        options: [],
                        placeholder: "Particular room preferences and habits, special circumstances, etc."
                    },
                        
                    ]}
    ]
    
}

export default mock