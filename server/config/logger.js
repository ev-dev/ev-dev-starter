import { Router } from 'express'
import volleyball from 'volleyball'
import chalk from 'chalk'

import { pkgName, isProd, baseURL, PORT} from '.'

export const logger = Router().use(volleyball)

export const logListen = () => {
  const { yellow, cyan, red, blue } = chalk
    , NAME = red.bold(`[${pkgName.toUpperCase()}]`)
    , FULL_URL = `${cyan.bold(baseURL)}${yellow(PORT)}`
    , len = pkgName.length
    , bars = len <= 14 ? 44 : len + 26
    , space = len <= 14 ? 22 - len : 4
    , btmSpace = len <= 14 ? 3 : len - 15

  if (isProd) {
    console.log(`
    - ${pkgName} > Production Server @ ${baseURL}${PORT} -
    `)
  } else {
    console.log(`
          ${'-'.repeat(bars)}
          +   ${NAME}    ${blue.bold('Development')}${' '.repeat(space)}+
          +${' '.repeat(bars - 2)}+
          +   => ${yellow.bold('Listening')} @ ${FULL_URL}${' '.repeat(btmSpace)}+
          ${'-'.repeat(bars)}
    `)
  }
}