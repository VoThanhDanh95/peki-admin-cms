"use client"

import { FieldValues } from "react-hook-form"
import Input, { Props as InputProps } from "../Input"
import { Cn } from "@shared/helpers/cn"
import { useSearch } from "./hook"
import Icon from "../Icon"

interface Props<T extends FieldValues>
  extends Omit<
    InputProps<T>,
    "name" | "register" | "error" | "clearErrors" | "validation"
  > {
  keyword?: string | null
  onSearchAction: (keyword: string) => void
  className?: string
}

const styles = {
  searchForm: Cn.c("w-72"),
}

const SearchInput = <T extends FieldValues>({
  keyword,
  onSearchAction,
  className,
  ...rest
}: Props<T>) => {
  const {
    form: {
      register,
      formState: { errors },
      clearErrors,
    },
    onSubmit,
    clearSearch,
  } = useSearch(onSearchAction, keyword)

  return (
    <form
      onSubmit={onSubmit}
      className={Cn.join([styles.searchForm, Cn.getIfExist(className)])}
    >
      <Input
        name="searchKeyword"
        register={register}
        error={errors.searchKeyword}
        clearErrors={clearErrors}
        LeadingIcon={({ className }) => (
          <Icon name="search" className={Cn.getIfExist(className)} />
        )}
        TrailingIcon={({ className }) => (
          <Icon name="close" className={Cn.getIfExist(className)} onClick={clearSearch} />
        )}
        {...rest}
      />
    </form>
  )
}

export default SearchInput
