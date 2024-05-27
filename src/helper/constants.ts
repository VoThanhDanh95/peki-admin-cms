import { ChoiceBasedQuestionType, OptionsSelectionNewLineQuestionType, QuestionType, TextBasedInLineMultipleQuestionType, TextBasedInlineQuestionType } from "../types/question"

export const yesNoNotGiven = [
    "Yes",
    "No",
    "Not Given"
] as const

export const trueFalseNotGiven = [
    "True",
    "False",
    "Not Given"
] as const

export const multiChoicesQuestionType: ChoiceBasedQuestionType[] = [
    'True/False/Not Given',
    'Yes/No/Not Given',
    'Multiple Choices One Answer',
    'Multiple Choices Multiple Answers'
] as const

export const optionsSelectionNewLineQuestionType: OptionsSelectionNewLineQuestionType[] = [
    'Matching Heading',
    'Matching Features',
    'Matching Sentence Endings',
    'Which Paragraph Contains'
] as const

export const textBasedInlineQuestionType: TextBasedInlineQuestionType[] = [
    'Sentence Completion One-Two Sentence',
    'Summary Completion Fill Words',
    'Table',
    'Flowchart',
    'Diagram'
] as const

export const textBasedInLineMultipleQuestionType: TextBasedInLineMultipleQuestionType[] = [
    'Sentence Completion Paragraph'
] as const

export const allQuestionType: QuestionType[] = [
    ...multiChoicesQuestionType,
    ...optionsSelectionNewLineQuestionType,
    // ...optionsSelectionInLineQuestionType,
    ...textBasedInlineQuestionType,
    // ...textBasedNewLineQuestionType,
    ...textBasedInLineMultipleQuestionType
] as const