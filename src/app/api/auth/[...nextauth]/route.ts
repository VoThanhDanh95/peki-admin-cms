import prisma from "@/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"
import bcrypt from "bcryptjs"

const createRootAdminSchema = z.object({
  userName: z.string().min(1),
  password: z.string().min(1),
})

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // JSON Web Token
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const validData = await createRootAdminSchema.parseAsync(credentials)
        const existingUser = await prisma.user.findFirst({
          where: {
            userName: validData.userName,
          },
          select: {
            id: true,
            password: true,
          },
        })

        if (!existingUser) {
          throw new Error("INVALID_USER")
        }

        const isPasswordMatched = await bcrypt.compare(
          validData.password,
          existingUser.password || "",
        )

        if (!isPasswordMatched) {
          throw new Error("INVALID_PASSWORD")
        }

        return {
          id: existingUser.id,
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
