import { format } from "date-fns";
import { Exercise } from "../../types/exercise";
import { FormExercise } from "../../types/forms/exercise";
import { parse } from "date-fns/parse";

export const fromFormExercise = (exercise: FormExercise): Omit<Exercise, 'id' | 'createAt'> => {
    const { isAlwaysAvailable, startAt, endAt, duration, ...rest } = exercise

    let parsedStartAt = startAt ? parse(startAt, 'yyyy-MM-dd', new Date()).getTime() : -1
    let parsedEndAt = endAt ? parse(endAt, 'yyyy-MM-dd', new Date()).getTime() : -1

    if (isAlwaysAvailable) {
        parsedStartAt = -1
        parsedEndAt = -1
    }

    return {
        ...rest,
        startAt: parsedStartAt,
        endAt: parsedEndAt,
        duration: duration * 60
    }
}

export const toFormExercise = (exercise: Exercise): FormExercise => {
    const { startAt, endAt, duration, id, createAt, ...rest } = exercise

    return {
        ...rest,
        startAt: startAt === -1 ? "" : format(new Date(startAt), 'yyyy-MM-dd'),
        endAt: endAt === -1 ? "" : format(new Date(endAt), 'yyyy-MM-dd'),
        isAlwaysAvailable: startAt === -1 && endAt === -1,
        duration: duration / 60
    }
}