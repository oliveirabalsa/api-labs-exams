import { serverError, ok, notFound } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class LoadLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const laboratory = await laboratoryService.all()

      if (!laboratory.length) {
        return response(notFound())
      }

      await res.status(200).json(ok(laboratory))
    } catch (error) {
      return response(serverError())
    }
  }
}