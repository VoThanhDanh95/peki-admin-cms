import { Cn } from "@shared/helpers/cn"
import { NextIntlClientProvider } from "next-intl"
import { FunctionComponent, PropsWithChildren } from "react"
import SideMenu from "./SideMenu/SideMenu"
import { getMessages } from "next-intl/server"

const styles = {
  root: Cn.c("flex h-screen bg-default"),
  main: Cn.c("flex flex-row w-full flex-1 bg-surface-default"),
  content: Cn.c(
    "flex flex-col flex-1 w-full overflow-x-hidden overflow-y-auto",
  ),
}

interface Props extends PropsWithChildren {
  extra?: React.ReactElement
  menu?: React.ReactElement
}

const DefaultLayout: FunctionComponent<Props> = async ({
  extra,
  menu,
  children,
}) => {
  const messages = await getMessages()

  return (
    <>
      <div className={styles.root}>
        <NextIntlClientProvider messages={{ SideMenu: messages["SideMenu"] }}>
          <SideMenu />
        </NextIntlClientProvider>
        <div className={styles.main}>
          {menu}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      {extra}
    </>
  )
}

export default DefaultLayout
