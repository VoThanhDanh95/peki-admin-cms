import { ArrayInput, SimpleFormIterator, TextInput, useRecordContext } from "react-admin";

const MultipleChoicesQuestionAnswersCreate = () => {
    const { getSource } = useRecordContext<{ getSource: (source: string) => string }>()

    return (
        <>
            <ArrayInput label="questions" source={getSource('questionAnswers.questions')}>
                <SimpleFormIterator fullWidth>
                    <TextInput source='question' fullWidth />
                    <ArrayInput label="options" source="answerOptions">
                        <SimpleFormIterator inline>
                            <TextInput source="" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="answers" source={getSource('questionAnswers.answers')}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
}

export default MultipleChoicesQuestionAnswersCreate