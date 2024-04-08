"use server"

import { z } from "zod"
import * as values from "./components/values"
import prisma from "@/db"

const createRootAdminSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
})

const createRootAdmin = async (data: values.FormType) => {
  const validData = await createRootAdminSchema.parseAsync(data)

  await prisma.user.create({
    data: {
      userName: validData.userName,
      password: validData.password,
      role: {
        connect: {
          name: 'ROOT_ADMIN'
        }
      },
      status: 'ACTIVE'
    }
  })
  
}

export { createRootAdmin }
