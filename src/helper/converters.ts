import { FormQuestion } from "../types/form"
import { trueFalseNotGiven, yesNoNotGiven } from "./constants"

export const convertFormQuestions = (formQuestions: FormQuestion) => {
    const { questionAnswers, ...rest } = formQuestions
    if (formQuestions.questionType === 'Yes/No/Not Given') {
        return {
            ...rest,
            questionAnswers: fromYesNoNotGiven(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'True/False/Not Given') {
        return {
            ...rest,
            questionAnswers: fromTrueFalseNotGiven(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Multiple Choices One Answer') {
        return {
            ...rest,
            questionAnswers: fromSingleChoice(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Multiple Choices Multiple Answers') {
        return {
            ...rest,
            questionAnswers: fromMultiChoices(formQuestions.questionAnswers)
        }
    }
}

const fromYesNoNotGiven = (formQuestions: { question: string, answer: string }[]) => {
    return {
        questions: formQuestions.map(formQuestion => ({
            question: formQuestion.question,
            answerOptions: yesNoNotGiven
        })),
        answers: formQuestions.map(formQuestion => formQuestion.answer)
    }
}

const fromTrueFalseNotGiven = (formQuestions: { question: string, answer: string }[]) => {
    return {
        questions: formQuestions.map(formQuestion => ({
            question: formQuestion.question,
            answerOptions: trueFalseNotGiven
        })),
        answers: formQuestions.map(formQuestion => formQuestion.answer)
    }
}

const fromSingleChoice = (formQuestions: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]) => {
    return {
        questions: formQuestions.map(formQuestion => ({
            question: formQuestion.question,
            answerOptions: formQuestion.options.map(item => item.option)
        })),
        answers: formQuestions.flatMap(formQuestion => formQuestion.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}

const fromMultiChoices = (formQuestions: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]) => {
    return {
        questions: formQuestions.map(formQuestion => ({
            question: formQuestion.question,
            answerOptions: formQuestion.options.map(item => item.option)
        })),
        answers: formQuestions.flatMap(formQuestion => formQuestion.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}
