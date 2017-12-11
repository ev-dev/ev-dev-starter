import { Router } from 'express'
import bodyParser from 'body-parser'
import todo from './todos'
import user from './users'

export default Router()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/todos', todo)
  .use('/users', user)