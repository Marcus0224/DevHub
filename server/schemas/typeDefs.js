// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
  },

  type Order {
    _id: ID
    orderType: String
    orderTitle: String
    needByDate: String
    price: String
    comments: String
    createdAt: String
    username: String
  },

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    orders: [Order]
    order(orderTitle: String!): Order
  },

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(orderType: String!, orderTitle: String!, needByDate: String!, price: String!, comments: String!): Order

  }
`;

// export the typeDefs
module.exports = typeDefs;