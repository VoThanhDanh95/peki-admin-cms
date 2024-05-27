import { QuestionAnswer } from "./questionAnswer"

export type Question = {
    id: string
    level: number
    questionType: QuestionType
    requirement: string
    questionAnswers: QuestionAnswer
}

export type TrueFalseNotGiven = 'True/False/Not Given'
export type YesNoNotGiven = 'Yes/No/Not Given'
export type MultipleChoicesOneAnswer = 'Multiple Choices One Answer'
export type MultipleChoicesMultipleAnswers = 'Multiple Choices Multiple Answers'

export type ChoiceBasedQuestionType =
    | TrueFalseNotGiven
    | YesNoNotGiven
    | MultipleChoicesOneAnswer
    | MultipleChoicesMultipleAnswers

export type QuestionType =
    | ChoiceBasedQuestionType




export const textBasedInlineQuestionType = [
    'Sentence Completion One-Two Sentence',
    'Summary Completion Fill Words',
    'Table',
    'Flowchart',
    'Diagram'
] as const

export const textBasedNewLineQuestionType = [
    'Short-answer questions Paragraph',
    'Short-answer questions One-Two Sentence'
] as const

export const optionsSelectionNewLineQuestionType = [
    'Matching Heading',
    'Matching Features',
    'Matching Sentence Endings',
    'Which Paragraph Contains'
] as const

export const optionsSelectionInLineQuestionType = [
    'Summary Completion Select Words'
] as const

export const textBasedInLineMultipleQuestionType = [
    'Sentence Completion Paragraph'
] as const