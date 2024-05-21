import { FunctionField, RichTextField, SimpleShowLayout } from "react-admin"
import { Question } from "../../../../types/question"

const TextBaseInLineQuestionAnswersDetail = () => {
    return (
        <SimpleShowLayout>
            <RichTextField label="summary" source="questionAnswers.summary" />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBaseInLineQuestionAnswersDetail