import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"

const TextBaseNewLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()

    return (
        <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <TextInput source="question" fullWidth />
                <TextInput source="answer" fullWidth />
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default TextBaseNewLineQuestionAnswersForm