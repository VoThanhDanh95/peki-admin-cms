import DefaultLayout from "@shared/layouts/DefaultLayout"
import { getMessages } from "next-intl/server"
import { FunctionComponent } from "react"
import { NextIntlClientProvider } from "next-intl"
import QuestionPageHeader from "./components/PageHeader"

const QuestionPage: FunctionComponent = async () => {
  const messages = await getMessages()

  return (
    <DefaultLayout>
      <NextIntlClientProvider
        messages={{ QuestionPage: messages["QuestionPage"] }}
      >
        <QuestionPageHeader />
      </NextIntlClientProvider>
    </DefaultLayout>
  )
}

export default QuestionPage
