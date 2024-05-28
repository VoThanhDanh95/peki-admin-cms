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

    if (formQuestions.questionType === 'Matching Features'
        || formQuestions.questionType === 'Matching Heading'
        || formQuestions.questionType === 'Matching Sentence Endings'
        || formQuestions.questionType === 'Which Paragraph Contains'
    ) {
        return {
            ...rest,
            questionAnswers: fromOptionsSelectionNewLine(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Sentence Completion Paragraph') {
        return {
            ...rest,
            questionAnswers: fromTextBasedInLineMultipleQuestions(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Short-answer questions One-Two Sentence'
        || formQuestions.questionType === 'Short-answer questions Paragraph') {
        return {
            ...rest,
            questionAnswers: fromTextBaseNewLine(formQuestions.questionAnswers)
        }
    }

    return formQuestions
}

const fromYesNoNotGiven = (questionAnswers: { question: string, answer: string }[]) => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: yesNoNotGiven
        })),
        answers: questionAnswers.map(questionAnswer => questionAnswer.answer)
    }
}

const fromTrueFalseNotGiven = (questionAnswers: { question: string, answer: string }[]) => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: trueFalseNotGiven
        })),
        answers: questionAnswers.map(questionAnswer => questionAnswer.answer)
    }
}

const fromSingleChoice = (questionAnswers: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]) => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: questionAnswer.options.map(item => item.option)
        })),
        answers: questionAnswers.flatMap(questionAnswer => questionAnswer.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}

const fromMultiChoices = (questionAnswers: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]) => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: questionAnswer.options.map(item => item.option)
        })),
        answers: questionAnswers.flatMap(questionAnswer => questionAnswer.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}

const fromOptionsSelectionNewLine = (questionAnswers: {
    options: string[]
    questions: Array<{ question: string, answer: string }>
}) => {
    return {
        answerOptions: questionAnswers.options,
        questions: questionAnswers.questions.map(question => question.question),
        answers: questionAnswers.questions.map(question => question.answer),
    }
}

const fromTextBasedInLineMultipleQuestions = (questionAnswers: Array<{ summary: string, answer: string }>) => {
    return {
        summary: questionAnswers.map(({ summary }) => summary),
        answers: questionAnswers.map(({ answer }) => answer),
    }
}

const fromTextBaseNewLine = (questionAnswers: { question: string, answer: string }[]) => {
    return {
        questions: questionAnswers.map(({ question }) => question),
        answers: questionAnswers.map(({ answer }) => answer)
    }
}
