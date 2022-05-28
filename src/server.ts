import config from './config/app.config'
import logger from './common/logger'
import app from './app'
import { init } from './db/models'

process.on('uncaughtException', (err) => {
  console.error('server.Error:: Unknown error ::', err)
  process.exit(1)
})

init()

app.listen(config.port, () => {
  logger.info(`server.listen:: Server running http://localhost:${config.port}`)
})
