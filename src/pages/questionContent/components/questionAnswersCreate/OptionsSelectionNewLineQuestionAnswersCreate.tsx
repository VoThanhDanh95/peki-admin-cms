import { ArrayInput, SimpleFormIterator, TextInput, useRecordContext } from "react-admin"

const OptionsSelectionNewLineQuestionAnswersCreate = () => {
    const { getSource } = useRecordContext<{ getSource: (source: string) => string }>()

    return (
        <>
            <ArrayInput label="questions" source={getSource('questionAnswers.questions')}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="answer options" source={getSource('questionAnswers.answerOptions')}>
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

export default OptionsSelectionNewLineQuestionAnswersCreate