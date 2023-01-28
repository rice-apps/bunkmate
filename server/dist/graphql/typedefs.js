const { gql } = require('apollo-server');
module.exports = gql `
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
    accommodation: String,
    onCampus: Boolean,
    roomType: String,
    numRoommates: String,
    additionalRoomInfo: String,
    genderPref: String,
    overnightGuests: Boolean,
    roomTemp: String,
    bedTime: String,
    wakeTime: String,
    neatness: String,
    presence: String,
    additionalPrefInfo: String,
    personality: [String],
    isMorningPerson: Boolean,
    personalSpace: [String],
    outingFrequency: String,
    coexistCondition: String,
    outgoingness: String,
    smoker: String,
    smokerPref: String,
    additionalHabitInfo: String,
    pfp: String,
    newUser: Boolean
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
    accommodation: String,
    onCampus: Boolean,
    roomType: String,
    numRoommates: String,
    additionalRoomInfo: String,
    genderPref: String,
    overnightGuests: Boolean,
    roomTemp: String,
    bedTime: String,
    wakeTime: String,
    neatness: String,
    presence: String,
    additionalPrefInfo: String,
    personality: [String],
    isMorningPerson: Boolean,
    personalSpace: [String],
    outingFrequency: String,
    coexistCondition: String,
    outgoingness: String,
    smoker: String,
    smokerPref: String,
    additionalHabitInfo: String,
    pfp: String,
    newUser: Boolean
  }

  type Query {
    hello: String
    getUsers: [User!]
  }
  
  type Mutation {
    authGoogle(email: String!): AuthResponse
    updateUser(email: String!, user: UserInput!): User
  }
`;
//# sourceMappingURL=typedefs.js.map