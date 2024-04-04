import { PrismaClient } from '@prisma/client'
import { main as seedRoles } from './seedRoles'

const prisma = new PrismaClient()

const main = async () => {
    await seedRoles(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })