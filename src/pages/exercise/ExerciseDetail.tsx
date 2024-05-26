import { DateField, DeleteButton, EditButton, FunctionField, NumberField, ReferenceManyField, Show, SimpleShowLayout, TabbedShowLayout, TextField, TopToolbar } from "react-admin";
import { SimpleExercise } from "../../types/exercise";
import QuestionContentDataGrid from "../shared/QuestionContentDatagrid";
import ExerciseAvailabilityField from "./components/ExerciseAvailabilityField";
import { Grid } from '@mui/material';

const ExerciseDetailShowActions = () => {
    return (
        <TopToolbar>
            <EditButton />
            <DeleteButton />
        </TopToolbar>
    )
}

const ExerciseDetail = () => {
    return (
        <Show actions={<ExerciseDetailShowActions />}>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <SimpleShowLayout>
                                <TextField source="name" />
                                <TextField source="intro" />
                                <TextField source="category" />
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <TextField source="mode" />
                                        <FunctionField<SimpleExercise>
                                            label="Duration"
                                            sortBy='duration'
                                            sortable
                                            render={(r) => `${r.duration / 60} mins`}
                                        />
                                    </SimpleShowLayout>
                                </Grid>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <NumberField source="level" />
                                        <FunctionField<SimpleExercise>
                                            label="Availability"
                                            sortBy='startAt'
                                            sortable
                                            render={(r) => <ExerciseAvailabilityField startAt={r.startAt} endAt={r.endAt} />}
                                        />
                                    </SimpleShowLayout>

                                </Grid>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <TextField source="skill" />
                                        <TextField source="status" />
                                    </SimpleShowLayout>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <TextField source="id" />
                    <DateField source="createAt" />
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label={"Question Content"}>
                    <ReferenceManyField
                        reference="question_contents"
                        target="exerciseId"
                    >
                        <QuestionContentDataGrid
                            rowClick="show"
                            bulkActionButtons={false}
                        />
                    </ReferenceManyField>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    )
}

export default ExerciseDetail