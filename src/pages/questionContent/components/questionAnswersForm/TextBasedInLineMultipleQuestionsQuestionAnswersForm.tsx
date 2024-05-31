import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import CustomRichTextInput from "../../../../components/CustomRichTextInput"

const TextBasedInLineMultipleQuestionsQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()

    return (
        <ArrayInput label={false} source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <CustomRichTextInput source="summary" fullWidth />
                <TextInput source="answer" fullWidth />
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default TextBasedInLineMultipleQuestionsQuestionAnswersForm