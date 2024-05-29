import { Create } from "react-admin"
import QuestionContentForm, { transform } from "./components/QuestionContentForm"

const QuestionContentCreate = () => {
    return (
        <Create transform={transform} redirect="show">
            <QuestionContentForm />
        </Create>
    )
}

export default QuestionContentCreate