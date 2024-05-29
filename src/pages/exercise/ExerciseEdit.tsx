import { Edit, RecordContextProvider, WithRecord } from "react-admin";
import { fromFormExercise, toFormExercise } from "../../helper/converters/exercise";
import ExerciseForm from "./components/ExerciseForm";

const ExerciseEdit = () => {
    return (
        <Edit transform={fromFormExercise} redirect="show">
            <WithRecord render={(exercise) => {
                return (
                    <RecordContextProvider value={toFormExercise(exercise)}>
                        <ExerciseForm />
                    </RecordContextProvider>
                )
            }} />
        </Edit>
    )
}

export default ExerciseEdit;