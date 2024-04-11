"use client"

import Input from "@shared/components/Input"
import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"
import { useCreateRootAdminForm } from "./hook"
import Button from "@shared/components/Button"
import Icon from "@shared/components/Icon"
import { useTranslations } from "next-intl"

const styles = {
  form: Cn.c("flex flex-col space-y-6"),
}

const CreateRootAdminForm: FunctionComponent = () => {
  const t = useTranslations("CreateRootAdminPage")

  const {
    form: {
      register,
      formState: { errors },
      clearErrors,
    },
    isSubmitting,
    submit,
    showPassword,
    toggleShowPassword,
  } = useCreateRootAdminForm()

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        name="userName"
        register={register}
        required
        label={t("userName")}
        error={errors.userName}
        clearErrors={clearErrors}
        validation={{
          required: { value: true, message: t("userNameRequired") },
        }}
      />
      <Input
        name="password"
        register={register}
        required
        type={showPassword ? "text" : "password"}
        label={t("password")}
        error={errors.password}
        clearErrors={clearErrors}
        validation={{
          required: { value: true, message: t("passwordRequired") },
        }}
        TrailingIcon={({ className }) =>
          showPassword ? (
            <Icon
              name="closeEye"
              className={Cn.getIfExist(className)}
              onClick={toggleShowPassword}
            />
          ) : (
            <Icon
              name="eye"
              className={Cn.getIfExist(className)}
              onClick={toggleShowPassword}
            />
          )
        }
      />
      <Button disabled={isSubmitting} isLoading={isSubmitting}>
        {t("create")}
      </Button>
    </form>
  )
}

export default CreateRootAdminForm