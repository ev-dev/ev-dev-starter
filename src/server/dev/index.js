 path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express()

app
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())

  .use(require('volleyball'))

  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'bundle.js'))
  })
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) res.status(404).end()
    else next(null)
  })
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  })
  .use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500)
      .send(err.message || 'Internal Server Error.')
  })


const PORT = 3000
const chalk = require('chalk')
app.listen(PORT, () => {
  const name = chalk.red.bold('[Server]')
  const url = chalk.cyan.bold(`http://localhost:`)
  const listen = chalk.yellow.bold('Listening')

  console.log(`
  ${name} - ${listen} - ${url}${chalk.yellow(PORT)}
  `)
})
