import { Stack } from '@mui/material';
import { FunctionField, Labeled, RichTextField } from "react-admin";
import { Question } from "../../../../types/question";
import { OptionsSelectionInLineQuestionAnswer } from "../../../../types/questionAnswer";

const OptionsSelectionInLineQuestionAnswersDetail = () => {
    return (
        <Stack>
            <Labeled color="primary.main">
                <RichTextField label="Summary" source="questionAnswers.summary" />
            </Labeled>
            <Labeled color="primary.main">
                <FunctionField
                    label="Options"
                    render={(r: Question) => (r.questionAnswers as OptionsSelectionInLineQuestionAnswer).answerOptions.map((option, index) => <div key={index}>{`${index + 1}. ${option}`}</div>)}
                />
            </Labeled>
            <Labeled color="primary.main">
                <FunctionField
                    label="Answers"
                    render={(r: Question) => r.questionAnswers.answers.map((answer, index) => <div key={index}>{`${index + 1}. ${answer}`}</div>)}
                />
            </Labeled>
        </Stack>
    )
}

export default OptionsSelectionInLineQuestionAnswersDetail