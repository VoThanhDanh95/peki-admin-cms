import { Create } from "react-admin";
import ExerciseForm, { transformData } from "./components/ExerciseForm";

const ExerciseCreate = () => {
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
        <Create transform={transform}>
            <ExerciseForm />
        </Create>
    )
}

export default ExerciseCreate;