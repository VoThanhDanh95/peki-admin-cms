"use client"

import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"
import { SideMenuItem } from "./SideMenuItem"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/navigation"
import Icon from "@shared/components/Icon"

const styles = {
  container: Cn.c(
    "w-[12rem] bg-default px-3 flex flex-col items-start h-full justify-between shrink-0 py-3",
  ),
  logoLink: Cn.c("my-2 block"),
  logo: Cn.c("h-8"),
  section: Cn.c("w-full flex flex-col space-y-2"),
  userMenu: Cn.c("my-14"),
}

const SideMenu: FunctionComponent = () => {
  const t = useTranslations("SideMenu")
  const pathName = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Link href={`/dashboard`} className={styles.logoLink}>
          <Icon name="logo" className={styles.logo} />
        </Link>
        {/* <UserMenu className={styles.userMenu} /> */}
        <SideMenuItem
          to={`/dashboard`}
          label={t("dashboard")}
          icon="dashboard"
          isActive={pathName.startsWith("/dashboard")}
        />
        <SideMenuItem
          to={`/question`}
          label={t("question")}
          icon="questionMark"
          isActive={pathName.startsWith("/question")}
        />
      </div>
      <SideMenuItem
        to={"/api/auth/signout"}
        label={t("logout")}
        icon="logout"
      />
    </div>
  )
}

export default SideMenu
