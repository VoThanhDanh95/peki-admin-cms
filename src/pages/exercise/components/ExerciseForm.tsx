import { Stack } from '@mui/material';
import { BooleanInput, DateInput, FormDataConsumer, NumberInput, SelectInput, SimpleForm, TextInput, useTranslate } from "react-admin";

const modes = ["practice", "test", "custom"] as const
const statuses = ["private", "public"] as const
const skills = ["reading", "listening", "writing", "speaking"] as const

const ExerciseForm = () => {
    const t = useTranslate()

    return (
        <SimpleForm>
            <TextInput source="name" fullWidth />
            <TextInput source="intro" fullWidth />
            <TextInput source="category" fullWidth />
            <Stack direction="row" spacing={2}>
                <NumberInput source="level" />
                <NumberInput label="Duration (mins)" source="duration" />
                <SelectInput
                    source="skill"
                    choices={skills.map(item => ({
                        id: item,
                        name: item,
                    }))}
                />
                <SelectInput
                    source="mode"
                    choices={modes.map(item => ({
                        id: item,
                        name: item,
                    }))}
                />
                <SelectInput
                    source="status"
                    choices={statuses.map(item => ({
                        id: item,
                        name: item,
                    }))}
                />
            </Stack>
            <FormDataConsumer<{ isAlwaysAvailable: boolean }>>
                {({ formData }) => (
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                        <BooleanInput source="isAlwaysAvailable" label={t(`custom.exerciseAvailability.alwaysAvailable`)} />
                        <DateInput
                            source="startAt"
                            disabled={formData.isAlwaysAvailable}
                        />
                        <DateInput
                            source="endAt"
                            disabled={formData.isAlwaysAvailable}
                        />
                    </Stack>
                )}
            </FormDataConsumer>
        </SimpleForm>
    )
}

export default ExerciseForm