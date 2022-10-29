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
        id: 1,
        welcome: "Hi! You are new here!",
        header: "Let's get started!",
        inputs: [{
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
        }
        ]}]
    
}

export default mock