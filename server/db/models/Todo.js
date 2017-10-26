const { STRING, TEXT, INTEGER } = require('sequelize')
  , db = require('../db')

const Todo = db.define('todo', {
  title: STRING,
  content: TEXT,
  votes: INTEGER
})

module.exports = Todo