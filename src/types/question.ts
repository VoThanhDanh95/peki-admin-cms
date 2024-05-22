import { QuestionAnswer } from "./questionAnswer"

export type Question = {
    id: string
    level: number
    questionType: QuestionType
    requirement: string
    questionAnswers: QuestionAnswer
}

export const multiChoicesQuestionType = [
    'True/False/Not Given',
    'Yes/No/Not Given',
    'Multiple Choices One Answer',
    'Multiple Choices Multiple Answers'
] as const

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

export const allQuestionType = [
    ...multiChoicesQuestionType,
    ...optionsSelectionNewLineQuestionType,
    ...optionsSelectionInLineQuestionType,
    ...textBasedInlineQuestionType,
    ...textBasedNewLineQuestionType,
    ...textBasedInLineMultipleQuestionType
] as const

type MultipleChoicesQuestionType = typeof multiChoicesQuestionType[number];
type TextBasedInLineQuestionType = typeof textBasedInlineQuestionType[number];
type TextBasedNewLineQuestionType = typeof textBasedNewLineQuestionType[number];
type OptionsSelectionNewLineQuestionType = typeof optionsSelectionNewLineQuestionType[number];
type OptionsSelectionInLineQuestionType = typeof optionsSelectionInLineQuestionType[number];
type TextBasedInLineMultipleQuestionType = typeof textBasedInLineMultipleQuestionType[number];

export type QuestionType =
    MultipleChoicesQuestionType |
    TextBasedInLineQuestionType |
    TextBasedNewLineQuestionType |
    OptionsSelectionNewLineQuestionType |
    OptionsSelectionInLineQuestionType |
    TextBasedInLineMultipleQuestionType