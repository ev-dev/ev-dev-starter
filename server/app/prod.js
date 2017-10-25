const router = require('express').Router()
  , path = require('path')

router
  /* --- API Server --- */
  // .use('/api', require('./api'))

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

module.exports = router
