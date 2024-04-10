"use client"

import Input from "@shared/components/Input"
import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"
import { Dictionary } from "../../../../../get-dictionary"
import { useLoginForm } from "./hook"
import Button from "@shared/components/Button"
import Icon from "@shared/components/Icon"

const styles = {
  form: Cn.c("flex flex-col space-y-6"),
}

interface Props {
  dictionary: Dictionary["loginPage"]
}

const LoginForm: FunctionComponent<Props> = ({ dictionary }) => {
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
  } = useLoginForm()

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        name="userName"
        register={register}
        required
        label={dictionary.userName}
        error={errors.userName}
        clearErrors={clearErrors}
        validation={{
          required: { value: true, message: dictionary.userNameRequired },
        }}
      />
      <Input
        name="password"
        register={register}
        required
        type={showPassword ? "text" : "password"}
        label={dictionary.password}
        error={errors.password}
        clearErrors={clearErrors}
        validation={{
          required: { value: true, message: dictionary.passwordRequired },
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
      <Button disabled={isSubmitting} isLoading={isSubmitting}>{dictionary.login}</Button>
    </form>
  )
}

export default LoginForm
