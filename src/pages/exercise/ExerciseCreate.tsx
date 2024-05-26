import { Create } from "react-admin";
import ExerciseForm, { encodeData } from "./components/ExerciseForm";

const ExerciseCreate = () => {
    const transform = ({ isAlwaysAvailable, ...rest }: any) => ({
        ...rest,
        ...encodeData({
            isAlwaysAvailable: isAlwaysAvailable,
            startAt: rest.startAt,
            endAt: rest.endAt
        }),
        duration: rest.duration * 60
    })

    return (
        <Create transform={transform} redirect="show">
            <ExerciseForm />
        </Create>
    )
}

export default ExerciseCreate;