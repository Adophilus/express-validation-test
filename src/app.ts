import express from 'express'
import config from '@/config'
import { Logger } from 'tslog'
import morgan from 'morgan'
import routes from '@/routes'
import { errors } from 'celebrate'

const app = express()
const logger = new Logger()

app.use(morgan('combined'))

app.use('/', routes)
app.use(errors())

export const start = () =>
  app.listen(config.server.port, () =>
    logger.info(`Started server on port ${config.server.port}`)
  )
