import Sequelize from 'sequelize'
// import { pkgName } from '../config'
const pkgName = process.env.npm_package_name
console.log(`
  - Opening connection to PostgresSQL DB  ${pkgName}
`)

export default new Sequelize(
  `postgres://localhost:5432/${pkgName}`, {
    logging: false,
    operatorsAliases: Sequelize.Op,
    native: true
  }
)
