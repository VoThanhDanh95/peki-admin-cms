import Input from "@shared/components/Input"
import { useLoginPage } from "./hook"
import { Cn } from "@shared/helpers/cn"
import { Locale } from "../../../../i18n-config"
import { getDictionary } from "../../../../get-dictionary"

const styles = {
  container: Cn.c("flex flex-col min-h-screen bg-default"),
  card: Cn.c(
    "w-[36rem] flex flex-col bg-surface-default rounded shadow-base m-auto p-6 space-y-6",
  ),
  title: Cn.c("font-h2-bold text-emphasized text-center"),
  form: Cn.c("flex flex-col space-y-6"),
  buttons: Cn.c("flex justify-end"),
}

const LoginPage = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const dictionary = await getDictionary(lang)
  //const {} = useLoginPage()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{dictionary.loginPage.login}</h2>
        <form className={styles.form}>
          <Input label={dictionary.loginPage.userName} />
          <Input label={dictionary.loginPage.password} />
        </form>
        <div className={styles.buttons}></div>
      </div>
    </div>
  )
}

export default LoginPage
