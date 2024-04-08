export const defaultValues = () => ({
  userName: "",
  password: "",
})

export type FormType = ReturnType<typeof defaultValues>
