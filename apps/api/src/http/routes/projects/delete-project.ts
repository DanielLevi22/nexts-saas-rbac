import { projectSchema } from '@saas/auth'
import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import { getUserPermissions } from '@/utils/get-user-permissions'

import { AuthorizedError } from '../_errors/authorized-error'
import { BadRequestError } from '../_errors/bad-request-error'
export async function deleteProject(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .put(
      '/organizations/:slug/:projectId',
      {
        schema: {
          tags: ['Projects'],
          summary: 'Delete a  project',
          security: [{ bearerAuth: [] }],

          params: z.object({
            slug: z.string(),
            projectId: z.string().uuid(),
          }),
          response: {
            204: z.null(),
          },
        },
      },
      async (request, reply) => {
        const { projectId, slug } = request.params

        const userId = await request.getCurrentUserId()
        const { membership, organization } =
          await request.getUserMembership(slug)

        const project = await prisma.project.findUnique({
          where: {
            id: projectId,
            organizationId: organization.id,
          },
        })

        if (!project) {
          throw new BadRequestError(`Project not found.`)
        }
        const { cannot } = getUserPermissions(userId, membership.role)
        const authProject = projectSchema.parse(project)

        if (cannot('delete', authProject)) {
          throw new AuthorizedError(
            `You're not allowed to delete this  project.`,
          )
        }

        await prisma.project.delete({
          where: {
            id: project.id,
          },
        })

        return reply.status(204).send()
      },
    )
}
