import { useRecordContext } from "react-admin"
import { Question, multiChoicesQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../types/question"
import { isOneOf } from "../../../helper/typeguard"
import MultipleChoicesQuestionAnswersCreate from "./questionAnswersCreate/MultipleChoicesQuestionAnswersCreate"
import OptionsSelectionInLineQuestionAnswersCreate from "./questionAnswersCreate/OptionsSelectionInLineQuestionAnswersCreate"
import OptionsSelectionNewLineQuestionAnswersCreate from "./questionAnswersCreate/OptionsSelectionNewLineQuestionAnswersCreate"
import TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate from "./questionAnswersCreate/TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate"
import TextBaseInLineQuestionAnswersCreate from "./questionAnswersCreate/TextBaseInLineQuestionAnswersCreate"
import TextBaseNewLineQuestionAnswersCreate from "./questionAnswersCreate/TextBaseNewLineQuestionAnswersCreate"

const QuestionAnswersCreate = () => {
    const { scopedFormData } = useRecordContext<{ scopedFormData?: Question }>()

    if (isOneOf(multiChoicesQuestionType)(scopedFormData?.questionType)) {
        return (
            <MultipleChoicesQuestionAnswersCreate />
        )
    }

    if (isOneOf(optionsSelectionInLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <OptionsSelectionInLineQuestionAnswersCreate />
        )
    }

    if (isOneOf(optionsSelectionNewLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <OptionsSelectionNewLineQuestionAnswersCreate />
        )
    }

    if (isOneOf(textBasedInLineMultipleQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate />
        )
    }

    if (isOneOf(textBasedInlineQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBaseInLineQuestionAnswersCreate />
        )
    }

    if (isOneOf(textBasedNewLineQuestionType)(scopedFormData?.questionType)) {
        return (
            <TextBaseNewLineQuestionAnswersCreate />
        )
    }

    return null
}

export default QuestionAnswersCreate