import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

const { NODE_ENV } = process.env

const envPath = NODE_ENV === 'prod'
  ? path.join(__dirname, '../../.env.prod')
  : path.join(__dirname, '../../.env')

const envFileExists = fs.existsSync(envPath)

if (envFileExists && NODE_ENV === 'dev') {
  const result = dotenv.config({
    path: envPath,
  })

  if (result.error) {
    throw result.error
  }
}

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  LOG_LEVEL = 'info',
  PORT = 3000
} = process.env

type DatabaseConfig = {
  host     : string
  port     : number
  name     : string
  user     : string
  password : string
}

type AppConfig = {
  hashSalt : string
  env : string
  port : number
  database : DatabaseConfig
  logs : any
  api : any
}

const appConfig: AppConfig = {
  hashSalt : 'r4yw2',
  env      : NODE_ENV,
  port     : Number(PORT),
  database : {
    host     : DB_HOST,
    port     : Number(DB_PORT),
    name     : DB_NAME,
    user     : DB_USER,
    password : DB_PASSWORD,
  },
  logs : {
    level : LOG_LEVEL,
  },
  api : {
    prefix : '/api'
  }
}

export default appConfig
