import { initTRPC, TRPCError } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import superjson from 'superjson'
import { ZodError } from 'zod'
// import { db } from '@dream-app/db'

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts

  return {
    // db, // TODO: Re-enable when database is set up
    req,
    res,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router
export const publicProcedure = t.procedure

// Protected procedure middleware
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  // Add authentication logic here when needed
  return next({
    ctx,
  })
})