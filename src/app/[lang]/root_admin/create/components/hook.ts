import { SubmitHandler, useForm } from "react-hook-form"
import * as values from "./values"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dictionary } from "../../../../../../get-dictionary"

const useCreateRootAdminForm = (dictionary: Dictionary["createRootAdmin"]) => {
  const defaultValues = values.defaultValues()

  const schema = values.createRootAdminSchema(dictionary)

  const form = useForm<values.FormType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
    defaultValues,
    resolver: zodResolver(schema),
  })

  const { handleSubmit } = form

  const submit: SubmitHandler<values.FormType> = (data) => {
    console.log(data)
  }

  return {
    form,
    submit: handleSubmit(submit),
  }
}

export { useCreateRootAdminForm }
