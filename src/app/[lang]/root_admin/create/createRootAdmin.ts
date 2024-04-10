"use server"

import { z } from "zod"
import * as values from "./components/values"
import prisma from "@/db"
import bcrypt from "bcryptjs"

const createRootAdminSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
})

const createRootAdmin = async (data: values.FormType) => {
  const validData = await createRootAdminSchema.parseAsync(data)
  const hashedPassword = await bcrypt.hash(validData.password, 10)

  await prisma.user.create({
    data: {
      userName: validData.userName,
      password: hashedPassword,
      role: {
        connect: {
          name: "ROOT_ADMIN",
        },
      },
      status: "ACTIVE",
    },
  })
}

export { createRootAdmin }
