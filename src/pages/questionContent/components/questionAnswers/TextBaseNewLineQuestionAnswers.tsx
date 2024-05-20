import { FunctionField, SimpleShowLayout } from "react-admin"
import { TextBaseNewLine } from "../../../../types/questionAnswer"

const TextBaseNewLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="question"
                render={(r: TextBaseNewLine) => r.questions.map((question, index) => <div key={index}>{`${index + 1}.${question}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: TextBaseNewLine) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBaseNewLineQuestionAnswers