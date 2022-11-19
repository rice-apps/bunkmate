const { gql } = require('apollo-server');

module.exports = gql`
  type AuthResponse {
    email: String
    token: String
    exists: Boolean
  }
  input AuthInput {
    accessToken: String!
  }
  type Query {
    hello: String
  }
  
  type Mutation {
    authGoogle(email: String!): AuthResponse
  }
`;