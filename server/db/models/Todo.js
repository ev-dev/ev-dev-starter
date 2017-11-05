import { STRING, TEXT } from 'sequelize'
import db from '../_db'

export const Todo = db.define('todo', {
  title: STRING,
  content: TEXT
})
