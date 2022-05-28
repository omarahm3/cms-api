import { Sequelize } from 'sequelize-typescript'
import logger from '../../common/logger'
import appConfig from '../../config/app.config'

const sequelize = new Sequelize({
  host: appConfig.database.host,
  username: appConfig.database.user,
  password: appConfig.database.password,
  database: appConfig.database.name,
  port: appConfig.database.port,
  models: [__dirname + '/**/*.model.{ts,js}'],
  dialect: 'mysql',
  logging: logger.debug.bind(logger)
})

const init = () => {
  const isDev = appConfig.env === 'dev'
  sequelize.sync({ alter: isDev, force: isDev })
}

export { Sequelize, sequelize, init }
