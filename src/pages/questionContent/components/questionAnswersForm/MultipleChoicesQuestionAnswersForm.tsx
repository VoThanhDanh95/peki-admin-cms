import { ArrayInput, BooleanInput, Button, RadioButtonGroupInput, SimpleFormIterator, TextInput, useSimpleFormIteratorItem } from "react-admin";
import { useWatch } from 'react-hook-form';
import { trueFalseGivenAnswers, yesNoNotGivenAnswers } from "../../../../helper/constants";

const MultipleChoicesQuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })

    if (questionType === 'True/False/Not Given') {
        return (
            <ArrayInput label="Questions" source={`questions.${index}.questionAnswers`}>
                <SimpleFormIterator fullWidth addButton={<Button label="Add question" />}>
                    <TextInput source='question' fullWidth />
                    <RadioButtonGroupInput
                        source="answer"
                        choices={trueFalseGivenAnswers.slice()}
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
                        choices={yesNoNotGivenAnswers.slice()}
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