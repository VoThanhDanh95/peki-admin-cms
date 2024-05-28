import { ArrayInput, BooleanInput, Button, RadioButtonGroupInput, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin";
import { trueFalseNotGiven, yesNoNotGiven } from "../../../../helper/constants";
import { useWatch, useFormContext } from 'react-hook-form'
import { useEffect } from "react";

const MultipleChoicesQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const { setValue } = useFormContext()

    useEffect(() => {
        setValue(`questions.${index}.questionAnswers`, [])
    }, [questionType])

    if (questionType === 'True/False/Not Given') {
        return (
            <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                    <TextInput source='question' fullWidth />
                    <RadioButtonGroupInput
                        source="answer"
                        choices={trueFalseNotGiven.map(item => ({
                            id: item,
                            name: item
                        }))}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        );
    }

    if (questionType === 'Yes/No/Not Given') {
        return (
            <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                    <TextInput source='question' fullWidth />
                    <RadioButtonGroupInput
                        source="answer"
                        choices={yesNoNotGiven.map(item => ({
                            id: item,
                            name: item
                        }))}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        );
    }

    return (
        <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
            <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                <TextInput source='question' fullWidth />
                <ArrayInput label="Options" source='options'>
                    <SimpleFormIterator fullWidth inline addButton={<Button label="Add option" />}>
                        <TextInput source="option" />
                        <BooleanInput source="isAnswer" />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleFormIterator>
        </ArrayInput>
    )
}

export default MultipleChoicesQuestionAnswersForm