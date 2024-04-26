import { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'

import { AuthorizedError } from './routes/_errors/authorized-error'
import { BadRequestError } from './routes/_errors/bad-request-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      error: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequestError) {
    return reply.status(400).send({
      message: error.message,
    })
  }

  if (error instanceof AuthorizedError) {
    return reply.status(401).send({
      message: error.message,
    })
  }

  console.error(error.message)
  return reply.status(500).send({ message: 'Internal serve error' })
}
