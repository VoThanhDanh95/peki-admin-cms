import { useMemo } from "react"
import { useWatch } from 'react-hook-form'
import { isOneOf } from "../../../helper/typeguard";
import MultipleChoicesQuestionAnswersForm from "./questionAnswersForm/MultipleChoicesQuestionAnswersForm";
import { useSimpleFormIteratorItem } from "react-admin";
import { multiChoicesQuestionType, optionsSelectionNewLineQuestionType } from "../../../helper/constants";
import OptionsSelectionNewLineQuestionAnswersForm from "./questionAnswersForm/OptionsSelectionNewLineQuestionAnswersForm";

const QuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })

    // if (isOneOf(optionsSelectionInLineQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <OptionsSelectionInLineQuestionAnswersCreate />
    //     )
    // }



    // if (isOneOf(textBasedInLineMultipleQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate />
    //     )
    // }

    // if (isOneOf(textBasedInlineQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <TextBaseInLineQuestionAnswersCreate />
    //     )
    // }

    // if (isOneOf(textBasedNewLineQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <TextBaseNewLineQuestionAnswersCreate />
    //     )
    // }

    return useMemo(() => {
        if (isOneOf(multiChoicesQuestionType)(questionType)) {
            return (
                <MultipleChoicesQuestionAnswersForm />
            )
        }

        if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
            return (
                <OptionsSelectionNewLineQuestionAnswersForm />
            )
        }

        return null;
    }, [questionType, index])
}

export default QuestionAnswersForm