import { z } from "zod"
import { Dictionary } from "../../../../../get-dictionary"

export const defaultValues = () => ({
  userName: "",
  password: "",
})

export const signInSchema = (dictionary: Dictionary["loginPage"]) => z.object({
  userName: z.string().min(1, { message: dictionary.userNameRequired }),
  password: z.string().min(1, { message: dictionary.passwordRequired }),
})

export type FormType = z.infer<ReturnType<typeof signInSchema>>
