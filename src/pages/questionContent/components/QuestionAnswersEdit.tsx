import { useRecordContext } from "react-admin"
import { isOneOf } from "../../../helper/typeguard"
import { Question, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../types/question"
import MultipleChoicesQuestionAnswersEdit from "./questionAnswersEdit/MultipleChoicesQuestionAnswersEdit"
import OptionsSelectionInLineQuestionAnswersEdit from "./questionAnswersEdit/OptionsSelectionInLineQuestionAnswersEdit"
import OptionsSelectionNewLineQuestionAnswersEdit from "./questionAnswersEdit/OptionsSelectionNewLineQuestionAnswersEdit"
import TextBasedInLineMultipleQuestionTypeQuestionAnswersEdit from "./questionAnswersEdit/TextBasedInLineMultipleQuestionTypeQuestionAnswersEdit"
import TextBaseInLineQuestionAnswersEdit from "./questionAnswersEdit/TextBaseInLineQuestionAnswersEdit"
import TextBaseNewLineQuestionAnswersEdit from "./questionAnswersEdit/TextBaseNewLineQuestionAnswersEdit"
import { multiChoicesQuestionType } from "../../../helper/constants"

const QuestionAnswersEdit = () => {
    const { scopedFormData } = useRecordContext<{ scopedFormData?: Question }>()

    if (isOneOf(multiChoicesQuestionType)(scopedFormData?.questionType)) {
        return <MultipleChoicesQuestionAnswersEdit />
    }

    if (isOneOf(optionsSelectionInLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <OptionsSelectionInLineQuestionAnswersEdit />
        )
    }

    if (isOneOf(optionsSelectionNewLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <OptionsSelectionNewLineQuestionAnswersEdit />
        )
    }

    if (isOneOf(textBasedInLineMultipleQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBasedInLineMultipleQuestionTypeQuestionAnswersEdit />
        )
    }

    if (isOneOf(textBasedInlineQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBaseInLineQuestionAnswersEdit />
        )
    }

    if (isOneOf(textBasedNewLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBaseNewLineQuestionAnswersEdit />
        )
    }

    return null
}

export default QuestionAnswersEdit