export type SimpleExercise = {
    id: string
    name: string
    intro: string
    mode: 'practice' | 'test'
    level: number
    skill: 'reading' | 'listening' | 'writing' | 'speaking'
    category: string
    duration: number
    startAt: number
    endAt: number
    status: 'public' | 'draft'
    createAt: number
}