import { FunctionField, RichTextField, SimpleShowLayout } from "react-admin"
import { OptionsSelectionInLineQuestionAnswer } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"

const OptionsSelectionInLineQuestionAnswersDetail = () => {
    return (
        <SimpleShowLayout>
            <RichTextField label="summary" source="questionAnswers.summary" />
            <FunctionField
                label="answer options"
                render={(r: Question) => (r.questionAnswers as OptionsSelectionInLineQuestionAnswer).answerOptions.map((option, index) => <div key={index}>{`${index + 1}.${option}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default OptionsSelectionInLineQuestionAnswersDetail