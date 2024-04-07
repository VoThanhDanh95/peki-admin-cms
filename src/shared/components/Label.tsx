import { Cn } from "@shared/helpers/cn"
import { FunctionComponent, LabelHTMLAttributes } from "react"

const styles = {
  labelWrapper: Cn.c("items-center gap-x-2"),
  label: Cn.c("font-paragraph-small-medium text-emphasized flex items-center"),
  required: Cn.c("text-icons-critical-default ml-0.5"),
}

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  labelClassName?: string
  className?: string
  required?: boolean
}

const Label: FunctionComponent<Props> = ({
  className,
  labelClassName,
  label,
  required,
  htmlFor,
}) => {
  return (
    <div className={Cn.join([styles.labelWrapper, Cn.getIfExist(className)])}>
      <label
        className={Cn.join([styles.label, Cn.getIfExist(labelClassName)])}
        htmlFor={htmlFor}
      >
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
    </div>
  )
}

export default Label
