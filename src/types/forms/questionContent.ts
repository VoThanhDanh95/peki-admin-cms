import { MultipleChoicesMultipleAnswers, MultipleChoicesOneAnswer, OptionsSelectionInLineQuestionType, OptionsSelectionNewLineQuestionType, TextBasedInLineMultipleQuestionsQuestionType, TextBasedInlineQuestionType, TextBasedNewLineQuestionType, TrueFalseNotGiven, YesNoNotGiven } from "../question"

export type FormQuestionContent = {
    content: string
    grammars: string[]
    level: number
    topic: string
    exerciseId?: string
    questions: FormQuestion[]
}

export type FormQuestion =
    | FormYesNoNotGivenQuestion
    | FormTrueFalseNotGivenQuestion
    | FormMultipleChoicesOneAnswerQuestion
    | FormMultipleChoicesMultipleAnswersQuestion
    | FormOptionsSelectionNewLineQuestion
    | FormOptionsSelectionInLineQuestion
    | FormTextBasedInLineMultipleQuestionsQuestion
    | FormTextBasedNewLineQuestion
    | FormTextBasedInLineQuestion

type FormBaseQuestion = {
    level: number
    requirement: string
}

type FormYesNoNotGivenQuestion = FormBaseQuestion & {
    questionType: YesNoNotGiven
    questionAnswers: Array<{ question: string, answer: string }>
}

type FormTrueFalseNotGivenQuestion = FormBaseQuestion & {
    questionType: TrueFalseNotGiven
    questionAnswers: Array<{ question: string, answer: string }>
}

type FormMultipleChoicesOneAnswerQuestion = FormBaseQuestion & {
    questionType: MultipleChoicesOneAnswer
    questionAnswers: Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }>
}

type FormMultipleChoicesMultipleAnswersQuestion = FormBaseQuestion & {
    questionType: MultipleChoicesMultipleAnswers
    questionAnswers: Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }>
}

type FormOptionsSelectionNewLineQuestion = FormBaseQuestion & {
    questionType: OptionsSelectionNewLineQuestionType
    questionAnswers: {
        options: string[]
        questions: Array<{ question: string, answer: string }>
    }
}

type FormOptionsSelectionInLineQuestion = FormBaseQuestion & {
    questionType: OptionsSelectionInLineQuestionType
    questionAnswers: {
        summary: string,
        answerOptions: string[],
        answers: string[],
    }
}

type FormTextBasedInLineMultipleQuestionsQuestion = FormBaseQuestion & {
    questionType: TextBasedInLineMultipleQuestionsQuestionType
    questionAnswers: Array<{ summary: string, answer: string }>
}

type FormTextBasedNewLineQuestion = FormBaseQuestion & {
    questionType: TextBasedNewLineQuestionType
    questionAnswers: Array<{ question: string, answer: string }>
}

type FormTextBasedInLineQuestion = FormBaseQuestion & {
    questionType: TextBasedInlineQuestionType
    questionAnswers: {
        summary: string,
        answers: string[],
    }
}