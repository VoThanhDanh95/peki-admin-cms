import { Question, QuestionType } from "./question"

export type SimpleQuestionContent = {
    id: string
    content: string
    level: number
    topic: string
    questions: object[]
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
    questionType: QuestionType
    questions: Question[]
}