import { Stack } from '@mui/material';
import { format } from "date-fns";
import { parse } from "date-fns/parse";
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

export const encodeData = ({
    isAlwaysAvailable,
    startAt,
    endAt,
}: {
    isAlwaysAvailable: boolean,
    startAt?: string,
    endAt?: string
}) => {
    if (isAlwaysAvailable) {
        return {
            startAt: -1,
            endAt: -1
        }
    }

    return {
        startAt: startAt ? parse(startAt, 'yyyy-MM-dd', new Date()).getTime() : -1,
        endAt: endAt ? parse(endAt, 'yyyy-MM-dd', new Date()).getTime() : -1
    }
}

export const decodeData = ({
    startAt,
    endAt,
    duration
}: {
    startAt: number
    endAt: number
    duration: number
}) => {


    if (startAt === -1 && endAt === -1) {
        return {
            isAlwaysAvailable: true,
            startAt: undefined,
            endAt: undefined,
            duration: duration / 60
        }
    }

    if (startAt === -1) {
        return {
            isAlwaysAvailable: false,
            startAt: undefined,
            endAt: format(new Date(endAt), 'yyyy-MM-dd'),
            duration: duration / 60
        }
    }

    if (endAt === -1) {
        return {
            isAlwaysAvailable: false,
            startAt: format(new Date(startAt), 'yyyy-MM-dd'),
            endAt: undefined,
            duration: duration / 60
        }
    }

    return {
        isAlwaysAvailable: false,
        startAt: format(new Date(startAt), 'yyyy-MM-dd'),
        endAt: format(new Date(endAt), 'yyyy-MM-dd'),
        duration: duration / 60
    }
}

export default ExerciseForm