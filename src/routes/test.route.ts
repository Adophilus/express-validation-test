import { Router } from 'express'
import TestMiddleware from '@/middleware/test.middleware'
import TestController from '@/controllers/test.controller'

const router = Router()

router.post('/', TestController.createTest)
router.get('/', TestController.getTest)
router.get('/:id', TestController.getTestById)
router.patch('/:id', TestController.updateTestById)
router.delete('/:id', TestController.deleteTestById)

export default router
