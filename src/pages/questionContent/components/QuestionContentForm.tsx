import { Stack } from '@mui/material'
import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, AutocompleteInput, Button, NumberInput, ReferenceInput, SelectInput, SimpleFormIterator, TabbedForm, TextInput } from "react-admin"
import QuestionAnswersForm from './QuestionAnswersForm'
import { fromFormQuestion } from '../../../helper/converters/questionContent'
import { FormQuestionContent } from '../../../types/form'
import { allQuestionType } from '../../../helper/constants'

const QuestionContentForm = () => {
    return (
        <TabbedForm>
            <TabbedForm.Tab label="Main">
                <RichTextInput source="content" fullWidth />
                <Stack direction="row" spacing={2}>
                    <TextInput source="topic" />
                    <NumberInput source="level" />
                </Stack>
                <ArrayInput source="grammars" fullWidth>
                    <SimpleFormIterator
                        addButton={<Button label="Add new grammar" />}
                    >
                        <TextInput source="" fullWidth />
                    </SimpleFormIterator>
                </ArrayInput>
                <ReferenceInput source="exerciseId" reference="exercises">
                    <AutocompleteInput
                        label="Exercise"
                        optionText="name"
                        filterToQuery={searchText => ({ name: searchText })}
                    />
                </ReferenceInput>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Questions">
                <ArrayInput source="questions" label={false} fullWidth>
                    <SimpleFormIterator
                        fullWidth
                        getItemLabel={index => `${index + 1}. `}
                        addButton={<Button label='Add group' />}
                    >
                        <NumberInput source="level" fullWidth />
                        <SelectInput
                            source="questionType"
                            choices={allQuestionType.map(item => ({
                                id: item,
                                name: item,
                            }))}
                            fullWidth
                        />
                        <TextInput source="requirement" fullWidth multiline />
                        <QuestionAnswersForm />
                    </SimpleFormIterator>
                </ArrayInput>
            </TabbedForm.Tab>
        </TabbedForm>
    )
}

export const transform = (formData: FormQuestionContent) => {
    const { questions, ...rest } = formData
    return {
        ...rest,
        questions: questions.map(question => fromFormQuestion(question))
    }

}

export default QuestionContentForm