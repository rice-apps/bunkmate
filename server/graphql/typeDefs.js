const { gql } = require('apollo-server');
//Figure out the questionaire/question heirarchy 
//
module.exports = gql`
    enum QuestionType {
        FREE
        DROPDOWN
        SLIDER
    }

    enum Campusness {
        ONCAMPUS
        OFFCAMPUS
    }

    type SurveyPage {
        category: Category!
        questions: [Question!]!
    }

    enum Category {
        GETTINGSTARTED
        ROOM
        LIFESTYLE
        PREFERENCES
    }

    type User {
        id: ID!
        attributes: [Attribute!]!
    }

    type Attribute {
        name: AttributeName! # firstName
        value: String! # Anthony
    }

    enum AttributeName {
        FIRSTNAME
        LASTNAME
        .
        .
        .
    }

    type Question {
        id: ID!
        attributeName: AttributeName!
        text: String! # "What is your name?"
        options: [String!]
        onCampus: Boolean!
        offCampus: Boolean!
        type: QuestionType!
    }

    # type PersonalInfo {
    #     email: String!
    #     firstName: String!
    #     lastName: String!
    #     gender: String!
    #     isOnCampus: Boolean!
    #     phoneNumber: String!
    #     year: String!
    #     major: String
    #     college: ResCollege!
    #     additionalInfo: String
    # }
    

    type Token {
        jwt: ID!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        signup(email: String!, username: String!, password: String!): String!,
        login(email: String, username: String, password: String!): Token!,
    }`