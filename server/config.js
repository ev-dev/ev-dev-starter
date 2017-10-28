const { yellow, red, blue, cyan } = require('chalk')
  , { db } = require('./db/models')
  , seedDB = require('./db/seed')
  , isProd = process.env.NODE_ENV === 'production'


const defaults = {
  pkgName: process.env.npm_package_name,
  baseURL: 'http://localhost:',
  port: isProd ? 80 : 3000
}


const initDB = () =>
  isProd ?
    db.sync({ force: false })
    :
    seedDB()


const logListen = (config = defaults) => {
  const { pkgName, baseURL, port } = config
    , NAME = red.bold(`[${pkgName.toUpperCase()}]`)
    , FULL_URL = `${cyan.bold(baseURL)}${yellow(port)}`
    , len = pkgName.length
    , bars = len <= 14 ? 44 : len + 26
    , space = len <= 14 ? 22 - len : 4
    , btmSpace = len <= 14 ? 3 : len - 15

  if (isProd)
    console.log(`
      - ${pkgName} > Production Server @ ${baseURL}${port} -
    `)
  else
    console.log(`
          ${'-'.repeat(bars)}
          +   ${NAME}    ${blue.bold('Development')}${' '.repeat(space)}+
          +${' '.repeat(bars - 2)}+
          +   => ${yellow.bold('Listening')} @ ${FULL_URL}${' '.repeat(btmSpace)}+
          ${'-'.repeat(bars)}
    `)
}


module.exports = { initDB, logListen, defaults, isProd }