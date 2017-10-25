const { STRING } = require('sequelize')
  , db = require('../db')

const User = db.define('user', {
  name: STRING
})

module.exports = User
