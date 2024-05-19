import { DateField, FunctionField, NumberField, ReferenceManyField, Show, TabbedShowLayout, TextField, useGetRecordId } from "react-admin";
import { SimpleExercise } from "../../types/exercise";
import QuestionContentDataGrid from "../shared/QuestionContentDatagrid";
import ExerciseAvailabilityField from "./components/ExerciseAvailabilityField";

const ExerciseDetail = () => {
    return (
        <Show>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Main">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="intro" />
                    <TextField source="category" />
                    <TextField source="mode" />
                    <NumberField source="level" />
                    <TextField source="skill" />
                    <DateField source="createAt" />
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
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label={"Question Content"}>
                    <ReferenceManyField
                        reference="question_contents"
                        target="exerciseId"
                        label="Question Contents"
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