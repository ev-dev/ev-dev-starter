const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , { db } = require('./db/models')
  , DEV_PORT = 3000
  , PROD_PORT = 80

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
  const chalk = require('chalk')
  app.use(require('./app/dev'))

  db.sync()
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
