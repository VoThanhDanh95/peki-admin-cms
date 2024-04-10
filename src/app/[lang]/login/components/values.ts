import { z } from "zod"

export const defaultValues = () => ({
  userName: "",
  password: "",
})

export type FormType = ReturnType<typeof defaultValues>
