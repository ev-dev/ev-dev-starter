import express from 'express'

import { isProd, isDev, PORT, logger, logListen, errorHandler } from './config'
import apiRouter from './api'

isDev && express().use(logger)

express()
  .use('/api', apiRouter)
  .use(errorHandler)
  .listen(PORT, logListen)
