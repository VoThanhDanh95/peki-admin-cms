import { FunctionField, Labeled, RichTextField } from "react-admin"
import { Question } from "../../../../types/question"
import { Typography } from '@mui/material';

const TextBaseInLineQuestionAnswersDetail = () => {
    return (
        <>
            <Labeled color="primary.main" fullWidth>
                <RichTextField label="Summary" source="questionAnswers.summary" />
            </Labeled>
            <Labeled color="primary.main">
                <FunctionField
                    label="Answers"
                    render={(r: Question) => r.questionAnswers.answers.map((answer, index) =>
                        <Typography variant="body2" key={index}>{`${index + 1}. ${answer}`}</Typography>
                    )}
                />
            </Labeled>
        </>
    )
}

export default TextBaseInLineQuestionAnswersDetail