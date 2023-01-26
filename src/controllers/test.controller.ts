import * as TestService from '@/services/test.service'
// import { STATUS_CODES } from 'http'
import { Request, Response } from 'express'
// import ApiError from '@/utils/api-error'

export const createTest = async (req: Request, res: Response) => {
  const payload = req.body
  res.status(201).json(await TestService.create(payload))
}

export const getTests = async (req: Request, res: Response) => {
  return res.json(await TestService.find())
}

export const getTestById = async (req: Request, res: Response) => {
  const { id } = req.params
  return res.json(await TestService.findById(id))
}

export const updateTestById = async (req: Request, res: Response) => {
  const { id } = req.params
  const payload = req.body
  return res.json(await TestService.updateById(payload, id))
}

export const deleteTestById = async (req: Request, res: Response) => {
  const { id } = req.params
  return res.status(409).json(await TestService.destroy(id))
}
