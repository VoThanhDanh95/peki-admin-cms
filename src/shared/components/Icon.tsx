"use client"

import Eye from "../../../public/eye.svg"
import CloseEye from "../../../public/close-eye.svg"
import Logout from "../../../public/logout.svg"
import Dashboard from "../../../public/dashboard.svg"
import Logo from "../../../public/logo.svg"
import QuestionMark from "../../../public/question-mark.svg"
import Plus from "../../../public/plus.svg"
import Search from "../../../public/search.svg"
import Close from "../../../public/close.svg"
import { FunctionComponent, MouseEventHandler } from "react"
import { Cn } from "@shared/helpers/cn"

const iconNames = [
  "eye",
  "closeEye",
  "logout",
  "dashboard",
  "logo",
  "questionMark",
  "plus",
  "search",
  'close'
] as const

export type IconName = (typeof iconNames)[number]

interface Props {
  name: IconName
  className?: string
  onClick?: MouseEventHandler
  isDisabled?: boolean
}

const styles = {
  clickable: Cn.c("cursor-pointer"),
}

const Icon: FunctionComponent<Props> = ({
  name,
  className,
  onClick,
  isDisabled,
}) => {
  const iconClassName = Cn.join([
    Cn.ifTrue(!!onClick, styles.clickable),
    Cn.getIfExist(className),
  ])
  const iconProps = { className: iconClassName, onClick }

  switch (name) {
    case "eye":
      return <Eye {...iconProps} />
    case "closeEye":
      return <CloseEye {...iconProps} />
    case "logout":
      return <Logout {...iconProps} />
    case "dashboard":
      return <Dashboard {...iconProps} />
    case "logo":
      return <Logo {...iconProps} />
    case "questionMark":
      return <QuestionMark {...iconProps} />
    case "plus":
      return <Plus {...iconProps} />
    case "search":
      return <Search {...iconProps} />
    case "close":
      return <Close {...iconProps} />
  }
}

export default Icon
