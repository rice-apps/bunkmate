const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    name: String!  
    email: String!
    phone: String,
    grad_year: String,
    res_college: String,
    major: String,
    minor: String,
    pronouns: String,
    gender: String,
    accommodations: String,
    on_campus: Boolean,
    housing_pref: String,
    roommate_count: String,
    additional_room_info: String,
    personality_traits: [String],
    is_morning_person: Boolean,
    room_temp_pref: String,
    bed_time_pref: String,
    wake_time_pref: String,
    room_usage: String,
    outing_freq: String,
    relationship_pref: String,
    drinking_pref: String,
    smoking_pref: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean
  }

  type AuthResponse {
    email: String
    token: String
    new_user: Boolean
  }
  input AuthInput {
    accessToken: String!
  }

  input UserInput {
    name: String!  
    email: String!
    phone: String,
    grad_year: String,
    res_college: String,
    major: String,
    minor: String,
    pronouns: String,
    gender: String,
    accommodations: String,
    on_campus: Boolean,
    housing_pref: String,
    roommate_count: String,
    additional_room_info: String,
    personality_traits: [String],
    is_morning_person: Boolean,
    room_temp_pref: String,
    bed_time_pref: String,
    wake_time_pref: String,
    room_usage: [String],
    outing_freq: String,
    relationship_pref: String,
    drinking_pref: String,
    smoking_pref: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean
  }

  type Query {
    hello: String
    getUsers: [User!]
  }
  
  type Mutation {
    authGoogle(email: String!): AuthResponse
    updateUser(user: UserInput!): User
    updateUser1(email: String!, user: UserInput!): User
  }
`