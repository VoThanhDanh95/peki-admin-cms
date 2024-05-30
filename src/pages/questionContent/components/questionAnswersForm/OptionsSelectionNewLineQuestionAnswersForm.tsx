import { ArrayInput, Button, SelectInput, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { useWatch } from 'react-hook-form'

const OptionsSelectionNewLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const options: string[] | undefined = useWatch({ name: `questions.${index}.questionAnswers.options` })

    return (
        <>
            <ArrayInput label="Options" source={`questions.${index}.questionAnswers.options`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add option" />}>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="Questions" source={`questions.${index}.questionAnswers.questions`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                    <TextInput source="question" fullWidth />
                    <SelectInput
                        source="answer"
                        choices={options?.map(option => ({
                            id: option,
                            name: option,
                        }))}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
}

export default OptionsSelectionNewLineQuestionAnswersForm