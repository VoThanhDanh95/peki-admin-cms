import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"

const loaderVariants = [
  "onPrimary",
  "primaryDefault",
  "emphasized",
  "criticalDefault",
] as const
const loaderSizes = ["sm", "lg"] as const

export type Variant = (typeof loaderVariants)[number]
export type Size = (typeof loaderSizes)[number]

const styles = {
  spinAnimation: (variant: Variant, size: Size) => {
    let variantStyle: string
    switch (variant) {
      case "onPrimary":
        variantStyle = Cn.c("text-icons-on-primary")
        break
      case "primaryDefault":
        variantStyle = Cn.c("text-icons-primary-default")
        break
      case "emphasized":
        variantStyle = Cn.c("text-icons-emphasized")
        break
      case "criticalDefault":
        variantStyle = Cn.c("text-icons-critical-default")
        break
      default:
        variantStyle = ""
        break
    }

    return Cn.join([
      Cn.c(
        "border-b-2 rounded-full animate-spin border-2 border-solid border-r-transparent",
      ),
      size === "sm" ? Cn.c("w-4 h-4") : Cn.c("w-6 h-6"),
      variantStyle,
    ])
  },
}

interface Props {
  /**The size of the spin loader */
  size?: Size
  /** Defines the look of the spin loader */
  variant?: Variant
}

const Loader: FunctionComponent<Props> = ({
  size = "sm",
  variant = "onPrimary",
}) => {
  return <div className={styles.spinAnimation(variant, size)} />
}

export default Loader
