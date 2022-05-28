import { Response, Router } from 'express'
import logger from '../common/logger'
import loadRoutes from '../lib/loader'

const router = Router()
const routes = loadRoutes()

routes.map((route) => {
  const { endpoint, module } = route

  logger.info(`routes.loader:: Loading route [${endpoint}]`)

  if (!endpoint) {
    throw new Error(`Module [${endpoint}] doesn't have endpoint property, please consider adding it`)
  }

  logger.debug(`router.loader:: Module endpoint [${endpoint}]`)
  router.use(`/${endpoint}`, module)
})

router.get('/', (_, res: Response) => {
  return res.status(200).send('Server is up...')
})

export default router
