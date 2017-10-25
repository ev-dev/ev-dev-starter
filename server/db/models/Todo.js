const { STRING, TEXT } = require('sequelize')
  , db = require('../db')

const Todo = db.define('todo', {
  title: STRING,
  content: TEXT
})

module.exports = Todo