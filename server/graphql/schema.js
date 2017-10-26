const { makeExecutableSchema } = require('graphql-tools')
  , gql = require('graphql-tag')
  , resolvers = require('./resolvers')

// @ts-ignore
const typeDefs = gql`
  type Query {
    user(name: String): [User]
    users: [User]
    todo(query: String): [Todo]
    todos: [Todo]
    search(query: String): Search
  }

  type Mutation {
    createTodo(
      title: String, 
      content: String,
      userId: Int 
    ): Todo
    createUser(name: String): User
    upvoteTodo(todoId: Int): Todo
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
    votes: Int
    user: User
  }

  type Search {
    todos: [Todo]
    users: [User]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
