const { gql } = require('apollo-server');

module.exports = gql`
  type AuthResponse {
    token: String
    name: String
    email: String
    newUser: Boolean
  }
  input AuthInput {
    accessToken: String!
  }
  type Query {
    hello: String
  }
  
  type Mutation {
    authGoogle(input: String!): AuthResponse
  }
`;