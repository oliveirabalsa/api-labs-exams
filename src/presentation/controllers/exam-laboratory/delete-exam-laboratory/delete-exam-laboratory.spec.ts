import app from '../../../app'
import request from 'supertest'

describe('DeleteExamLaboratoryController', () => {
  test('Should return 404 if no id is provided', async () => {
    const httpResponse = await request(app)
      .delete('/laboratory//exam')
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(404)
    expect(response.body).toEqual('Invalid method or endpoint')
  })
})
