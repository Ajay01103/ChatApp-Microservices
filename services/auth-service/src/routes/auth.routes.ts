import { validateRequest } from "@chat-microservices/common"
import { Router } from "express"
import { loginSchema, refreshSchema, registerSchema, revokeSchema } from "./auth.schema"
import {
  loginHandler,
  refreshHandler,
  registerHandler,
  revokeHandler,
} from "@/controllers/auth.controller"

export const authRouter: Router = Router()

authRouter.post(
  "/register",
  validateRequest({ body: registerSchema.shape.body }),
  registerHandler,
)

authRouter.post("/login", validateRequest({ body: loginSchema.shape.body }), loginHandler)

authRouter.post(
  "/refresh",
  validateRequest({ body: refreshSchema.shape.body }),
  refreshHandler,
)

authRouter.post(
  "/revoke",
  validateRequest({ body: revokeSchema.shape.body }),
  revokeHandler,
)
