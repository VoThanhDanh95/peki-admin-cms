import { RichTextInput } from "ra-input-rich-text"
import { useEffect } from "react"
import { ArrayInput, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { useFormContext, useWatch } from 'react-hook-form'

const TextBaseInLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers.summary`, '')
        setValue(`questions.${index}.questionAnswers.answers`, [])
    }, [questionType])

    return (
        <>
            <RichTextInput label="summary" source={`questions.${index}.questionAnswers.summary`} fullWidth />
            <ArrayInput label="answers" source={`questions.${index}.questionAnswers.answers`}>
                <SimpleFormIterator fullWidth>
                    <TextInput source="" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
}

export default TextBaseInLineQuestionAnswersForm