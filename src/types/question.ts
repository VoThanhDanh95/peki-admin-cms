import { MultipleChoicesQuestionAnswer, OptionsSelectionInLineQuestionAnswer, OptionsSelectionNewLineQuestionAnswer, TextBasedInLineMultipleQuestionQuestionAnswer, TextBasedInLineQuestionAnswer, TextBasedNewLineQuestionAnswer } from "./questionAnswer"

export type QuestionBase = {
    id: string
    level: number
    requirement: string
    belongsTo: BelongsTo
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

export type SummaryCompletionSelectWords = 'Summary Completion Select Words'
export type OptionsSelectionInLineQuestionType =
    | SummaryCompletionSelectWords

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
export type TextBasedInLineMultipleQuestionsQuestionType =
    | SentenceCompletionParagraph

export type ShortAnswerQuestionsParagraph = 'Short-answer questions Paragraph'
export type ShortAnswerQuestionsOneTwoSentence = 'Short-answer questions One-Two Sentence'
export type TextBasedNewLineQuestionType =
    | ShortAnswerQuestionsParagraph
    | ShortAnswerQuestionsOneTwoSentence

export type QuestionType =
    | ChoiceBasedQuestionType
    | OptionsSelectionInLineQuestionType
    | OptionsSelectionNewLineQuestionType
    | TextBasedInlineQuestionType
    | TextBasedInLineMultipleQuestionsQuestionType
    | TextBasedNewLineQuestionType

export type MatchingHeadingBelongsTo = 'Matching Headings'
export type TrueFalseNotGivenBelongsTo = 'True / False / Not Given'
export type YesNoNotGivenBelongsTo = 'Yes / No / Not Given'
export type MultipleChoicesBelongsTo = 'Multiple Choices'
export type SummaryCompletionBelongsTo = 'Summary Completion'
export type TableCompletionBelongsTo = 'Table Completion'
export type FlowchartDiagramCompletionBelongsTo = 'Flowchart - Diagram Completion'
export type SentenceCompletionBelongsTo = 'Sentence Completion'
export type ShortAnswerQuestionsBelongsTo = 'Short-answer questions'
export type WhichParagraphContainsBelongsTo = 'Which paragraph contains'
export type MatchingFeaturesBelongsTo = 'Matching features'
export type MatchingSentenceEndingsBelongsTo = 'Matching sentence endings'
export type BelongsTo =
    | MatchingHeadingBelongsTo
    | TrueFalseNotGivenBelongsTo
    | YesNoNotGivenBelongsTo
    | MultipleChoicesBelongsTo
    | SummaryCompletionBelongsTo
    | TableCompletionBelongsTo
    | FlowchartDiagramCompletionBelongsTo
    | SentenceCompletionBelongsTo
    | ShortAnswerQuestionsBelongsTo
    | WhichParagraphContainsBelongsTo
    | MatchingFeaturesBelongsTo
    | MatchingSentenceEndingsBelongsTo

type MultipleChoicesQuestion = QuestionBase & {
    questionType: ChoiceBasedQuestionType
    questionAnswers: MultipleChoicesQuestionAnswer
}

type OptionsSelectionNewLineQuestion = QuestionBase & {
    questionType: OptionsSelectionNewLineQuestionType
    questionAnswers: OptionsSelectionNewLineQuestionAnswer
}

type OptionsSelectioInLineQuestion = QuestionBase & {
    questionType: OptionsSelectionInLineQuestionType
    questionAnswers: OptionsSelectionInLineQuestionAnswer
}

type TextBasedInlineQuestion = QuestionBase & {
    questionType: TextBasedInlineQuestionType
    questionAnswers: TextBasedInLineQuestionAnswer
}

type TextBasedNewLineQuestion = QuestionBase & {
    questionType: TextBasedNewLineQuestionType
    questionAnswers: TextBasedNewLineQuestionAnswer
}

type TextBasedInLineMultipleQuestionQuestion = QuestionBase & {
    questionType: TextBasedInLineMultipleQuestionsQuestionType
    questionAnswers: TextBasedInLineMultipleQuestionQuestionAnswer
}

export type Question =
    | MultipleChoicesQuestion
    | OptionsSelectionNewLineQuestion
    | OptionsSelectioInLineQuestion
    | TextBasedInlineQuestion
    | TextBasedNewLineQuestion
    | TextBasedInLineMultipleQuestionQuestion

