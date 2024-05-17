import { useMemo } from "react"
import { useTranslate } from "react-admin"

const ExerciseAvailabilityField = ({ startAt, endAt }: { startAt: number, endAt: number }) => {
    const t = useTranslate()

    const text = useMemo(() => {
        if (startAt === -1 && endAt !== -1) {
            return t('custom.exerciseAvailability.availableTo', { endAt: Intl.DateTimeFormat().format(new Date(endAt)) })
        }

        if (startAt !== -1 && endAt === -1) {
            return t('custom.exerciseAvailability.availableFrom', { endAt: Intl.DateTimeFormat().format(new Date(startAt)) })
        }

        if (startAt !== -1 && endAt !== -1) {
            return `${Intl.DateTimeFormat().format(new Date(startAt))}-${Intl.DateTimeFormat().format(new Date(endAt))}`
        }

        return t(`custom.exerciseAvailability.alwaysAvailable`)
    }, [startAt, endAt])

    return text
}

export default ExerciseAvailabilityField