import type { AuthenticatedUser } from "@chat-microservices/common"

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser
    }
  }
}

export {}
