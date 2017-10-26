const router = require('express').Router()
  , path = require('path')
  , { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
  , schema = require('../graphql/schema')

router
  /* --- Logging Middleware --- */
  .use(require('volleyball'))

  /* --- GraphQL Server --- */
  .use('/graphql', graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

  /* --- API Server --- */
  // .use('/api', require('./api'))
  
  /* --- Serve React App --- */
  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'bundle.js'))
  })

  /* --- Serve Assets --- */
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) res.status(404).end()
    else next(null)
  })

  /* --- Serve Root HTML --- */
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  })

  /* --- Error Endware --- */
  .use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500)
      .send(err.message || 'Internal Server Error.')
  })

module.exports = router