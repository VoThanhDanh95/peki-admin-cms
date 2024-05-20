import { FunctionField, SimpleShowLayout } from "react-admin";
import { MultipleChoices } from "../../../../types/questionAnswer";

const MultipleChoicesQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="question"
                render={(r: MultipleChoices) => r.questions.map(({ question, answerOptions }, index) => {
                    return <div key={index}>
                        <p>{`${index + 1}.${question}`}</p>
                        <label>Options</label>
                        {answerOptions.map((value, optionIndex) => {
                            return <div key={value} style={{ marginLeft: 10 }}>{`${optionIndex + 1}.${value}`}</div>
                        })}
                    </div>
                })}
            />
            <FunctionField
                label="answer"
                render={(r: MultipleChoices) => r.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    );
}

export default MultipleChoicesQuestionAnswers