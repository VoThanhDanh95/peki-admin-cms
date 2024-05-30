import { Create } from "react-admin"
import QuestionContentForm from "./components/QuestionContentForm"
import { fromFormQuestionContent } from "../../helper/converters/questionContent"
import { FormQuestionContent } from "../../types/forms/questionContent"

const QuestionContentCreate = () => {
    return (
        <Create transform={(formData: FormQuestionContent) => fromFormQuestionContent(formData, 'create')} redirect="show">
            <QuestionContentForm mode="create" />
        </Create>
    )
}

export default QuestionContentCreate