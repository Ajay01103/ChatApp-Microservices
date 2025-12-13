import { validateRequest } from "@chat-microservices/common"
import { Router } from "express"
import { registerSchema } from "./auth.schema"
import { registerHandler } from "@/controllers/auth.controller"

export const authRouter: Router = Router()

authRouter.post(
  "/register",
  validateRequest({ body: registerSchema.shape.body }),
  registerHandler,
)
