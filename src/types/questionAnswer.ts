export type MultipleChoices = {
    questions: {
        question: string
        answerOptions: string[]
    }[],
    answers: string[]
}
export type TextBaseInLine = {
    summary: string,
    answers: string[],
}
export type TextBaseNewLine = {
    questions: string[]
    answers: string[]
}
export type OptionsSelectionInLine = {
    summary: string,
    answerOptions: string[],
    answers: string[],
}

export type OptionsSelectionNewLine = {
    questions: string[]
    answerOptions: string[],
    answers: string[]
}

export type TextBaseInLineMultipleQuestion = {
    summary: string[],
    answers: string[],
}

export type QuestionAnswer =
    MultipleChoices |
    TextBaseInLine |
    TextBaseNewLine |
    OptionsSelectionInLine |
    OptionsSelectionNewLine |
    TextBaseInLineMultipleQuestion