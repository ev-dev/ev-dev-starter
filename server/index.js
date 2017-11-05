import express from 'express'

import { prodRouter, devRouter, apiRouter } from './app'
import {
  options, initDB, seedDB,
  logListen, errorHandler
} from './config'
const { isProd, PORT } = options


try { 
  initDB() 
} 
catch (err) { 
  console.error('Error Syncing DB. ', err)
} 
finally { 
  express()
    .use(isProd ? prodRouter : devRouter)
    .use(apiRouter)
    .use(errorHandler)
    .listen(PORT, logListen)
}
