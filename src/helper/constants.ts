import { ChoiceBasedQuestionType, QuestionType } from "../types/question"

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

export const allQuestionType: QuestionType[] = [
    ...multiChoicesQuestionType,
    // ...optionsSelectionNewLineQuestionType,
    // ...optionsSelectionInLineQuestionType,
    // ...textBasedInlineQuestionType,
    // ...textBasedNewLineQuestionType,
    // ...textBasedInLineMultipleQuestionType
] as const