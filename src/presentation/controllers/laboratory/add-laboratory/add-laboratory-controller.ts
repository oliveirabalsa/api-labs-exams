import { response } from '../../../helpers/response-helper'
import { serverError, badRequest, ok } from '../../../helpers/http-helper'
import { MissingParamError } from '../../../errors'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'

export class LaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const requiredFields = ['name', 'address', 'status']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return response(badRequest(new MissingParamError(field)))
        }
      }
      const { name, address, status } = req.body
      const laboratory = await laboratoryService.save({
        name,
        address,
        status
      })

      await res.status(200).json(ok(laboratory))
    } catch (error) {
      // console.log(error.message)
      return response(serverError())
    }
  }
}