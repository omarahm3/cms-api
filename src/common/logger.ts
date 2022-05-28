import config from '../config/app.config'
import pino from 'pino'

export default pino({
  level : config.logs.level,
  transport : {
    target : 'pino-pretty',
  }
})
