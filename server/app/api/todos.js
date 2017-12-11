import { Router } from 'express'

export default Router()
  .get('/', (req, res, next) => {
    res.json({
      todos: [
        'walk the dog',
        'clean the house',
        'call the doctor'
      ]
    })
  })