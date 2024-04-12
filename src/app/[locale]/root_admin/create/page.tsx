import { Cn } from "@shared/helpers/cn"
import CreateRootAdminForm from "./components/CreateRootAdminForm"
import prisma from "../../../../db"
import { redirect } from "@/navigation"
import { getMessages, getTranslations } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

const styles = {
  container: Cn.c("flex flex-col min-h-screen bg-default"),
  card: Cn.c(
    "w-[36rem] flex flex-col bg-surface-default rounded shadow-base m-auto p-6 space-y-6",
  ),
  title: Cn.c("font-h2-bold text-emphasized text-center"),
}

const CreateRootAdminPage = async () => {
  const t = await getTranslations("CreateRootAdminPage")
  const messages = await getMessages()
  const userCount = await prisma.user.count()

  if (userCount > 0) {
    redirect("/login")
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{t("title")}</h2>
        <NextIntlClientProvider
          messages={{ CreateRootAdminPage: messages["CreateRootAdminPage"] }}
        >
          <CreateRootAdminForm />
        </NextIntlClientProvider>
      </div>
    </div>
  )
}

export default CreateRootAdminPage
