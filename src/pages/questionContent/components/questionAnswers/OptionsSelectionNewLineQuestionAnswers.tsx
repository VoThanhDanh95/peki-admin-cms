import { FunctionField, SimpleShowLayout } from "react-admin"
import { OptionsSelectionNewLine } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"

const OptionsSelectionNewLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="questions"
                render={(r: Question) => (r.questionAnswers as OptionsSelectionNewLine).questions.map((question, index) => <div key={index}>{`${index + 1}.${question}`}</div>)}
            />
            <FunctionField
                label="answer options"
                render={(r: Question) => (r.questionAnswers as OptionsSelectionNewLine).answerOptions.map((option, index) => <div key={index}>{`${index + 1}.${option}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default OptionsSelectionNewLineQuestionAnswers