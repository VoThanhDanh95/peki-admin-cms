import { useEffect } from "react"
import { ArrayInput, Button, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { useFormContext, useWatch } from 'react-hook-form'

const TextBaseNewLineQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers`, [])
    }, [questionType])

    return (
        <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <TextInput source="question" fullWidth />
                <TextInput source="answer" fullWidth />
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default TextBaseNewLineQuestionAnswersForm