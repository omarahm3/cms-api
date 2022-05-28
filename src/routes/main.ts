import { Router } from 'express'
import MainController from '../controllers/MainController'

const router = Router()
const controller = new MainController()

router.get('/', controller.main)

router.post('/author', controller.createAuthor)

router.post('/author/remove/:id', controller.removeAuthor)

export const endpoint = 'main'
export default router
