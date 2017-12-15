import express from 'express'

import { staticRouter, apiRouter } from './app'
import { isDev, PORT, logListen, logger, errorHandler } from './config'

express()
  .use(isDev && logger)
  .use(staticRouter)
  .use(apiRouter)
  .use(errorHandler)
  .listen(PORT, logListen)
