import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, Button, SelectInput, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { useWatch } from 'react-hook-form'

const OptionsSelectionInLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const options: string[] | undefined = useWatch({ name: `questions.${index}.questionAnswers.answerOptions` })

    return (
        <>
            <RichTextInput label="Summary" source={`questions.${index}.questionAnswers.summary`} />
            <ArrayInput label="Options" source={`questions.${index}.questionAnswers.answerOptions`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add option" />}>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="Answers" source={`questions.${index}.questionAnswers.answers`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add answer" />}>
                    <SelectInput
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

export default OptionsSelectionInLineQuestionAnswersForm