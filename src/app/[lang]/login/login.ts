"use server"

import { z } from "zod"
import * as values from "./components/values"
import prisma from "@/db"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import config from "@shared/config/config"

const createRootAdminSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
})

const login = async (data: values.FormType) => {
  const validData = await createRootAdminSchema.parseAsync(data)
  const existingUser = await prisma.user.findUniqueOrThrow({
    where: {
      userName: validData.userName,
    },
    select: {
      id: true,
      password: true,
    },
  })

  const isPasswordMatched = await bcrypt.compare(
    validData.password,
    existingUser.password || "",
  )

  if (!isPasswordMatched) {
    throw new Error("wrong password")
  }

  const cookieValue = jwt.sign(
    {
      userId: existingUser.id,
    },
    config.cookieSecret,
  )

  cookies().set(config.pekiAccessToken, cookieValue)
}

export { login }
