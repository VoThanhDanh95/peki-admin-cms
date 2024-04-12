import { SubmitHandler, useForm } from "react-hook-form"
import * as values from "./values"
import { useState } from "react"
import { createRootAdmin } from "../serverActions"
import { useRouter } from "@/navigation"
import { useToast } from "@shared/hooks/useToast"
import { useTranslations } from "next-intl"

const useCreateRootAdminForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toastSuccess, toastError } = useToast()
  const t = useTranslations("CreateRootAdminPage")

  const defaultValues = values.defaultValues()

  const form = useForm<values.FormType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
    defaultValues,
  })

  const { handleSubmit } = form

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const submit: SubmitHandler<values.FormType> = async (data) => {
    setIsSubmitting(true)
    try {
      await createRootAdmin(data)
      toastSuccess(t('createSuccessfully'))
      router.replace("/login")
    } catch (error) {
      if (error instanceof Error) {
        toastError(error.message)
      }
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

export { useCreateRootAdminForm }
