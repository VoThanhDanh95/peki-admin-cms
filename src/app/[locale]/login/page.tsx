import { Cn } from "@shared/helpers/cn"
import LoginForm from "./components/LoginForm"
import { FunctionComponent } from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { auth } from "@shared/helpers/getServerSession"
import { redirect } from "@/navigation"

const styles = {
  container: Cn.c("flex flex-col min-h-screen bg-default"),
  card: Cn.c(
    "w-[36rem] flex flex-col bg-surface-default rounded shadow-base m-auto p-6 space-y-6",
  ),
  title: Cn.c("font-h2-bold text-emphasized text-center"),
}

const LoginPage: FunctionComponent = async () => {
  const t = await getTranslations("LoginPage")
  const messages = await getMessages()
  const session = await auth()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{t("title")}</h2>
        <NextIntlClientProvider messages={{ LoginPage: messages["LoginPage"] }}>
          <LoginForm />
        </NextIntlClientProvider>
      </div>
    </div>
  )
}

export default LoginPage
