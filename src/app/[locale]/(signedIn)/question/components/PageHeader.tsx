"use client"

import Button from "@shared/components/Button"
import Icon from "@shared/components/Icon"
import SearchInput from "@shared/components/Search/SearchInput"
import { Cn } from "@shared/helpers/cn"
import PageHeader from "@shared/layouts/PageHeader"
import { useTranslations } from "next-intl"

const QuestionPageHeader = () => {
  const t = useTranslations("QuestionPage")

  return (
    <PageHeader
      actions={[
        <Button
          key="addButton"
          LeadingIcon={({ className }) => (
            <Icon name="plus" className={Cn.getIfExist(className)} />
          )}
        >
          {t("addNewQuestion")}
        </Button>,
      ]}
    >
      <SearchInput
        placeholder={t("searchPlaceholder")}
        onSearchAction={() => {}}
      />
    </PageHeader>
  )
}

export default QuestionPageHeader
