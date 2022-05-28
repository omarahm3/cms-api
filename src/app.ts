import { json } from 'body-parser'
import express, { Application } from 'express'
import appConfig from './config/app.config'
import router from './routes'

const app: Application = express()

app.use(json())

app.use(appConfig.api.prefix, router)

export default app
