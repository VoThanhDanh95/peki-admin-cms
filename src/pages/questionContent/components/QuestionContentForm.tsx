import { Stack } from '@mui/material'
import { ArrayInput, AutocompleteInput, Button, NumberInput, ReferenceInput, SelectInput, SimpleFormIterator, TabbedForm, TextInput } from "react-admin"
import { allQuestionType } from '../../../helper/constants'
import QuestionAnswersForm from './QuestionAnswersForm'
import CustomRichTextInput from '../../../components/CustomRichTextInput'

const QuestionContentForm = ({ mode }: {
    mode: 'create' | 'edit'
}) => {
    return (
        <TabbedForm>
            <TabbedForm.Tab label="Main">
                <CustomRichTextInput source="content" fullWidth />
                <Stack direction="row" spacing={2}>
                    <TextInput source="topic" />
                    <NumberInput source="level" />
                    <NumberInput source="order" />
                </Stack>
                <ArrayInput source="grammars" fullWidth>
                    <SimpleFormIterator
                        addButton={<Button label="Add new grammar" />}
                    >
                        <TextInput source="" fullWidth />
                    </SimpleFormIterator>
                </ArrayInput>
                {mode === 'create' && <ReferenceInput source="exerciseId" reference="exercises" >
                    <AutocompleteInput
                        label="Exercise"
                        optionText="name"
                        filterToQuery={searchText => ({ name: searchText })}
                    />
                </ReferenceInput>}
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
                        <CustomRichTextInput source="requirement" fullWidth />
                        <QuestionAnswersForm />
                    </SimpleFormIterator>
                </ArrayInput>
            </TabbedForm.Tab>
        </TabbedForm>
    )
}

export default QuestionContentForm