import { QuestionAnswer } from "./questionAnswer"

export type Question = {
    id: string
    level: number
    questionType: QuestionType
    requirement: string
    questionAnswers: QuestionAnswer
}

type MultipleChoicesQuestionType =
    'True/False/Not Given' |
    'Yes/No/Not Given' |
    'Multiple Choices One Answer' |
    'Multiple Choices Multiple Answers';
type TextBaseInLineQuestionType =
    'Sentence Completion One-Two Sentence' |
    'Summary Completion Fill Words' |
    'Table' |
    'Flowchart' |
    'Diagram';
type TextBaseNewLineQuestionType = 'Short-answer questions Paragraph' | 'Short-answer questions One-Two Sentence';
type OptionsSelectionNewLineQuestionType = 'Matching Heading' | 'Matching Features' | 'Matching Sentence Endings' | 'Which Paragraph Contains';
type OptionsSelectionInLineQuestionType = 'Summary Completion Select Words';
type TextBaseInLineMultipleQuestionType = 'Sentence Completion Paragraph';

type QuestionType =
    MultipleChoicesQuestionType |
    TextBaseInLineQuestionType |
    TextBaseNewLineQuestionType |
    OptionsSelectionNewLineQuestionType |
    OptionsSelectionInLineQuestionType |
    TextBaseInLineMultipleQuestionType