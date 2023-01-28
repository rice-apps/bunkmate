const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    resCollege: String,
    phoneNumber: String,
    gradYear: String,
    major: String,
    minor: String,
    pronouns: String,
    sex: String,
    onCampus: Boolean,
    roomType: String,
    numRoommates: String,
    genderPref: String,
    overnightGuests: Boolean,
    presence: String,
    roomTemp: String,
    bedTime: String,
    wakeTime: String,
    personality: [String], //is this right?
    outingFrequency: String,
    neatness: String,
    smoker: String,
    noise: String,
    pfp: String,
  }  

  type AuthResponse {
    email: String
    token: String
    newUser: Boolean
  }
  input AuthInput {
    accessToken: String!
  }

  input UserInput {
    name: String!
    email: String!
    resCollege: String,
    phoneNumber: String,
    gradYear: String,
    major: String,
    minor: String,
    pronouns: String,
    sex: String,
    onCampus: Boolean,
    roomType: String,
    numRoommates: String,
    genderPref: String,
    overnightGuests: Boolean,
    presence: String,
    roomTemp: String,
    bedTime: String,
    wakeTime: String,
    personality: [String], //is this right?
    outingFrequency: String,
    neatness: String,
    smoker: String,
    noise: String,
    pfp: String,
  }

  type Query {
    hello: String
    getUsers: [User!]
  }
  
  type Mutation {
    authGoogle(email: String!): AuthResponse
    updateUser(email: String!, user: UserInput!): User
  }
`