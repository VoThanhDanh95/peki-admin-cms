import { useRecordContext } from "react-admin"
import { isOneOf } from "../../../helper/typeguard"
import { Question, multiChoicesQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../types/question"
import MultipleChoicesQuestionAnswers from "./questionAnswersDetail/MultipleChoicesQuestionAnswers"
import TextBaseInLineQuestionAnswers from "./questionAnswersDetail/TextBaseInLineQuestionAnswers"
import TextBaseNewLineQuestionAnswers from "./questionAnswersDetail/TextBaseNewLineQuestionAnswers"
import OptionsSelectionInLineQuestionAnswers from "./questionAnswersDetail/OptionsSelectionInLineQuestionAnswers"
import OptionsSelectionNewLineQuestionAnswers from "./questionAnswersDetail/OptionsSelectionNewLineQuestionAnswers"
import TextBasedInLineMultipleQuestionTypeQuestionAnswers from "./questionAnswersDetail/TextBasedInLineMultipleQuestionTypeQuestionAnswers"

const QuestionAnswersDetail = () => {
    const { questionType } = useRecordContext<Question>()

    if (isOneOf(multiChoicesQuestionType)(questionType)) {
        return (
            <MultipleChoicesQuestionAnswers />
        )
    }

    if (isOneOf(textBasedInlineQuestionType)(questionType)) {
        return (
            <TextBaseInLineQuestionAnswers />
        )
    }

    if (isOneOf(textBasedNewLineQuestionType)(questionType)) {
        return (
            <TextBaseNewLineQuestionAnswers />
        )
    }

    if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
        return (
            <OptionsSelectionInLineQuestionAnswers />
        )
    }

    if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
        return (
            <OptionsSelectionNewLineQuestionAnswers />
        )
    }

    if (isOneOf(textBasedInLineMultipleQuestionType)(questionType)) {
        return (
            <TextBasedInLineMultipleQuestionTypeQuestionAnswers />
        )
    }

    return null
}

export default QuestionAnswersDetail