import { useMemo } from "react"
import { useWatch } from 'react-hook-form'
import { isOneOf } from "../../../helper/typeguard";
import MultipleChoicesQuestionAnswersForm from "./questionAnswersForm/MultipleChoicesQuestionAnswersForm";
import { useSimpleFormIteratorItem } from "react-admin";
import { choiceBasedQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../helper/constants";
import OptionsSelectionNewLineQuestionAnswersForm from "./questionAnswersForm/OptionsSelectionNewLineQuestionAnswersForm";
import TextBaseInLineQuestionAnswersForm from "./questionAnswersForm/TextBaseInLineQuestionAnswersForm";
import TextBasedInLineMultipleQuestionsQuestionAnswersForm from "./questionAnswersForm/TextBasedInLineMultipleQuestionsQuestionAnswersForm";
import TextBaseNewLineQuestionAnswersForm from "./questionAnswersForm/TextBaseNewLineQuestionAnswersForm";
import OptionsSelectionInLineQuestionAnswersForm from "./questionAnswersForm/OptionsSelectionInLineQuestionAnswersForm";

const QuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })

    return useMemo(() => {
        if (isOneOf(choiceBasedQuestionType)(questionType)) {
            return (
                <MultipleChoicesQuestionAnswersForm />
            )
        }

        if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
            return (
                <OptionsSelectionNewLineQuestionAnswersForm />
            )
        }

        if (isOneOf(textBasedInlineQuestionType)(questionType)) {
            return (
                <TextBaseInLineQuestionAnswersForm />
            )
        }

        if (isOneOf(textBasedInLineMultipleQuestionType)(questionType)) {
            return (
                <TextBasedInLineMultipleQuestionsQuestionAnswersForm />
            )
        }

        if (isOneOf(textBasedNewLineQuestionType)(questionType)) {
            return (
                <TextBaseNewLineQuestionAnswersForm />
            )
        }

        if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
            return (
                <OptionsSelectionInLineQuestionAnswersForm />
            )
        }

        return null;
    }, [questionType, index])
}

export default QuestionAnswersForm