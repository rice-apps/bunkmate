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

    enum ResCollege {
        BAKER
        WILLRICE
        HANSZEN
        WIESS
        JONES
        BROWN
        LOVETT
        SIDRICH
        MARTEL
        MCMURTRY
        DUNCAN
    }

    # 3 survey instances: common, oncampus, offcampus
    type Survey {
        surveyPages: [SurveyPage!]!
    }

    type SurveyPage {
        category: String!
        questions: [Question!]!
    }

    type Question {
        id: ID!
        questionText: String!
        questionType: QuestionType!
        options: [String!]
        attr: String!
    }

    type User {
        id: ID!
        miscInfo: MiscInfo!
        onCampusInfo: OnCampusInfo!
        offCampusInfo: OffCampusInfo!
    }

    type MiscInfo {
        email: String!
        firstName: String!
        lastName: String!
        gender: String!
        isOnCampus: Boolean!
        phoneNumber: String!
        year: String!
        major: String
        college: ResCollege!
        additionalInfo: String
    }
    
    type OnCampusInfo {
        temperature: String!
        timeSleep: String!
        timeWakeup: String!
    }

    type OffCampusInfo {
        pricePrefs: Number
    }

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