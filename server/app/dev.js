import { Router } from 'express'
import { logger } from '../config'

export default Router()
  .use(logger)
