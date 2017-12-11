import express from 'express'
import { prodRouter, devRouter, apiRouter } from './app'
import { isProd, PORT, logListen, errorHandler } from './config'

express()
  .use(isProd ? prodRouter : devRouter)
  .use(apiRouter)
  .use(errorHandler)
  .listen(PORT, logListen)