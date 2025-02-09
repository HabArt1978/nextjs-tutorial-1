import { z } from 'zod'

export const TaskSchema = z.object({
  taskDescription: z.string().min(5)
})
