import { Stack } from '@mui/material'
import { ArrayInput, AutocompleteInput, Button, FileField, FileInput, FormDataConsumer, NumberInput, ReferenceInput, SelectInput, SimpleFormIterator, TabbedForm, TextInput, required, useGetOne, useRecordContext } from "react-admin"
import { allQuestionType } from '../../../helper/constants'
import QuestionAnswersForm from './QuestionAnswersForm'
import CustomRichTextInput from '../../../components/CustomRichTextInput'
import { useState } from 'react'
import { FormQuestionContent } from '../../../types/forms/questionContent'

const QuestionContentForm = ({ mode }: {
    mode: 'create' | 'edit'
}) => {
    const record = useRecordContext<FormQuestionContent>()
    const [exerciseId, setExerciseId] = useState<string | undefined>(record?.exerciseId)
    const { data: exercise } = useGetOne('exercises', { id: exerciseId }, {
        enabled: exerciseId !== undefined
    })

    const fetchExercise = async (exerciseId: string) => {
        setExerciseId(exerciseId)
    }

    return (
        <TabbedForm>
            <TabbedForm.Tab label="Main">
                {mode === 'create' && <ReferenceInput
                    source="exerciseId"
                    reference="exercises"
                >
                    <AutocompleteInput
                        label="Exercise"
                        optionText="name"
                        filterToQuery={searchText => ({ name: searchText })}
                        onChange={fetchExercise}
                    />
                </ReferenceInput>}
                {
                    exercise
                        ? exercise.skill === 'reading'
                            ? <CustomRichTextInput source="content" fullWidth />
                            : <FileInput source="audio">
                                <FileField source="src" title="title" />
                            </FileInput>
                        : null
                }
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