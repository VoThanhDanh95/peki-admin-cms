import { Cn } from "@shared/helpers/cn"
import { Locale } from "../../../../i18n-config"
import { getDictionary } from "../../../../get-dictionary"
import LoginForm from "./components/LoginForm"

const styles = {
  container: Cn.c("flex flex-col min-h-screen bg-default"),
  card: Cn.c(
    "w-[36rem] flex flex-col bg-surface-default rounded shadow-base m-auto p-6 space-y-6",
  ),
  title: Cn.c("font-h2-bold text-emphasized text-center"),
}

const LoginPage = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{dictionary.loginPage.title}</h2>
        <LoginForm dictionary={dictionary["loginPage"]} />
      </div>
    </div>
  )
}

export default LoginPage
