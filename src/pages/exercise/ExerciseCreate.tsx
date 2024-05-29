import { Create } from "react-admin";
import { fromFormExercise } from "../../helper/converters/exercise";
import ExerciseForm from "./components/ExerciseForm";

const ExerciseCreate = () => {
    return (
        <Create transform={fromFormExercise} redirect="show">
            <ExerciseForm />
        </Create>
    )
}

export default ExerciseCreate;