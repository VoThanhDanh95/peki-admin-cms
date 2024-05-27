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

export type MatchingHeading = 'Matching Heading'
export type MatchingFeatures = 'Matching Features'
export type MatchingSentenceEndings = 'Matching Sentence Endings'
export type WhichParagraphContains = 'Which Paragraph Contains'

export type OptionsSelectionNewLineQuestionType =
    | MatchingHeading
    | MatchingFeatures
    | MatchingSentenceEndings
    | WhichParagraphContains

export type SentenceCompletionOneTwoSentence = 'Sentence Completion One-Two Sentence'
export type SummaryCompletionFillWords = 'Summary Completion Fill Words'
export type Table = 'Table'
export type Flowchart = 'Flowchart'
export type Diagram = 'Diagram'

export type TextBasedInlineQuestionType =
    | SentenceCompletionOneTwoSentence
    | SummaryCompletionFillWords
    | Table
    | Flowchart
    | Diagram

export type SentenceCompletionParagraph = 'Sentence Completion Paragraph'

export type TextBasedInLineMultipleQuestionType =
    | SentenceCompletionParagraph

export type QuestionType =
    | ChoiceBasedQuestionType
    | OptionsSelectionNewLineQuestionType
    | TextBasedInlineQuestionType
    | TextBasedInLineMultipleQuestionType

export const textBasedNewLineQuestionType = [
    'Short-answer questions Paragraph',
    'Short-answer questions One-Two Sentence'
] as const

export const optionsSelectionInLineQuestionType = [
    'Summary Completion Select Words'
] as const

