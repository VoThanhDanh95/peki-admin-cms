import { SubmitHandler, useForm } from "react-hook-form"
import * as values from "./values"
import { useState } from "react"
import { useToast } from "@shared/hooks/useToast"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useRouter } from "@/navigation"

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toastError } = useToast()
  const t = useTranslations("LoginPage")
  const router = useRouter()

  const defaultValues = values.defaultValues()

  const form = useForm<values.FormType>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldFocusError: false,
    defaultValues,
  })

  const { handleSubmit, setError } = form

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const submit: SubmitHandler<values.FormType> = async (data) => {
    setIsSubmitting(true)

    try {
      const response = await signIn("credentials", {
        redirect: Boolean(false),
        ...data,
        callbackUrl: "/dashboard",
      })

      if (!response?.ok && response?.error === "INVALID_USER") {
        setError("userName", {
          message: t("unexistingUsername"),
        })
      }

      if (!response?.ok && response?.error === "INVALID_PASSWORD") {
        setError("password", {
          message: t("invalidPassword"),
        })
      }

      if (response?.ok) {
        router.replace(response?.url || "/")
      }
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

export { useLoginForm }
