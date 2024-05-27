import { useRecordContext } from "react-admin"
import { Question, multiChoicesQuestionType, optionsSelectionInLineQuestionType, optionsSelectionNewLineQuestionType, textBasedInLineMultipleQuestionType, textBasedInlineQuestionType, textBasedNewLineQuestionType } from "../../../types/question"
import { isOneOf } from "../../../helper/typeguard"
import MultipleChoicesQuestionAnswersCreate from "./questionAnswersCreate/MultipleChoicesQuestionAnswersCreate"
import OptionsSelectionInLineQuestionAnswersCreate from "./questionAnswersCreate/OptionsSelectionInLineQuestionAnswersCreate"
import OptionsSelectionNewLineQuestionAnswersCreate from "./questionAnswersCreate/OptionsSelectionNewLineQuestionAnswersCreate"
import TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate from "./questionAnswersCreate/TextBasedInLineMultipleQuestionTypeQuestionAnswersCreate"
import TextBaseInLineQuestionAnswersCreate from "./questionAnswersCreate/TextBaseInLineQuestionAnswersCreate"
import TextBaseNewLineQuestionAnswersCreate from "./questionAnswersCreate/TextBaseNewLineQuestionAnswersCreate"
import { RichTextInput } from "ra-input-rich-text"
import { useMemo } from "react"
import { ArrayInput, Button, FormDataConsumer, NumberInput, RecordContextProvider, SelectInput, SimpleFormIterator, TabbedForm, TextInput, useSimpleFormIteratorItem } from "react-admin"
import { allQuestionType } from "../../../types/question"
import { Stack, Accordion, Typography } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useWatch } from 'react-hook-form'
const QuestionAnswersCreate = () => {
    console.log("RENDER QuestionAnswersCreate");
    // const { scopedFormData } = useRecordContext<{ scopedFormData?: Question }>()
    const questionType = useWatch({ name: 'questionType' })

    // if (isOneOf(multiChoicesQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <MultipleChoicesQuestionAnswersCreate />
    //     )
    // }

    // if (isOneOf(optionsSelectionInLineQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <OptionsSelectionInLineQuestionAnswersCreate />
    //     )
    // }

    // if (isOneOf(optionsSelectionNewLineQuestionType)(scopedFormData?.questionType)) {
    //     return (
    //         <OptionsSelectionNewLineQuestionAnswersCreate />
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

    return useMemo(() => <MultipleChoicesQuestionAnswersCreate />, [questionType])
}

export default QuestionAnswersCreate