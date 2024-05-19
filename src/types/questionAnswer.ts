type MultipleChoices = {
    questions: {
        question: string
        answerOptions: string[]
    }[],
    answers: string[]
}
type TextBaseInLine = {
    summary: string,
    answers: string[],
}
type TextBaseNewLine = {
    questions: string[]
    answers: string[]
}
type OptionsSelectionInLine = {
    summary: string,
    answerOptions: string[],
    answers: string[],
}

type OptionsSelectionNewLine = {
    questions: string[]
    answerOptions: string[],
    answers: string[]
}

type TextBaseInLineMultipleQuestion = {
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