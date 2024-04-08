import { Cn } from "@shared/helpers/cn"
import {
  ButtonHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
  useMemo,
} from "react"
import Loader, { Variant as LoaderVariant, Size as LoaderSize } from "./Loader"

const styles = {
  base: Cn.c("group"),
  button: (size: Size, variant: Variant, isDisabled: boolean) => {
    let sizeStyle: string
    switch (size) {
      case "sm":
        sizeStyle = Cn.c(
          "py-2 px-3 h-8 space-x-1 font-paragraph-small-button-medium",
        )
        break
      case "md":
        sizeStyle = Cn.c(
          "py-3 px-4 h-10 space-x-1 font-paragraph-small-button-medium",
        )
        break
      case "lg":
        sizeStyle = Cn.c(
          "py-4 px-6 h-12 space-x-2 font-paragraph-base-button-medium",
        )
        break
    }

    let variantStyle: string
    switch (variant) {
      case "primaryFilled":
        variantStyle = isDisabled
          ? Cn.c("bg-actions-primary-disabled text-disabled")
          : Cn.join([
              Cn.c("bg-actions-primary-default text-on-primary"),
              Cn.c("group-hover:bg-actions-primary-hovered"),
            ])
        break
      case "primaryOutline":
        variantStyle = isDisabled
          ? Cn.c("bg-actions-primary-disabled text-disabled")
          : Cn.join([
              Cn.c(
                "bg-surface-default text-primary-default border border-primary-default",
              ),
              Cn.c("group-hover:bg-surface-primary-subdued"),
            ])
        break
      case "primaryPlain":
        variantStyle = isDisabled
          ? Cn.c("text-disabled")
          : Cn.join([
              Cn.c("text-primary-default"),
              Cn.c("group-hover:underline group-hover:text-primary-emphasized"),
            ])
        break
      case "primaryPlainBg":
        variantStyle = isDisabled
          ? Cn.c("bg-default text-disabled")
          : Cn.join([
              Cn.c("bg-default text-primary-default"),
              Cn.c(
                "group-hover:text-primary-default group-hover:bg-surface-hovered-emphasized",
              ),
            ])
        break
      case "secondary":
        variantStyle = isDisabled
          ? Cn.c("bg-actions-primary-disabled text-disabled")
          : Cn.join([
              Cn.c(
                "bg-surface-default text-emphasized border border-emphasized",
              ),
              Cn.c("group-hover:bg-surface-hovered-default"),
            ])
        break
      case "destructiveFilled":
        variantStyle = isDisabled
          ? Cn.c("bg-actions-critical-disabled text-disabled")
          : Cn.join([
              Cn.c("bg-actions-critical-default text-on-primary"),
              Cn.c("group-hover:bg-actions-critical-hovered"),
            ])
        break
      case "destructiveOutline":
        variantStyle = isDisabled
          ? Cn.c("bg-actions-primary-disabled text-disabled")
          : Cn.join([
              Cn.c(
                "bg-surface-default text-critical-default border border-critical-default",
              ),
              Cn.c("group-hover:bg-surface-critical-subdued"),
            ])
        break
      case "destructivePlain":
        variantStyle = isDisabled
          ? Cn.c("text-disabled")
          : Cn.join([
              Cn.c("text-critical-default"),
              Cn.c(
                "group-hover:underline group-hover:text-critical-emphasized",
              ),
            ])
        break
      case "ghost":
        variantStyle = isDisabled
          ? Cn.c("text-disabled")
          : Cn.join([
              Cn.c("text-emphasized"),
              Cn.c(
                "group-hover:rounded group-hover:bg-surface-hovered-emphasized",
              ),
            ])
        break
    }

    return Cn.join([
      Cn.c(
        "flex flex-row items-center justify-center content-center rounded-lg",
      ),
      sizeStyle,
      variantStyle,
    ])
  },
}

const buttonVariants = [
  "primaryFilled",
  "primaryOutline",
  "primaryPlain",
  "primaryPlainBg",
  "secondary",
  "destructiveFilled",
  "destructiveOutline",
  "destructivePlain",
  "ghost",
] as const

const buttonSizes = ["sm", "md", "lg"] as const

type Variant = (typeof buttonVariants)[number]
type Size = (typeof buttonSizes)[number]

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isFull?: boolean
  isLoading?: boolean
  size?: Size
  variant?: Variant
}

const Button: FunctionComponent<Props> = ({
  className,
  children,
  isFull = false,
  isLoading,
  size = "md",
  variant = "primaryFilled",
  disabled = false,
  ...rest
}) => {
  const loaderVariant: LoaderVariant = useMemo(() => {
    switch (variant) {
      case "primaryFilled":
      case "destructiveFilled":
        return "onPrimary"
      case "primaryOutline":
      case "primaryPlain": 
      case "primaryPlainBg":
        return "primaryDefault"
      case "secondary":
      case "ghost":
        return "emphasized"
      case "destructiveOutline":
      case "destructivePlain":
        return "criticalDefault"
    }
  }, [variant])

  const loaderSize: LoaderSize = useMemo(() => {
    switch (size) {
      case "sm":
      case "md":
        return "sm"
      case "lg":
        return "lg"
    }
  }, [size])
  return (
    <button
      className={Cn.join([styles.base, Cn.ifTrue(isFull, "w-full")])}
      disabled={disabled}
      {...rest}
    >
      <div
        className={Cn.join([
          styles.button(size, variant, disabled),
          Cn.getIfExist(className),
        ])}
      >
        {isLoading ? (
          <Loader variant={loaderVariant} size={loaderSize} />
        ) : (
          children
        )}
      </div>
    </button>
  )
}

export default Button
