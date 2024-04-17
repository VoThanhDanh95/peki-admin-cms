import { SubmitHandler, useForm } from "react-hook-form"
import * as value from "./value"
import { useEffect } from "react"

const useSearch = (
  onSearchAction: (keyword: string) => void,
  keyword?: string | null,
) => {
  const defaultValues = value.defaultValues(keyword)

  const form = useForm<value.FormType>({
    defaultValues: defaultValues,
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
  })

  const { reset, handleSubmit } = form

  const submitSearch: SubmitHandler<value.FormType> = async (data) => {
    onSearchAction(data.searchKeyword)
  }

  const clearSearch = () => {
    reset(value.defaultValues(""))
    onSearchAction("")
  }

  useEffect(() => {
    reset(value.defaultValues(keyword))
  }, [keyword])

  return {
    form,
    clearSearch,
    onSubmit: handleSubmit(submitSearch),
  }
}

export { useSearch }
