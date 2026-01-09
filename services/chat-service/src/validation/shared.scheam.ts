import { z } from "@chat-microservices/common"

export const conversationIdParamsSchema = z.object({
  id: z.string().uuid(),
})
