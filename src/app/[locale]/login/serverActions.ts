"use server"

import { z } from "zod"
import prisma from "@/db"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import config from "@/config"
import { getTranslations } from "next-intl/server"

const createRootAdminSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
})

const login = async (data: unknown) => {
  const t = await getTranslations("LoginPage")
  const validData = await createRootAdminSchema.parseAsync(data)
  const existingUser = await prisma.user.findFirst({
    where: {
      userName: validData.userName,
    },
    select: {
      id: true,
      password: true,
    },
  })

  if(!existingUser) {
    throw new Error(t('unexistingUsername'))
  }

  const isPasswordMatched = await bcrypt.compare(
    validData.password,
    existingUser.password || "",
  )

  if (!isPasswordMatched) {
    throw new Error(t('invalidPassword'))
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
