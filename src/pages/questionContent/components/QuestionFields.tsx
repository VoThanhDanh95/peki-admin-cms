import { NumberField, SimpleShowLayout, TextField, useRecordContext } from "react-admin";
import { Question } from "../../../types/question";
import QuestionAnswersDetail from "./QuestionAnswersDetail";

const QuestionFields = () => {
    const record = useRecordContext<Question>()

    return (
        <SimpleShowLayout sx={{ border: 1, marginBottom: 1, borderRadius: 5, borderColor: 'gray' }}>
            <TextField source="questionType" />
            <NumberField source="level" />
            <TextField source="requirement" />
            <TextField source="id" />
            <QuestionAnswersDetail />
        </SimpleShowLayout>
    )
}

export default QuestionFields