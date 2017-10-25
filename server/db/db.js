const Sequelize = require('sequelize')

const DB_NAME = 'ev-dev-starter'

console.log(`
  - Opening connection to PostgresSQL DB  ${DB_NAME}
`)

const db = new Sequelize(
  `postgres://localhost:5432/${DB_NAME}`, {
    logging: false,
    native: true
  }
)

module.exports = db
