
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'
export { default as initDB } from './dbInit'
export { default as seedDB } from './seed'


// export const pkgName = process.env.npm_package_name
//   , isProd = process.env.NODE_ENV === 'production'
//   , isForceSyncDB = true
//   , baseURL = 'http://localhost:'
//   , PORT = isProd ? 80 : 3000

const options = {
  pkgName: process.env.npm_package_name, 
  isProd: process.env.NODE_ENV === 'production',
  isForceSyncDB: true, 
  baseURL: 'http://localhost:', 
  PORT: this.isProd ? 80 : 3000
}

export { options }