import { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { AuthorizedError } from '../routes/_errors/authorized-error'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub } = await request.jwtVerify<{ sub: string }>()
        return sub
      } catch (error) {
        throw new AuthorizedError('Invalid auth token')
      }
    }
  })
})
