import { FunctionField, SimpleShowLayout } from "react-admin"
import { TextBaseNewLine } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"

const TextBaseNewLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="question"
                render={(r: Question) => (r.questionAnswers as TextBaseNewLine).questions.map((question, index) => <div key={index}>{`${index + 1}.${question}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBaseNewLineQuestionAnswers