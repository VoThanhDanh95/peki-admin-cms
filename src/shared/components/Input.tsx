import { Cn } from "@shared/helpers/cn"
import { InputHTMLAttributes } from "react"
import Label from "./Label"
import {
  FieldError,
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormRegister,
} from "react-hook-form"

const sizes = ["sm", "md", "lg", "xl"] as const
type Size = (typeof sizes)[number]

const styles = {
  root: Cn.c("w-full"),
  label: (size: Size, labelClassName?: string) => {
    let labelSizeStyle

    switch (size) {
      case "sm":
        labelSizeStyle = Cn.c("font-paragraph-xsmall-medium")
        break
      case "md":
        labelSizeStyle = Cn.c("font-paragraph-small-medium")
        break
      case "lg":
      case "xl":
        labelSizeStyle = Cn.c("font-paragraph-base-medium")
        break
    }

    return Cn.join([
      Cn.c("mb-1 text-emphasized"),
      labelSizeStyle,
      Cn.getIfExist(labelClassName),
    ])
  },
  inputWrapper: Cn.c("flex flex-col space-y-1 w-full"),
  input: (size: Size, isDisabled: boolean, hasError: boolean) => {
    let sizeStyles

    switch (size) {
      case "sm":
        sizeStyles = Cn.c("py-2 px-3 h-8 font-paragraph-xsmall-regular")
        break
      case "md":
        sizeStyles = Cn.c("p-4 h-10 font-paragraph-small-regular")
        break
      case "lg":
        sizeStyles = Cn.c("p-4 h-12 font-paragraph-base-regular")
        break
      case "xl":
        sizeStyles = Cn.c("py-4 px-6 h-16 font-paragraph-base-regular")
        break
    }

    return Cn.join([
      sizeStyles,
      Cn.c(
        "border border-default w-full cursor-pointer rounded-lg bg-surface-default focus:outline-none focus:border-primary-default placeholder-default text-emphasized",
      ),
      Cn.ifTrue(hasError, Cn.c("border-critical-default")),
      Cn.ifTrue(isDisabled, Cn.c("bg-surface-disabled")),
    ])
  },
  error: Cn.c("text-critical-default font-paragraph-xsmall-regular"),
}

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: Path<T>
  register: UseFormRegister<T>
  className?: string
  labelClassName?: string
  inputClassName?: string
  label?: string
  required?: boolean
  size?: Size
  error?: FieldError
  clearErrors?: UseFormClearErrors<T>
}

const Input = <T extends FieldValues>({
  name,
  register,
  className,
  labelClassName,
  inputClassName,
  label,
  required,
  size = "md",
  error,
  clearErrors,
  disabled = false,
  onFocus,
  ...rest
}: Props<T>) => {
  return (
    <div className={Cn.join([styles.root, Cn.getIfExist(className)])}>
      {label && (
        <Label
          htmlFor={name}
          label={label}
          labelClassName={styles.label(size, labelClassName)}
          required={required}
        />
      )}
      <div className={styles.inputWrapper}>
        <input
          {...register(name)}
          onFocus={(event) => {
            clearErrors && clearErrors(name)
            onFocus && onFocus(event)
          }}
          {...rest}
          className={Cn.join([
            styles.input(size, disabled, !!error),
            Cn.getIfExist(inputClassName),
          ])}
        />
        {error?.message && <div className={styles.error}>{error.message}</div>}
      </div>
    </div>
  )
}

export default Input
