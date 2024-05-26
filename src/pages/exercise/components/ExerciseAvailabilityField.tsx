import { format } from "date-fns"
import { useMemo } from "react"
import { useTranslate } from "react-admin"

const ExerciseAvailabilityField = ({ startAt, endAt }: { startAt: number, endAt: number }) => {
    const t = useTranslate()

    const text = useMemo(() => {
        if (startAt === -1 && endAt !== -1) {
            return t('custom.exerciseAvailability.availableTo', { endAt: format(new Date(endAt), 'dd-MM-yyyy') })
        }

        if (startAt !== -1 && endAt === -1) {
            return t('custom.exerciseAvailability.availableFrom', { startAt: format(new Date(startAt), 'dd-MM-yyyy') })
        }

        if (startAt !== -1 && endAt !== -1) {
            return `${format(new Date(startAt), 'dd/MM/yyyy')}-${format(new Date(endAt), 'dd/MM/yyyy')}`
        }

        return t(`custom.exerciseAvailability.alwaysAvailable`)
    }, [startAt, endAt])

    return text
}

export default ExerciseAvailabilityField