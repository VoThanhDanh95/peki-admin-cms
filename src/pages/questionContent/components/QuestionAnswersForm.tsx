import { useEffect, useMemo } from "react"
import { useWatch, useFormContext } from 'react-hook-form'
import { isOneOf } from "../../../helper/typeguard";
import MultipleChoicesQuestionAnswersForm from "./questionAnswersForm/MultipleChoicesQuestionAnswersForm";
import { useRecordContext, useSimpleFormIteratorItem } from "react-admin";
import { choiceBasedQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../helper/constants";
import OptionsSelectionNewLineQuestionAnswersForm from "./questionAnswersForm/OptionsSelectionNewLineQuestionAnswersForm";
import TextBaseInLineQuestionAnswersForm from "./questionAnswersForm/TextBaseInLineQuestionAnswersForm";
import TextBasedInLineMultipleQuestionsQuestionAnswersForm from "./questionAnswersForm/TextBasedInLineMultipleQuestionsQuestionAnswersForm";
import TextBaseNewLineQuestionAnswersForm from "./questionAnswersForm/TextBaseNewLineQuestionAnswersForm";
import OptionsSelectionInLineQuestionAnswersForm from "./questionAnswersForm/OptionsSelectionInLineQuestionAnswersForm";
import { FormQuestionContent } from "../../../types/forms/questionContent";

const QuestionAnswersForm = () => {
    const { index } = useSimpleFormIteratorItem()
    const questionType = useWatch({ name: `questions.${index}.questionType` })
    const record = useRecordContext<FormQuestionContent>()
    const { setValue } = useFormContext()

    useEffect(() => {
        if (questionType !== record?.questions[index]?.questionType) {
            if (isOneOf(choiceBasedQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, [])
            }

            if (isOneOf(optionsSelectionNewLineQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, {})
            }

            if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, {})
            }

            if (isOneOf(textBasedInlineQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, {})
            }

            if (isOneOf(textBasedInLineMultipleQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, [])
            }

            if (isOneOf(textBasedNewLineQuestionType)(questionType)) {
                setValue(`questions.${index}.questionAnswers`, [])
            }
        }

    }, [questionType])

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

        if (isOneOf(optionsSelectionInLineQuestionType)(questionType)) {
            return (
                <OptionsSelectionInLineQuestionAnswersForm />
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


        return null;
    }, [questionType, index])
}

export default QuestionAnswersForm