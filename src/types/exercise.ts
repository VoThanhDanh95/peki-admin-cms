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

export type Exercise = {
    id: string
    name: string
    intro: string
    mode: 'practice' | 'test'
    level: number
    skill: 'reading' | 'listening' | 'writing' | 'speaking'
    catalog: 'IELTS' | 'THPT'
    category: string
    duration: number
    startAt: number
    endAt: number
    status: 'public' | 'draft'
    createAt: number
}

export type MutationExercise = {
    name: string
    intro: string
    mode: 'practice' | 'test'
    level: number
    skill: 'reading' | 'listening' | 'writing' | 'speaking'
    catalog: 'IELTS' | 'THPT'
    category: string
    duration: number
    startAt: number
    endAt: number
    status: 'public' | 'draft'
}
