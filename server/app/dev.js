import { Router } from 'express'
import { logger } from '../config'

export default Router()
  .use((req, res, next) => {
    console.log(`hit dev router`)
    next()
  })
  .use(logger)
