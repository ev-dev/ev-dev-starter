const { User, Todo } = require('../db/models')

module.exports = {
  Query: {
    user: (_, args) => User.find({ where: args }),
    users: () => User.findAll(),
    todo: (_, args) => Todo.find({ where: args }),
    todos: () => Todo.findAll()
  },
  User: {
    todos: user => user.getTodos()
  },
  Todo: {
    user: todo => todo.getUser()
  }
}