import { Question } from "./question"

export type SimpleQuestionContent = {
    id: string
    content: string
    level: number
    topic: string
    questions: Question[]
    grammars: string[]
    exerciseId: string
    createAt: number
}

export type QuestionContent = {
    id: string
    content: string
    level: number
    topic: string
    grammars: string[]
    exerciseId: string
    createAt: number
    questions: Question[]
}