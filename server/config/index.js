
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'


const pkgName = process.env.npm_package_name
  , isProd = process.env.NODE_ENV === 'production'
  , baseURL = 'http://localhost:'
  , PORT = isProd ? 80 : 3000

export { pkgName, isProd, baseURL, PORT }