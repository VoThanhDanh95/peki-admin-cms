import { Cn } from "@shared/helpers/cn"
import { Locale } from "../../../../../i18n-config"
import { getDictionary } from "../../../../../get-dictionary"
import CreateRootAdminForm from "./components/CreateRootAdminForm"
import prisma from "../../../../db"
import { redirect } from "next/navigation"

const styles = {
  container: Cn.c("flex flex-col min-h-screen bg-default"),
  card: Cn.c(
    "w-[36rem] flex flex-col bg-surface-default rounded shadow-base m-auto p-6 space-y-6",
  ),
  title: Cn.c("font-h2-bold text-emphasized text-center"),
}

const CreateRootAdminPage = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)
  const userCount = await prisma.user.count()

  if (userCount > 0) {
    redirect("/login")
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{dictionary.createRootAdmin.title}</h2>
        <CreateRootAdminForm dictionary={dictionary["createRootAdmin"]} />
      </div>
    </div>
  )
}

export default CreateRootAdminPage
