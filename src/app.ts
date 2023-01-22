import express from 'express'
import config from '@/config'
import { Logger } from 'tslog'
import morgan from 'morgan'
import routes from '@/routes'

const app = express()
const logger = new Logger()

app.use(morgan('combined'))

app.use('/', routes)

app.listen(config.server.port, () =>
  logger.info(`Started server on port ${config.server.port}`)
)
