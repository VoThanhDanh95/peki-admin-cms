import { BelongsTo, ChoiceBasedQuestionType, OptionsSelectionInLineQuestionType, OptionsSelectionNewLineQuestionType, QuestionType, TextBasedInLineMultipleQuestionsQuestionType, TextBasedInlineQuestionType, TextBasedNewLineQuestionType } from "../types/question"

export const yesNoNotGivenAnswers = [
    {
        id: "YES",
        name: "Yes"
    },
    {
        id: "NO",
        name: "No"
    },
    {
        id: "NOT GIVEN",
        name: "Not Given"
    },
] as const

export const trueFalseGivenAnswers = [
    {
        id: "TRUE",
        name: "True"
    },
    {
        id: "FALSE",
        name: "False"
    },
    {
        id: "NOT GIVEN",
        name: "Not Given"
    },
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

export const questionTypeBelongsToMapping: Record<QuestionType, BelongsTo> = {
    'Matching Heading': 'Matching Headings',
    'True/False/Not Given': 'True / False / Not Given',
    'Yes/No/Not Given': 'Yes / No / Not Given',
    'Multiple Choices One Answer': 'Multiple Choices',
    'Multiple Choices Multiple Answers': 'Multiple Choices',
    'Summary Completion Fill Words': 'Summary Completion',
    'Summary Completion Select Words': 'Summary Completion',
    'Table': 'Table Completion',
    'Flowchart': 'Flowchart - Diagram Completion',
    'Diagram': 'Flowchart - Diagram Completion',
    'Sentence Completion Paragraph': 'Sentence Completion',
    'Sentence Completion One-Two Sentence': 'Sentence Completion',
    'Short-answer questions Paragraph': 'Short-answer questions',
    'Short-answer questions One-Two Sentence': 'Short-answer questions',
    'Matching Features': 'Matching features',
    'Matching Sentence Endings': 'Matching sentence endings',
    'Which Paragraph Contains': 'Which paragraph contains',
}
