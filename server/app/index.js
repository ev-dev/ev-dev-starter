import { Router } from 'express'
import API_ROUTES from './api'

export { default as prodRouter } from './prod'
export { default as devRouter } from './dev'
export const apiRouter = Router().use('/api', API_ROUTES)
