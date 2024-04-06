import { twMerge } from "tailwind-merge"

const c = (className: string) => twMerge(className)

const join = (classNames: string[]) => twMerge(classNames)

const getIfExist = (className: string | undefined | null) => className || ""

const ifTrue = (condition: boolean, className: string) =>
  condition ? className : ""

const ifFalse = (condition: boolean, className: string) =>
  !condition ? className : ""

const Cn = {
  c,
  join,
  getIfExist,
  ifFalse,
  ifTrue,
}

export { Cn }
