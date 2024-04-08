import { SubmitHandler, useForm } from "react-hook-form"
import * as values from "./values"
import { useState } from "react"
import { createRootAdmin } from "../createRootAdmin"
import { useRouter } from "next/navigation"

const useCreateRootAdminForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const defaultValues = values.defaultValues()

  const router = useRouter()

  const form = useForm<values.FormType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
    defaultValues,
  })

  const { handleSubmit } = form

  const submit: SubmitHandler<values.FormType> = async (data) => {
    setIsSubmitting(true)
    try {
      await createRootAdmin(data)
      router.replace('/login')
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    submit: handleSubmit(submit),
  }
}

export { useCreateRootAdminForm }
