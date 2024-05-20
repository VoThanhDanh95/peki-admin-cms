import { FunctionField, SimpleShowLayout } from "react-admin"
import { OptionsSelectionNewLine } from "../../../../types/questionAnswer"

const OptionsSelectionNewLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="questions"
                render={(r: OptionsSelectionNewLine) => r.questions.map((question, index) => <div key={index}>{`${index + 1}.${question}`}</div>)}
            />
            <FunctionField
                label="answer options"
                render={(r: OptionsSelectionNewLine) => r.answerOptions.map((option, index) => <div key={index}>{`${index + 1}.${option}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: OptionsSelectionNewLine) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default OptionsSelectionNewLineQuestionAnswers