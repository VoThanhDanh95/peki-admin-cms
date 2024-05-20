import { FunctionField, RichTextField, SimpleShowLayout } from "react-admin"
import { OptionsSelectionInLine } from "../../../../types/questionAnswer"

const OptionsSelectionInLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <RichTextField source="summary" />
            <FunctionField
                label="answer options"
                render={(r: OptionsSelectionInLine) => r.answerOptions.map((option, index) => <div key={index}>{`${index + 1}.${option}`}</div>)}
            />
            <FunctionField
                label="answer"
                render={(r: OptionsSelectionInLine) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default OptionsSelectionInLineQuestionAnswers