const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  {
    db
  } = require('./db/models'),
  DEV_PORT = 3000,
  PROD_PORT = 80

app
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())

// PRODUCTION
if (process.env.NODE_ENV === 'production') {
  app.use(require('./app/prod'))

  db.sync()
    .then(() => {
      app.listen(PROD_PORT, () => {
        console.log(`
          - Production Server Running on Port ${PROD_PORT} -
        `)
      })
    })
    .catch(console.error)
}

// DEVELOPMENT
else {
  const _ = require('lodash'),
    casual = require('casual'),
    chalk = require('chalk'),
    {
      User,
      Todo
    } = require('./db/models')

  app.use(require('./app/dev'))

  casual.seed(123)
  db.sync({
      force: true
    })
    .then(() => {
      console.log('\n  - Seeding DB \n')
      return _.times(10, () =>
        User.create({
          name: casual.first_name
        })
        .then(user => user.createTodo({
          title: `Post by ${user.name}`,
          content: casual.sentences(3)
        }))
        .catch(console.error)
      )
    })
    .then(() => {
      app.listen(DEV_PORT, () => {
        const name = chalk.red.bold('[Server]')
        const url = chalk.cyan.bold(`http://localhost:`)
        const listen = chalk.yellow.bold('Listening')

        console.log(`
          ${name} - ${listen} - ${url}${chalk.yellow(DEV_PORT)}
        `)
      })
    })
    .catch(console.error)
}
