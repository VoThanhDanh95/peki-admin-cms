import { ChoiceBasedQuestionType, OptionsSelectionInLineQuestionType, OptionsSelectionNewLineQuestionType, QuestionType, TextBasedInLineMultipleQuestionsQuestionType, TextBasedInlineQuestionType, TextBasedNewLineQuestionType } from "../types/question"

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

export const choiceBasedQuestionType: ChoiceBasedQuestionType[] = [
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

export const textBasedInLineMultipleQuestionType: TextBasedInLineMultipleQuestionsQuestionType[] = [
    'Sentence Completion Paragraph'
] as const

export const textBasedNewLineQuestionType: TextBasedNewLineQuestionType[] = [
    'Short-answer questions Paragraph',
    'Short-answer questions One-Two Sentence'
] as const

export const optionsSelectionInLineQuestionType: OptionsSelectionInLineQuestionType[] = [
    'Summary Completion Select Words'
] as const

export const allQuestionType: QuestionType[] = [
    ...choiceBasedQuestionType,
    ...optionsSelectionNewLineQuestionType,
    ...optionsSelectionInLineQuestionType,
    ...textBasedInlineQuestionType,
    ...textBasedNewLineQuestionType,
    ...textBasedInLineMultipleQuestionType
] as const