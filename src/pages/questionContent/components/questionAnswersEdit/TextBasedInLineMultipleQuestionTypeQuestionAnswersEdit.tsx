import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, SimpleFormIterator, TextInput, useRecordContext } from "react-admin"

const TextBasedInLineMultipleQuestionTypeQuestionAnswersEdit = () => {
    const { getSource } = useRecordContext<{ getSource: (source: string) => string }>()

    return (
        <>
            <ArrayInput label="summary" source={getSource('questionAnswers.summary')}>
                <SimpleFormIterator fullWidth>
                    <RichTextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="answers" source={getSource('questionAnswers.answers')}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
}

export default TextBasedInLineMultipleQuestionTypeQuestionAnswersEdit