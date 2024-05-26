import { Edit, RecordContextProvider, WithRecord } from "react-admin";
import ExerciseForm, { decodeData, encodeData } from "./components/ExerciseForm";

const ExerciseEdit = () => {
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
        <Edit transform={transform}>
            <WithRecord render={({ startAt, endAt, duration, id, createAt, ...rest }) => {
                return (
                    <RecordContextProvider value={{
                        ...rest,
                        ...decodeData({ startAt, endAt, duration })
                    }}>
                        <ExerciseForm />
                    </RecordContextProvider>
                )
            }} />
        </Edit>
    )
}

export default ExerciseEdit;