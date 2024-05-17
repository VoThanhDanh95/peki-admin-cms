import { Datagrid, DateField, FunctionField, List, NumberField, SearchInput, TextField, TextInput } from 'react-admin';
import { SimpleExercise } from '../../types/exercise'
import ExerciseAvailabilityField from './components/ExerciseAvailabilityField';

const exerciseFilters = [
    <SearchInput source="name" alwaysOn />
]

export const ExerciseList = () => {
    return (
        <List
            sort={{ field: "createAt", order: "DESC" }}
            filters={exerciseFilters}
        >
            <Datagrid rowClick="show">
                <TextField source="name" />
                <TextField source="intro" />
                <TextField source="category" />
                <TextField source="mode" />
                <NumberField source="level" />
                <TextField source='skill' />
                <TextField source="id" />
                <DateField source='createAt' />
                <FunctionField
                    label="Duration"
                    sortBy='duration'
                    sortable
                    render={(r: SimpleExercise) => `${r.duration / 60} mins`}
                />
                <FunctionField
                    label="Availability"
                    sortBy='startAt'
                    sortable
                    render={(r: SimpleExercise) => <ExerciseAvailabilityField startAt={r.startAt} endAt={r.endAt} />}
                />
                <TextField source="status" />
            </Datagrid>
        </List>
    );
}
