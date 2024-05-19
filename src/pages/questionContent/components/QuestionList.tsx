import { useListContext } from "react-admin";
import { Question } from "../../../types/question";

const QuestionList = () => {
    const { data } = useListContext<Question>();

    return data.map(question => {
        return (
            <div>
                <div>{question.questionType}</div>
            </div>
        )
    });
}

export default QuestionList