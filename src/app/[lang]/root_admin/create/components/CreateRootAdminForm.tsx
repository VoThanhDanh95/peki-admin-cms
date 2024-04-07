"use client"

import Input from "@shared/components/Input"
import { Cn } from "@shared/helpers/cn"
import { FunctionComponent } from "react"
import { Dictionary } from "../../../../../../get-dictionary"
import { useCreateRootAdminForm } from "./hook"
import Button from "@shared/components/Button"

const styles = {
  form: Cn.c("flex flex-col space-y-6"),
}

interface Props {
  dictionary: Dictionary["createRootAdmin"]
}

const CreateRootAdminForm: FunctionComponent<Props> = ({ dictionary }) => {
  const {
    form: {
      register,
      formState: { errors },
      clearErrors,
    },
    submit,
  } = useCreateRootAdminForm(dictionary)

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        name="userName"
        register={register}
        required
        label={dictionary.userName}
        error={errors.userName}
        clearErrors={clearErrors}
      />
      <Input
        name="password"
        register={register}
        required
        label={dictionary.password}
        error={errors.password}
        clearErrors={clearErrors}
      />
      <Button>
        {dictionary.create}
      </Button>
    </form>
  )
}

export default CreateRootAdminForm
