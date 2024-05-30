import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"

const TextBasedInLineMultipleQuestionsQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()

    return (
        <ArrayInput label={false} source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <RichTextInput source="summary" fullWidth />
                <TextInput source="answer" fullWidth />
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default TextBasedInLineMultipleQuestionsQuestionAnswersForm