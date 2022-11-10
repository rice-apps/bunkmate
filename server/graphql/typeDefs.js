const { gql } = require('apollo-server');

module.exports = gql`
    type Token {
        jwt: ID!
    }

    type Question {
        id: ID!
        questionText: String!
        questionType: String!
        options: [String!]
        category: String!
        attr: String!
    }

    type User {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
        gender: String!
        miscInfo: MiscInfo!
        isOnCampus: Boolean!
        onCampusAnswers: OnCampusAnswers
        offCampusAnswers: OffCampusAnswers
        additionalInfo: String
    }

    type MiscInfo {
        phoneNumber: String!
        year: String!
        major: String
        college: String
    }
    
    type OnCampusAnswers {
        temperature: String!
        timeSleep: String!
        timeWakeup: String!
    }

    type OffCampusAnswers {
    

    }

    type Query {
    getUser(id: ID!): User
    getUsers: [User]
    }
    type Mutation {
    signup(email: String!, username: String!, password: String!): String!,
    login(email: String, username: String, password: String!): Token!,
    }`