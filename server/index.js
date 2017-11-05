import express from 'express'

import { prodRouter, devRouter, apiRouter } from './app'
import { isProd, PORT, initDB, logListen, errorHandler } from './config'

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
