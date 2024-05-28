import { useRecordContext } from "react-admin"
import { isOneOf } from "../../../helper/typeguard"
import { Question } from "../../../types/question"
import MultipleChoicesQuestionAnswersDetail from "./questionAnswersDetail/MultipleChoicesQuestionAnswersDetail"
import TextBaseInLineQuestionAnswersDetail from "./questionAnswersDetail/TextBaseInLineQuestionAnswersDetail"
import TextBaseNewLineQuestionAnswersDetail from "./questionAnswersDetail/TextBaseNewLineQuestionAnswersDetail"
import OptionsSelectionInLineQuestionAnswersDetail from "./questionAnswersDetail/OptionsSelectionInLineQuestionAnswersDetail"
import OptionsSelectionNewLineQuestionAnswersDetail from "./questionAnswersDetail/OptionsSelectionNewLineQuestionAnswersDetail"
import TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail from "./questionAnswersDetail/TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail"
import { choiceBasedQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../helper/constants"

const QuestionAnswersDetail = () => {
    const { questionType } = useRecordContext<Question>()

    if (isOneOf(choiceBasedQuestionType)(questionType)) {
        return (
            <MultipleChoicesQuestionAnswersDetail />
        )
    }

    if (isOneOf(textBasedInlineQuestionType)(questionType)) {
        return (
            <TextBaseInLineQuestionAnswersDetail />
        )
    }

    if (isOneOf(textBasedNewLineQuestionType)(questionType)) {
        return (
            <TextBaseNewLineQuestionAnswersDetail />
        )
    }

    if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
        return (
            <OptionsSelectionInLineQuestionAnswersDetail />
        )
    }

    if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
        return (
            <OptionsSelectionNewLineQuestionAnswersDetail />
        )
    }

    if (isOneOf(textBasedInLineMultipleQuestionType)(questionType)) {
        return (
            <TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail />
        )
    }

    return null
}

export default QuestionAnswersDetail