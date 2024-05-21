import { FunctionField, SimpleShowLayout } from "react-admin";
import { MultipleChoices } from "../../../../types/questionAnswer";
import { Question } from "../../../../types/question";

const MultipleChoicesQuestionAnswers = () => {
    return (
        <SimpleShowLayout>
            <FunctionField
                label="question"
                render={(r: Question) => (r.questionAnswers as MultipleChoices).questions.map(({ question, answerOptions }, index) => {
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
                render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}.${answer}`}</div>)}
            />
        </SimpleShowLayout>
    );
}

export default MultipleChoicesQuestionAnswers