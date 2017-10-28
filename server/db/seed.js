const _ = require('lodash')
  , casual = require('casual')
  , { green } = require('chalk')
  , { db, User, Todo } = require('./models')

module.exports = () => {
  console.log(green.bold('\n  - Seeding Database...'))
  casual.seed(123)

  return db.sync({ force: true })
    .then(() =>
      _.times(10, () =>
        User.create({
          name: casual.first_name
        })
          .then(createdUser =>
            createdUser.createTodo({
              title: `Post by ${createdUser.name}`,
              content: casual.sentences(3),
              votes: casual.integer(0, 1000)
            }))
      ))
    .catch(err => {
      console.error('Error...Problem Seeding DB.')
    })
}
