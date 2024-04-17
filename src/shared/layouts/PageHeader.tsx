import { Cn } from "@shared/helpers/cn"
import { FunctionComponent, PropsWithChildren, ReactElement } from "react"

const styles = {
  root: Cn.c(
    "px-6 py-3 flex space-x-4 justify-between items-center border-b border-default",
  ),
  action: Cn.c("flex space-x-4"),
}

interface Props extends PropsWithChildren {
  actions?: ReactElement[]
}

const PageHeader: FunctionComponent<Props> = ({ children, actions }) => {
  return (
    <div className={styles.root}>
      <div>{children}</div>
      <div className={styles.action}>{actions}</div>
    </div>
  )
}

export default PageHeader
