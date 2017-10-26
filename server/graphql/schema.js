const { makeExecutableSchema } = require('graphql-tools')
  , gql = require('graphql-tag')
  , resolvers = require('./resolvers')

// @ts-ignore
const typeDefs = gql`
  type Query {
    user(name: String): User
    users: [User]
    todo(title: String, content: String): Todo
    todos: [Todo]
  }

  type User {
    id: Int
    name: String
    todos: [Todo]
  }

  type Todo {
    id: Int
    title: String
    content: String
    user: User
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
