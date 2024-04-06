import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"
import Label from "./Label"

const sizes = ["small", "medium", "large", "x-large"] as const
type Size = (typeof sizes)[number]

const styles = {
  root: Cn.c("w-full"),
  label: (size: Size, labelClassName?: string) => {
    let labelSizeStyle

    switch (size) {
      case "small":
        labelSizeStyle = Cn.c("font-paragraph-xsmall-medium")
        break
      case "medium":
        labelSizeStyle = Cn.c("font-paragraph-small-medium")
        break
      case "large":
      case "x-large":
        labelSizeStyle = Cn.c("font-paragraph-base-medium")
        break
    }

    return Cn.join([
      Cn.c("mb-1 text-emphasized"),
      labelSizeStyle,
      Cn.getIfExist(labelClassName),
    ])
  },
}

interface Props {
  className?: string
  labelClassName?: string
  label?: string
  required?: boolean
  size?: Size
}

const Input: FunctionComponent<Props> = ({
  className,
  label,
  required,
  size = "medium",
  labelClassName,
}) => {
  return (
    <div className={Cn.join([styles.root, Cn.getIfExist(className)])}>
      {label && (
        <Label
          label={label}
          labelClassName={styles.label(size, labelClassName)}
          required={required}
        />
      )}
    </div>
  )
}

export default Input
