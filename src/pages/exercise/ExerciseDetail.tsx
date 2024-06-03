import { Grid } from '@mui/material';
import { Datagrid, DateField, DeleteButton, EditButton, FunctionField, Labeled, NumberField, ReferenceManyField, RichTextField, Show, SimpleShowLayout, TabbedShowLayout, TextField, TopToolbar, WithRecord } from "react-admin";
import { SimpleExercise } from "../../types/exercise";
import ExerciseAvailabilityField from "./components/ExerciseAvailabilityField";
import { SimpleQuestionContent } from '../../types/questionContent';

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
                        sort={{ field: "order", order: "ASC" }}
                    >
                        <Datagrid
                            rowClick="show"
                            bulkActionButtons={false}
                        >
                            <WithRecord render={({ content, ...rest }) => {
                                return <RichTextField source="content" record={{
                                    ...rest,
                                    content: content.length > 200 ? content.slice(0, 200) + "..." : content
                                }}
                                />
                            }} />

                            <TextField source="topic" />
                            <NumberField source="level" />
                            <FunctionField
                                label="Grammars"
                                render={(r: SimpleQuestionContent) => <>
                                    {r.grammars.map((grammar, index) => <div key={index}>{`- ${grammar}`}</div>)}
                                </>}
                            />
                            <FunctionField
                                label="No. question"
                                render={(r: SimpleQuestionContent) => r.questions.length}
                            />
                            <NumberField source="order" />
                            <DateField source='createAt' />
                            <TextField source="id" />
                        </Datagrid>
                    </ReferenceManyField>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    )
}

export default ExerciseDetail