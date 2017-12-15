
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'

const pkgName = process.env.npm_package_name
  , isProd = process.env.NODE_ENV === 'production'
  , isDev = !isProd
  , baseURL = 'http://localhost:'
  , PORT = isProd ? 80 : 3000

export { pkgName, isProd, isDev, baseURL, PORT }
