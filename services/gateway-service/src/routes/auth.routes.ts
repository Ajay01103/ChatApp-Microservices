import { registerUser } from "@/controller/auth.controller"
import { registerSchema } from "@/validation/auth-schema"
import { asyncHandler, validateRequest } from "@chat-microservices/common"
import { Router } from "express"

export const authRouter: Router = Router()

authRouter.post(
  "/register",
  validateRequest({ body: registerSchema }),
  asyncHandler(registerUser),
)
