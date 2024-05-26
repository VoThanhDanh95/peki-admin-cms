import { FunctionField, Labeled, SimpleShowLayout } from "react-admin"
import { TextBaseInLineMultipleQuestion } from "../../../../types/questionAnswer"
import { Question } from "../../../../types/question"
import { Box, Stack, Typography } from '@mui/material';

const TextBasedInLineMultipleQuestionTypeQuestionAnswersDetail = () => {
    return (
        <Labeled color="primary.main">
            <FunctionField
                label="Questions"
                render={(r: Question) => {
                    const summaries = (r.questionAnswers as TextBaseInLineMultipleQuestion).summary
                    const answers = r.questionAnswers.answers;

                    return summaries.map((summary, index) => {
                        return (
                            <Box key={index}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`${index + 1}. ${summary}`}</Typography>
                                <Stack direction='row'>
                                    <Typography
                                        variant="body2"
                                        style={{ marginLeft: 10 }}
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