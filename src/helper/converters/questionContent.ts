import { fetchUtils } from "react-admin"
import { FormQuestion, FormQuestionContent } from "../../types/forms/questionContent"
import { Question } from "../../types/question"
import { MultipleChoicesQuestionAnswer, OptionsSelectionInLineQuestionAnswer, OptionsSelectionNewLineQuestionAnswer, TextBasedInLineMultipleQuestionQuestionAnswer, TextBasedInLineQuestionAnswer, TextBasedNewLineQuestionAnswer } from "../../types/questionAnswer"
import { MutationQuestionContent, QuestionContent } from "../../types/questionContent"
import { trueFalseGivenAnswers, yesNoNotGivenAnswers } from "../constants"
import { fetchJson } from "../../dataProvider"

const createPostFormData = (
    params: FormQuestionContent
) => {
    const formData = new FormData();
    params.audio?.rawFile && formData.append("file", params.audio.rawFile);

    return formData;
};

export const fromFormQuestionContent = async (formQuestionContent: FormQuestionContent, mode: 'edit' | 'create'): Promise<MutationQuestionContent> => {
    const { questions, exerciseId, audio, ...rest } = formQuestionContent
    let content = formQuestionContent.content

    if (audio) {
        const formData = createPostFormData(formQuestionContent);
        const { json } = await fetchJson(`${import.meta.env.VITE_API_URL}/cms/upload/audio`, {
            method: "POST",
            body: formData,
        });

        content = `${import.meta.env.VITE_API_URL}/static_serve/audios/${json.mediaMeta.id}`
    }

    return {
        ...rest,
        content: content || '',
        exerciseId: mode === 'create' ? exerciseId : undefined,
        questions: questions.map(question => fromFormQuestion(question))
    }
}

export const fromFormQuestion = (formQuestions: FormQuestion): Omit<Question, 'id'> => {
    const { questionAnswers, ...rest } = formQuestions
    if (formQuestions.questionType === 'Yes/No/Not Given') {
        return {
            ...rest,
            questionAnswers: fromYesNoNotGivenForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'True/False/Not Given') {
        return {
            ...rest,
            questionAnswers: fromTrueFalseNotGivenForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Multiple Choices One Answer') {
        return {
            ...rest,
            questionAnswers: fromSingleChoiceForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Multiple Choices Multiple Answers') {
        return {
            ...rest,
            questionAnswers: fromMultiChoicesForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Matching Features'
        || formQuestions.questionType === 'Matching Heading'
        || formQuestions.questionType === 'Matching Sentence Endings'
        || formQuestions.questionType === 'Which Paragraph Contains'
    ) {
        return {
            ...rest,
            questionAnswers: fromOptionsSelectionNewLineForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Summary Completion Select Words') {
        return {
            ...rest,
            questionAnswers: fromOptionsSelectionInLineForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Sentence Completion Paragraph') {
        return {
            ...rest,
            questionAnswers: fromTextBasedInLineMultipleQuestionsForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Short-answer questions One-Two Sentence'
        || formQuestions.questionType === 'Short-answer questions Paragraph') {
        return {
            ...rest,
            questionAnswers: fromTextBaseNewLineForm(formQuestions.questionAnswers)
        }
    }

    if (formQuestions.questionType === 'Diagram'
        || formQuestions.questionType === 'Flowchart'
        || formQuestions.questionType === 'Table'
        || formQuestions.questionType === 'Sentence Completion One-Two Sentence'
        || formQuestions.questionType === 'Summary Completion Fill Words'
    ) {
        return {
            ...rest,
            questionAnswers: fromTextBaseInLineForm(formQuestions.questionAnswers)
        }
    }

    throw new Error("Unsupported question form");

}

const fromYesNoNotGivenForm = (questionAnswers: { question: string, answer: string }[]): MultipleChoicesQuestionAnswer => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: yesNoNotGivenAnswers.map(({ name }) => name)
        })),
        answers: questionAnswers.map(questionAnswer => questionAnswer.answer)
    }
}

const fromTrueFalseNotGivenForm = (questionAnswers: { question: string, answer: string }[]): MultipleChoicesQuestionAnswer => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: trueFalseGivenAnswers.map(({ name }) => name)
        })),
        answers: questionAnswers.map(questionAnswer => questionAnswer.answer)
    }
}

const fromSingleChoiceForm = (questionAnswers: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]): MultipleChoicesQuestionAnswer => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: questionAnswer.options.map(item => item.option)
        })),
        answers: questionAnswers.flatMap(questionAnswer => questionAnswer.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}

const fromMultiChoicesForm = (questionAnswers: { question: string, options: Array<{ option: string, isAnswer: boolean }> }[]): MultipleChoicesQuestionAnswer => {
    return {
        questions: questionAnswers.map(questionAnswer => ({
            question: questionAnswer.question,
            answerOptions: questionAnswer.options.map(item => item.option)
        })),
        answers: questionAnswers.flatMap(questionAnswer => questionAnswer.options.filter(option => option.isAnswer)).map(item => item.option)
    }
}

const fromOptionsSelectionNewLineForm = (questionAnswers: {
    options: string[]
    questions: Array<{ question: string, answer: string }>
}): OptionsSelectionNewLineQuestionAnswer => {
    return {
        answerOptions: questionAnswers.options,
        questions: questionAnswers.questions.map(question => question.question),
        answers: questionAnswers.questions.map(question => question.answer),
    }
}

