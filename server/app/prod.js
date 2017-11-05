import { Router } from 'express'
import logger from 'volleyball'
import path from 'path'
import api from './api'

export default Router()
  /* --- Logging Middleware --- */
  .use(logger)

  /* --- API Server --- */
  .use('/api', api)

  /* --- Error Endware --- */
  .use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500)
      .send(err.message || 'Internal Server Error.')
  })