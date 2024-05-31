import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import CustomRichTextInput from "../../../../components/CustomRichTextInput"

const TextBaseInLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()

    return (
        <>
            <CustomRichTextInput label="Summary" source={`questions.${index}.questionAnswers.summary`} fullWidth />
            <ArrayInput label="Answers" source={`questions.${index}.questionAnswers.answers`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add answer" />}>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
}

export default TextBaseInLineQuestionAnswersForm