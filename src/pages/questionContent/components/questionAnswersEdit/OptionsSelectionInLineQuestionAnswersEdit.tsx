import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, SimpleFormIterator, TextInput, useRecordContext } from "react-admin"

const OptionsSelectionInLineQuestionAnswersEdit = () => {
    const { getSource } = useRecordContext<{ getSource: (source: string) => string }>()

    return (
        <>
            <RichTextInput label="summary" source={getSource('questionAnswers.summary')} />
            <ArrayInput label="options" source={getSource('questionAnswers.answerOptions')}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" fullWidth />
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

export default OptionsSelectionInLineQuestionAnswersEdit