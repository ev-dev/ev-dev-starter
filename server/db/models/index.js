const db = require('../db')
  , User = require('./User')
  , Todo = require('./Todo')

User.hasMany(Todo)
Todo.belongsTo(User)

module.exports = {
  User,
  Todo,
  db
}
