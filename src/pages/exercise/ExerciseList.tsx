import { Datagrid, DateField, FunctionField, List, NumberField, SearchInput, TextField } from 'react-admin';
import { SimpleExercise } from '../../types/exercise';
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
                <FunctionField<SimpleExercise>
                    label="Duration"
                    sortBy='duration'
                    sortable
                    render={(r) => `${r.duration / 60} mins`}
                />
                <FunctionField<SimpleExercise>
                    label="Availability"
                    sortBy='startAt'
                    sortable
                    render={(r) => <ExerciseAvailabilityField startAt={r.startAt} endAt={r.endAt} />}
                />
                <TextField source="status" />
            </Datagrid>
        </List>
    );
}
