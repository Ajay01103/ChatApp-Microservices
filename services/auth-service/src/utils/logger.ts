import { createLogger } from "@chat-microservices/common"
import type { Logger } from "@chat-microservices/common"

export const logger: Logger = createLogger({ name: "auth-service" })
