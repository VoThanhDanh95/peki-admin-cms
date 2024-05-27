import { RichTextInput } from "ra-input-rich-text"
import { useEffect } from "react"
import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { useFormContext, useWatch } from 'react-hook-form'

const TextBasedInLineMultipleQuestionsQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers`, [])
    }, [questionType])

    return (
        <ArrayInput label={false} source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <RichTextInput source="summary" fullWidth />
                <TextInput source="answer" fullWidth />
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default TextBasedInLineMultipleQuestionsQuestionAnswersForm