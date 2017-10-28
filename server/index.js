const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , { initDB, logListen, defaults, isProd } = require('./config')


app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())


isProd
  ? app.use(require('./app/prod'))
  : app.use(require('./app/dev'))


initDB()
  .then(() => app.listen(defaults.port, logListen))
  .catch(console.error)
