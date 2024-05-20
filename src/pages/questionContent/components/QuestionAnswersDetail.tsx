import { RecordContextProvider, useRecordContext } from "react-admin"
import { QuestionType, multiChoicesQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../types/question"
import { QuestionAnswer } from "../../../types/questionAnswer"
import { isOneOf } from "../../../helper/typeguard"
import MultipleChoicesQuestionAnswers from "./questionAnswers/MultipleChoicesQuestionAnswers"
import TextBaseInLineQuestionAnswers from "./questionAnswers/TextBaseInLineQuestionAnswers"
import TextBaseNewLineQuestionAnswers from "./questionAnswers/TextBaseNewLineQuestionAnswers"
import OptionsSelectionInLineQuestionAnswers from "./questionAnswers/OptionsSelectionInLineQuestionAnswers"
import OptionsSelectionNewLineQuestionAnswers from "./questionAnswers/OptionsSelectionNewLineQuestionAnswers"
import TextBasedInLineMultipleQuestionTypeQuestionAnswers from "./questionAnswers/TextBasedInLineMultipleQuestionTypeQuestionAnswers"

const QuestionAnswersDetail = () => {
    const [questionType, questionAnswers] = useRecordContext<[QuestionType, QuestionAnswer]>()

    if (isOneOf(multiChoicesQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <MultipleChoicesQuestionAnswers />
            </RecordContextProvider>
        )
    }

    if (isOneOf(textBasedInlineQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <TextBaseInLineQuestionAnswers />
            </RecordContextProvider>
        )
    }

    if (isOneOf(textBasedNewLineQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <TextBaseNewLineQuestionAnswers />
            </RecordContextProvider>
        )
    }

    if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <OptionsSelectionInLineQuestionAnswers />
            </RecordContextProvider>
        )
    }

    if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <OptionsSelectionNewLineQuestionAnswers />
            </RecordContextProvider>
        )
    }

    if (isOneOf(textBasedInLineMultipleQuestionType)(questionType)) {
        return (
            <RecordContextProvider value={questionAnswers}>
                <TextBasedInLineMultipleQuestionTypeQuestionAnswers />
            </RecordContextProvider>
        )
    }

    return null
}

export default QuestionAnswersDetail