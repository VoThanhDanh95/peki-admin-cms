import { Grid } from '@mui/material';
import { DateField, DeleteButton, EditButton, FunctionField, Labeled, NumberField, ReferenceManyField, Show, SimpleShowLayout, TabbedShowLayout, TextField, TopToolbar } from "react-admin";
import { SimpleExercise } from "../../types/exercise";
import QuestionContentDataGrid from "../shared/QuestionContentDatagrid";
import ExerciseAvailabilityField from "./components/ExerciseAvailabilityField";

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
                                <Labeled color="primary.main">
                                    <TextField source="name" />
                                </Labeled>
                                <Labeled color="primary.main">
                                    <TextField source="intro" />
                                </Labeled>
                                <Labeled color="primary.main">
                                    <TextField source="category" />
                                </Labeled>
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <Labeled color="primary.main">
                                            <TextField source="mode" />
                                        </Labeled>
                                        <Labeled color="primary.main">
                                            <FunctionField<SimpleExercise>
                                                label="Duration"
                                                sortBy='duration'
                                                sortable
                                                render={(r) => `${r.duration / 60} mins`}
                                            />
                                        </Labeled>
                                    </SimpleShowLayout>
                                </Grid>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <Labeled color="primary.main">
                                            <NumberField source="level" />
                                        </Labeled>
                                        <Labeled color="primary.main">
                                            <FunctionField<SimpleExercise>
                                                label="Availability"
                                                sortBy='startAt'
                                                sortable
                                                render={(r) => <ExerciseAvailabilityField startAt={r.startAt} endAt={r.endAt} />}
                                            />
                                        </Labeled>
                                    </SimpleShowLayout>
                                </Grid>
                                <Grid item xs={4}>
                                    <SimpleShowLayout>
                                        <Labeled color="primary.main">
                                            <TextField source="skill" />
                                        </Labeled>
                                        <Labeled color="primary.main">
                                            <TextField source="status" />
                                        </Labeled>
                                    </SimpleShowLayout>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Labeled color="primary.main">
                        <TextField source="id" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <DateField source="createAt" />
                    </Labeled>

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