export const defaultValues = (keyword?: string | null) => ({
  searchKeyword: keyword || "",
})

export type FormType = ReturnType<typeof defaultValues>
