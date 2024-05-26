import { Box, Typography } from '@mui/material';
import { FunctionField, Labeled } from "react-admin";
import { Question } from "../../../../types/question";
import { MultipleChoices } from "../../../../types/questionAnswer";

const MultipleChoicesQuestionAnswersDetail = () => {
    return (
        <Labeled color="primary.main">
            <FunctionField
                label="Questions"
                render={(r: Question) => {
                    const questionsAndOptions = (r.questionAnswers as MultipleChoices).questions
                    const answers = r.questionAnswers.answers

                    return questionsAndOptions.map(({ question, answerOptions }, index) => {
                        const answer = answers[index]

                        return (
                            <Box key={index}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`${index + 1}. ${question}`}</Typography>
                                {answerOptions.map((value, optionIndex) => {
                                    const isAnswer =
                                        r.questionType === 'Multiple Choices Multiple Answers'
                                            ? answers.includes(value)
                                            : answer === value

                                    return <Typography
                                        variant="body2"
                                        key={value}
                                        style={{ marginLeft: 10 }}
                                        color={isAnswer ? 'info.main' : 'text.secondary'}
                                    >
                                        {`${optionIndex + 1}. ${value}`}
                                    </Typography>
                                })}
                            </Box>
                        )
                    })
                }}
            />
        </Labeled>

    );
}

export default MultipleChoicesQuestionAnswersDetail