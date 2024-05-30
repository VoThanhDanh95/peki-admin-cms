import { Edit, RecordContextProvider, WithRecord } from "react-admin"
import { fromFormQuestionContent, toFormQuestionContent } from "../../helper/converters/questionContent"
import QuestionContentForm from "./components/QuestionContentForm"
import { FormQuestionContent } from "../../types/forms/questionContent"

const QuestionContentEdit = () => {
    return (
        <Edit transform={(formData: FormQuestionContent) => fromFormQuestionContent(formData, 'edit')} redirect="show">
            <WithRecord render={(questionContent) => {
                return (
                    <RecordContextProvider value={toFormQuestionContent(questionContent)}>
                        <QuestionContentForm mode="edit" />
                    </RecordContextProvider>
                )
            }} />
        </Edit>
    )
}

export default QuestionContentEdit