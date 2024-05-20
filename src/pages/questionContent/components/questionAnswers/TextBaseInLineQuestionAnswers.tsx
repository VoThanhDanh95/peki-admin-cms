import { FunctionField, RichTextField, SimpleShowLayout } from "react-admin"
import { TextBaseInLine } from "../../../../types/questionAnswer"

const TextBaseInLineQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <RichTextField source="summary" />
            <FunctionField
                label="answer"
                render={(r: TextBaseInLine) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    )
}

export default TextBaseInLineQuestionAnswers