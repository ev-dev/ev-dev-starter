import { Router } from 'express'
import path from 'path'
import fs from 'fs'

const filePath = file => path.join(
  __dirname, '..', '..', 'dist', file
)

export default Router()
  /* --- Serve React App --- */
  // .get('/bundle.js', (req, res) => {
  //   res.sendFile(filePath('bundle.js'))
  // })

  /* --- Serve Assets --- */
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      const fileRequest = filePath(req.path)
      fs.stat(fileRequest, (err, status) => {
        if (err) {
          console.error('File Not Found...', req.path)
          res.status(404).end()
        } else {
          res.sendFile(fileRequest)
        }
      })
    } else {
      next(null)
    }
  })
  
  /* --- Serve Root HTML --- */
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
  })