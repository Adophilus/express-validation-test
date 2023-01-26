import { celebrate, Segments, Joi } from 'celebrate'

export const createTest = [
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      status: Joi.string().valid('SUCCESS', 'ERROR', 'PENDING').required()
    }
  })
]

export const updateTestById = [
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      status: Joi.string().valid('SUCCESS', 'ERROR', 'PENDING')
    }
  })
]
