import { ArrayInput, SimpleFormIterator, TextInput, useRecordContext, useSimpleFormIteratorItem } from "react-admin";

const MultipleChoicesQuestionAnswersCreate = () => {
    console.log("RENDER MultipleChoicesQuestionAnswersCreate");
    const { index } = useSimpleFormIteratorItem()
    //const { getSource } = useRecordContext<{ getSource: (source: string) => string }>()
    return (
        <>
            <ArrayInput label="questions" source={`questionAnswers.${index}.questions`}>
                <SimpleFormIterator fullWidth>
                    <TextInput source='question' fullWidth />
                    <ArrayInput label="options" source="answerOptions">
                        <SimpleFormIterator inline>
                            <TextInput source="" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="answers" source={`questionAnswers.${index}answers`}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
}

export default MultipleChoicesQuestionAnswersCreate