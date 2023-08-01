const { gql } = require('apollo-server');
// Add type: listing - follow format
module.exports = gql `
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
    drinking_habits: String,
    smoking_habits: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean,
    profile_bio: String,
    favorites: [String],
  }

  input NoteInput {
    text: String, 
    owner: String
  }
  
  type Note {
    text: String, 
    owner: String
  }

  enum RoomType {
    BEDROOM
    BATHROOM
  }

  input RoomInput {
    type: RoomType, 
    name: String,
    description: String
  }

  type Room {
    type: RoomType, 
    name: String,
    description: String
  }

  input PreferenceInput {
    gender: String,
    age: String,
    temp: String,
    cleaning: String
  }
  
  type Preference {
    gender: String,
    age: String,
    temp: String,
    cleaning: String
  }

  type Listing {
    id: ID!
    name: String,
    price: Int,
    sqft: Int,
    numBeds: Int,
    numBaths: Int,
    available: Int,
    residents: Int,
    owner: ID,
    distance: Int,
    address: String,
    type: String,
    tags: [ String ],
    note: Note,
    rooms: [ Room ],
    preferences: Preference,
    lease: [ String ],
    roommates: [ String ],
    features: [ String ],
    fitness: [ String ],
    parking: [ String ],
    interior: [ String ],
    kitchen: [ String ],
    services: [ String ],
    uniqueDetails: [ String ],
    outdoorSpace: [ String ],
    livingSpace: [ String ]
  }

  input ListingInput {
    name: String,
    price: Int,
    sqft: Int,
    numBeds: Int,
    numBaths: Int,
    available: Int,
    residents: Int,
    owner: String,
    distance: Int,
    address: String,
    type: String,
    tags: [ String ],
    note: NoteInput,
    rooms: [ RoomInput ],
    preferences: PreferenceInput,
    lease: [ String ],
    roommates: [ String ],
    features: [ String ],
    fitness: [ String ],
    parking: [ String ],
    interior: [ String ],
    kitchen: [ String ],
    services: [ String ],
    uniqueDetails: [ String ],
    outdoorSpace: [ String ],
    livingSpace: [ String ]
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
    room_usage: [String],
    outing_freq: String,
    relationship_pref: String,
    drinking_habits: String,
    smoking_habits: String,
    roommate_smoking_pref: String,
    roommate_gender_pref: String,
    has_overnight_guest: Boolean,
    cleaning_freq: String,
    additional_prefs: String,
    is_snorer: Boolean,
    additional_habit_info: String,
    pfp: String,
    new_user: Boolean,
    favorites: [String]
  }

  type Query {
    hello: String
    getUsers: [User!]
    getListingByUser(userId: ID!): [Listing]
    getListingExceptUser(userId: ID!): [Listing]
  }
  
  type Mutation {
    authGoogle(email: String!): AuthResponse
    updateUser(user: UserInput!): User
    createListing(listing: ListingInput!): Listing
  }


`;
//# sourceMappingURL=typedefs.js.map