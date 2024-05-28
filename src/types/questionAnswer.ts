export type MultipleChoicesQuestionAnswer = {
    questions: {
        question: string
        answerOptions: string[]
    }[],
    answers: string[]
}
export type TextBasedInLineQuestionAnswer = {
    summary: string,
    answers: string[],
}
export type TextBasedNewLineQuestionAnswer = {
    questions: string[]
    answers: string[]
}
export type OptionsSelectionInLineQuestionAnswer = {
    summary: string,
    answerOptions: string[],
    answers: string[],
}

export type OptionsSelectionNewLineQuestionAnswer = {
    questions: string[]
    answerOptions: string[],
    answers: string[]
}

export type TextBasedInLineMultipleQuestionQuestionAnswer = {
    summary: string[],
    answers: string[],
}

export type QuestionAnswer =
    | MultipleChoicesQuestionAnswer
    | TextBasedInLineQuestionAnswer
    | TextBasedNewLineQuestionAnswer
    | OptionsSelectionInLineQuestionAnswer
    | OptionsSelectionNewLineQuestionAnswer
    | TextBasedInLineMultipleQuestionQuestionAnswer