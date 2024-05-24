import { Edit } from "react-admin";
import ExerciseForm, { transformData } from "./components/ExerciseForm";

const ExerciseEdit = () => {
    const transform = ({ isAlwaysAvailable, ...rest }: any) => ({
        ...rest,
        ...transformData({
            isAlwaysAvailable: isAlwaysAvailable,
            startAt: rest.startAt,
            endAt: rest.endAt
        }),
        duration: rest.duration * 60
    })

    return (
        <Edit transform={transform}>
            <ExerciseForm />
        </Edit>
    )
}

export default ExerciseEdit;