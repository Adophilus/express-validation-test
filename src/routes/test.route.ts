import { Router } from 'express'
import * as TestMiddleware from '@/middlewares/test.middleware'
import * as TestController from '@/controllers/test.controller'

const router = Router()

router.post('/', TestMiddleware.createTest, TestController.createTest)
router.get('/', TestController.getTests)
router.get('/:id', TestController.getTestById)
router.patch(
  '/:id',
  TestMiddleware.updateTestById,
  TestController.updateTestById
)
router.delete('/:id', TestController.deleteTestById)

export default router
