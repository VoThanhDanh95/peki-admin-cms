import { z } from "zod"
import { Dictionary } from "../../../../../../get-dictionary"

export const defaultValues = () => ({
  userName: "",
  password: "",
})

export const createRootAdminSchema = (dictionary: Dictionary["createRootAdmin"]) =>
  z.object({
    userName: z.string().min(1, { message: dictionary.userNameRequired }),
    password: z.string().min(1, { message: dictionary.passwordRequired }),
  })

export type FormType = z.infer<ReturnType<typeof createRootAdminSchema>>
