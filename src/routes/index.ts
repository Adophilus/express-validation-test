import { Router } from 'express'
import TestRoutes from '@/routes/test.route'

const router = Router()

router.use('/test', TestRoutes)

export default router
