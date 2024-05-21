import { FunctionField, RichTextField, SimpleShowLayout } from "react-admin"
import { OptionsSelectionInLine } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"

const OptionsSelectionInLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <RichTextField label="summary" source="questionAnswers.summary" />
            <FunctionField
                label="answer options"
                render={(r: Question) => (r.questionAnswers as OptionsSelectionInLine).answerOptions.map((option, index) => <div key={index}>{`${index + 1}.${option}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default OptionsSelectionInLineQuestionAnswers