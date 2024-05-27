import { trueFalseNotGiven, yesNoNotGiven } from "../helper/constants"
import { MultipleChoicesMultipleAnswers, MultipleChoicesOneAnswer, TrueFalseNotGiven, YesNoNotGiven } from "./question"

type YesNoNotGivenAnswer = typeof yesNoNotGiven[number]
type TrueFalseNotGivenAnswer = typeof trueFalseNotGiven[number]

export type FormQuestionContent = {
    content: string
    grammars: string[]
    level: number
    topic: string
    questions: FormQuestion[]
}

export type FormQuestion =
    | FormYesNoNotGivenQuestion
    | FormTrueFalseNotGivenQuestion
    | FormMultipleChoicesOneAnswerQuestion
    | FormMultipleChoicesMultipleAnswersQuestion

type FormBaseQuestion = {
    level: number
    requirement: string
}

type FormYesNoNotGivenQuestion = FormBaseQuestion & {
    questionType: YesNoNotGiven
    questionAnswers: Array<{ question: string, answer: YesNoNotGivenAnswer }>
}

type FormTrueFalseNotGivenQuestion = FormBaseQuestion & {
    questionType: TrueFalseNotGiven
    questionAnswers: Array<{ question: string, answer: TrueFalseNotGivenAnswer }>
}

type FormMultipleChoicesOneAnswerQuestion = FormBaseQuestion & {
    questionType: MultipleChoicesOneAnswer
    questionAnswers: Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }>
}

type FormMultipleChoicesMultipleAnswersQuestion = FormBaseQuestion & {
    questionType: MultipleChoicesMultipleAnswers
    questionAnswers: Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }>
}