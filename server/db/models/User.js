import { STRING } from 'sequelize'
import db from '../_db'

export const User = db.define('user', {
  name: STRING
})
