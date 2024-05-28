export type FormExercise = {
    name: string
    intro: string
    mode: 'practice' | 'test'
    level: number
    skill: 'reading' | 'listening' | 'writing' | 'speaking'
    category: string
    duration: number
    isAlwaysAvailable: boolean
    startAt: string
    endAt: string
    status: 'public' | 'draft'
}