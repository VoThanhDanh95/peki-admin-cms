import { FunctionField, SimpleShowLayout } from "react-admin"
import { TextBaseInLineMultipleQuestion } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"

const TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="summary"
                render={(r: Question) => (r.questionAnswers as TextBaseInLineMultipleQuestion).summary.map((summary, index) => <div key={index}>{`${index + 1}.${summary}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail