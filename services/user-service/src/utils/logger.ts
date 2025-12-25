import { createLogger, type Logger } from "@chat-microservices/common"

export const logger: Logger = createLogger({ name: "user-service" })
