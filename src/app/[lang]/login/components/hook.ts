import { SubmitHandler, useForm } from "react-hook-form"
import * as values from "./values"
import { useState } from "react"
import { login } from "../login"
import { useRouter } from "next/navigation"

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const defaultValues = values.defaultValues()

  const form = useForm<values.FormType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
    defaultValues,
  })

  const router = useRouter()

  const { handleSubmit } = form

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const submit: SubmitHandler<values.FormType> = async (data) => {
    setIsSubmitting(true)
    try {
      await login(data)
      router.replace("/dashboard")
    } catch (error) {
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    showPassword,
    toggleShowPassword,
    submit: handleSubmit(submit),
  }
}

export { useLoginForm }
