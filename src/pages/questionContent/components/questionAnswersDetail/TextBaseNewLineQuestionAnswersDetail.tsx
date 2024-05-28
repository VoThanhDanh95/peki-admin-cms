import { Box, Stack, Typography } from '@mui/material';
import { FunctionField, Labeled } from "react-admin";
import { Question } from "../../../../types/question";
import { TextBasedNewLineQuestionAnswer } from "../../../../types/questionAnswer";

const TextBaseNewLineQuestionAnswersDetail = () => {
    return (
        <>
            <Labeled color="primary.main">
                <FunctionField
                    label="Questions"
                    render={(r: Question) => {
                        const questions = (r.questionAnswers as TextBasedNewLineQuestionAnswer).questions
                        const answers = r.questionAnswers.answers;

                        return questions.map((question, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`${index + 1}. ${question}`}</Typography>
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
        </>
    )
}

export default TextBaseNewLineQuestionAnswersDetail