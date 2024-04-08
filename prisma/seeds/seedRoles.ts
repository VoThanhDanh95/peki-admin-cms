import { PrismaClient } from "@prisma/client"
import { roleNames } from "../../src/shared/constants"

export const main = async (prisma: PrismaClient) => {
  const roleCount = await prisma.role.count()

  if (roleCount === roleNames.length) {
    return Promise.resolve()
  }

  return Promise.all(
    roleNames.map((roleName) =>
      prisma.role.upsert({
        where: {
          name: roleName,
        },
        create: {
          name: roleName,
        },
        update: {
          name: roleName,
        },
      }),
    ),
  )
}
