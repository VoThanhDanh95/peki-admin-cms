import { FunctionField, SimpleShowLayout } from "react-admin"
import { TextBaseInLineMultipleQuestion } from "../../../../types/questionAnswer"

const TextBasedInLineMultipleQuestionTypeQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="summary"
                render={(r: TextBaseInLineMultipleQuestion) => r.summary.map((summary, index) => <div key={index}>{`${index + 1}.${summary}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: TextBaseInLineMultipleQuestion) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBasedInLineMultipleQuestionTypeQuestionAnswers