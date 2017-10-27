const { Op } = require('sequelize')
  , { User, Todo } = require('../db/models')

module.exports = {
  Query: {
    user: (_, { name }) => 
      User.findAll({ 
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      }),
    
    users: () => User.findAll(),
    
    todo: (_, { query }) => 
      Todo.findAll({ 
        where: {
          [Op.or]: {
            title: {
              [Op.iLike]: `%${query}%`
            },
            content: {
              [Op.iLike]: `%${query}%`
            }
          }
        }
      }),
    
    todos: () => Todo.findAll(),

    search: (_, { query }) =>
      Promise.all([
        Todo.findAll({
          where: {
            [Op.or]: {
              title: {
                [Op.iLike]: `%${query}%`
              },
              content: {
                [Op.iLike]: `%${query}%`
              }
            }
          }
        }),
        User.findAll({
          where: {
            name: {
              [Op.iLike]: `%${query}%`
            }
          }
        })
      ])
        .then(([todos, users]) => ({ todos, users }))
        .catch(console.error)
  },

  Mutation: {
    createUser: (_, { name }) => 
      User.create({ name }),

    createTodo: (_, { title, content, userId }) => 
      Todo.create({ title, content, userId }),

    upvoteTodo: (_, { todoId }) =>
      Todo.findById(+todoId)
        .then(todo => todo.update({ votes: todo.votes + 1 }))
  },

  User: {
    todos: user => user.getTodos()
  },
  
  Todo: {
    user: todo => todo.getUser()
  }

}