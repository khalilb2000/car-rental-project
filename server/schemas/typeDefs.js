const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedCar: [Car]
  }

  type Car {
    carName: String!
    price: Int!
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addCar(carName: String!, price: Int!, image: String): User
    removeCar(carName: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