const fromOptionsSelectionInLineForm = (questionAnswers: {
    summary: string,
    answerOptions: string[],
    answers: string[],
}): OptionsSelectionInLineQuestionAnswer => {
    return questionAnswers
}

const fromTextBasedInLineMultipleQuestionsForm = (questionAnswers: Array<{ summary: string, answer: string }>): TextBasedInLineMultipleQuestionQuestionAnswer => {
    return {
        summary: questionAnswers.map(({ summary }) => summary),
        answers: questionAnswers.map(({ answer }) => answer),
    }
}

const fromTextBaseNewLineForm = (questionAnswers: { question: string, answer: string }[]): TextBasedNewLineQuestionAnswer => {
    return {
        questions: questionAnswers.map(({ question }) => question),
        answers: questionAnswers.map(({ answer }) => answer)
    }
}

const fromTextBaseInLineForm = (questionAnswers: { summary: string, answers: string[] }): TextBasedInLineQuestionAnswer => {
    return questionAnswers
}

export const toFormQuestionContent = (questionContent: QuestionContent): FormQuestionContent => {
    const { id, createAt, questions, ...rest } = questionContent

    return {
        ...rest,
        questions: questions.map(question => toFormQuestion(question))
    }
}

export const toFormQuestion = (question: Question): FormQuestion => {
    const { questionAnswers, ...rest } = question
    if (question.questionType === 'Yes/No/Not Given') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toYesNoNotGivenForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'True/False/Not Given') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toTrueFalseNotGivenForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Multiple Choices One Answer') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toSingleChoiceForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Multiple Choices Multiple Answers') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toMultiChoicesForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Matching Features'
        || question.questionType === 'Matching Heading'
        || question.questionType === 'Matching Sentence Endings'
        || question.questionType === 'Which Paragraph Contains'
    ) {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toOptionsSelectionNewLineForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Summary Completion Select Words') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toOptionsSelectionInLineForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Sentence Completion Paragraph') {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toTextBasedInLineMultipleQuestionsForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Short-answer questions One-Two Sentence'
        || question.questionType === 'Short-answer questions Paragraph'
    ) {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toTextBaseNewLineForm(question.questionAnswers)
        }
    }

    if (question.questionType === 'Diagram'
        || question.questionType === 'Flowchart'
        || question.questionType === 'Table'
        || question.questionType === 'Summary Completion Fill Words'
        || question.questionType === 'Sentence Completion One-Two Sentence'
    ) {
        return {
            ...rest,
            questionType: question.questionType,
            questionAnswers: toTextBaseInLineForm(question.questionAnswers)
        }
    }

    throw new Error("Unsupported question type");

}

const toYesNoNotGivenForm = (questionAnswers: MultipleChoicesQuestionAnswer): Array<{ question: string, answer: string }> => {
    const answers = questionAnswers.answers
    return questionAnswers.questions.map(({ question }, index) => ({
        question,
        answer: answers[index]
    }))
}

const toTrueFalseNotGivenForm = (questionAnswers: MultipleChoicesQuestionAnswer): Array<{ question: string, answer: string }> => {
    const answers = questionAnswers.answers
    return questionAnswers.questions.map(({ question }, index) => ({
        question,
        answer: answers[index]
    }))
}

const toSingleChoiceForm = (questionAnswers: MultipleChoicesQuestionAnswer): Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }> => {
    const answers = questionAnswers.answers
    return questionAnswers.questions.map(({ question, answerOptions }, index) => ({
        question,
        options: answerOptions.map(option => ({
            option,
            isAnswer: option === answers[index]
        }))
    }))
}

const toMultiChoicesForm = (questionAnswers: MultipleChoicesQuestionAnswer): Array<{ question: string, options: Array<{ option: string, isAnswer: boolean }> }> => {
    const answers = questionAnswers.answers
    return questionAnswers.questions.map(({ question, answerOptions }) => ({
        question,
        options: answerOptions.map(option => ({
            option,
            isAnswer: answers.includes(option)
        }))
    }))
}

const toOptionsSelectionNewLineForm = (questionAnswers: OptionsSelectionNewLineQuestionAnswer): {
    options: string[]
    questions: Array<{ question: string, answer: string }>
} => {
    const answers = questionAnswers.answers
    const questions = questionAnswers.questions
    const options = questionAnswers.answerOptions

    return {
        options,
        questions: questions.map((question, index) => ({
            question,
            answer: answers[index]
        }))
    }
}

const toOptionsSelectionInLineForm = (questionAnswers: OptionsSelectionInLineQuestionAnswer): {
    summary: string,
    answerOptions: string[],
    answers: string[],
} => {
    return questionAnswers
}

const toTextBasedInLineMultipleQuestionsForm = (questionAnswers: TextBasedInLineMultipleQuestionQuestionAnswer): Array<{ summary: string, answer: string }> => {
    const summary = questionAnswers.summary
    const answers = questionAnswers.answers

    return summary.map((sum, index) => ({
        summary: sum,
        answer: answers[index]
    }))
}

const toTextBaseNewLineForm = (questionAnswers: TextBasedNewLineQuestionAnswer): Array<{ question: string, answer: string }> => {
    const questions = questionAnswers.questions
    const answers = questionAnswers.answers

    return questions.map((question, index) => ({
        question,
        answer: answers[index]
    }))
}

const toTextBaseInLineForm = (questionAnswers: TextBasedInLineQuestionAnswer): {
    summary: string,
    answers: string[],
} => {
    return questionAnswers
}