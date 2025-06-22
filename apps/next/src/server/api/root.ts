import { createTRPCRouter, publicProcedure } from './trpc'
import { z } from 'zod'

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name ?? 'World'} from T3 + Solito!`,
      }
    }),
  
  test: publicProcedure.query(() => {
    return {
      message: 'tRPC is working!',
      timestamp: new Date().toISOString(),
    }
  }),
  
  simple: publicProcedure.query(() => {
    return 'This is a simple string response'
  }),
})

export type AppRouter = typeof appRouter