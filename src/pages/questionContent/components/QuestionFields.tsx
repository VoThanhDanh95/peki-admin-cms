import { NumberField, SimpleShowLayout, TextField } from "react-admin";
import QuestionAnswersDetail from "./QuestionAnswersDetail";

const QuestionFields = () => {
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