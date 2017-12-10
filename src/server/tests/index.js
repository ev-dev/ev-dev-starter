import express from 'express'
import logger from 'volleyball'

express()
  .use(logger)
  .get('/test', (req, res, next) => {
    res.send('Success.')
  })
  .listen(3000, () => {
    console.log(`
      Test server listening on port 3000...
    `)
  })