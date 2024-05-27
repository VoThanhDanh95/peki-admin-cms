import { useEffect } from "react"
import { ArrayInput, Button, SelectInput, SimpleFormIterator, TextInput, useRecordContext, useSimpleFormIteratorItem } from "react-admin"
import { useWatch, useFormContext } from 'react-hook-form'

const OptionsSelectionNewLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()
    const options: string[] | undefined = useWatch({ name: `questions.${index}.questionAnswers.options` })

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers.options`, [])
        setValue(`questions.${index}.questionAnswers.questions`, [])
    }, [questionType])

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