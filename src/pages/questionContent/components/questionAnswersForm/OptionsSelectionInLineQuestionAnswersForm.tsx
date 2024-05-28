import { RichTextInput } from "ra-input-rich-text"
import { useEffect } from "react"
import { ArrayInput, Button, SelectInput, SimpleFormIterator, TextInput, useRecordContext, useSimpleFormIteratorItem } from "react-admin"
import { useFormContext, useWatch } from 'react-hook-form'

const OptionsSelectionInLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()
    const options: string[] | undefined = useWatch({ name: `questions.${index}.questionAnswers.answerOptions` })

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers.summary`, '')
        setValue(`questions.${index}.questionAnswers.answerOptions`, [])
        setValue(`questions.${index}.questionAnswers.answers`, [])
    }, [questionType])

    return (
        <>
            <RichTextInput label="Summary" source={`questions.${index}.questionAnswers.summary`} />
            <ArrayInput label="Options" source={`questions.${index}.questionAnswers.answerOptions`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add option" />}>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput label="Answers" source={`questions.${index}.questionAnswers.answers`}>
                <SimpleFormIterator fullWidth>
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