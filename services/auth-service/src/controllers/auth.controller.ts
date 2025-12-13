import { RequestHandler } from "express"
import { asyncHandler, HttpError } from "@chat-microservices/common"
import { RegisterInput } from "@/types/auth"
import { register } from "@/services/auth.service"

export const registerHandler: RequestHandler = asyncHandler(async (req, res) => {
  const payload = req.body as RegisterInput
  const tokens = await register(payload)

  res.status(201).json(tokens)
})
