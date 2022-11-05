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
        
    
        ]},
        {
            id: 1,
            welcome: "How exciting!",
            header: "Now, tell us more :)",
    
            fields: [{
                id: 0,
                label: "What best describes your situation?",
                type: "select",
                options: ["Looking for a room", "Already have a room"],
                placeholder: ""
            },
       
        
            ]}
    ]
    
}

export default mock