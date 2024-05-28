import { Box, Stack, Typography } from '@mui/material';
import { FunctionField, Labeled, RichTextField } from "react-admin";
import { Question } from "../../../../types/question";
import { TextBasedInLineMultipleQuestionQuestionAnswer } from "../../../../types/questionAnswer";

const TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail = () => {
    return (
        <Labeled color="primary.main">
            <FunctionField
                label="Questions"
                render={(r: Question) => {
                    const summaries = (r.questionAnswers as TextBasedInLineMultipleQuestionQuestionAnswer).summary
                    const answers = r.questionAnswers.answers;

                    return summaries.map((summary, index) => {
                        return (
                            <Box key={index} style={{ marginLeft: 10, marginBottom: 5 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`Question #${index + 1}`}</Typography>
                                <RichTextField record={{ summary }} source="summary" />
                                <Stack direction='row'>
                                    <Typography
                                        variant="body2"
                                        color='info.main'
                                    >
                                        Answer:
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ marginLeft: 5 }}
                                    >
                                        {answers[index]}
                                    </Typography>
                                </Stack>
                            </Box>
                        )
                    })
                }}
            />
        </Labeled>
    )
}

export default TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail