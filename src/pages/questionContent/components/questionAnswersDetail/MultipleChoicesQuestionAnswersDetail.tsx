import { Box, Typography } from '@mui/material';
import { FunctionField, Labeled } from "react-admin";
import { Question } from "../../../../types/question";
import { MultipleChoicesQuestionAnswer } from "../../../../types/questionAnswer";
import { trueFalseGivenAnswers, yesNoNotGivenAnswers } from '../../../../helper/constants';

const MultipleChoicesQuestionAnswersDetail = () => {
    return (
        <Labeled color="primary.main">
            <FunctionField
                label="Questions"
                render={(r: Question) => {
                    const questionsAndOptions = (r.questionAnswers as MultipleChoicesQuestionAnswer).questions
                    const answers = r.questionAnswers.answers

                    return questionsAndOptions.map(({ question, answerOptions }, index) => {
                        const answer = answers[index]

                        return (
                            <Box key={index}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`${index + 1}. ${question}`}</Typography>
                                {answerOptions.map((value, optionIndex) => {
                                    let isAnswer = false

                                    switch (r.questionType) {
                                        case 'Multiple Choices Multiple Answers':
                                            isAnswer = answers.includes(value);
                                            break;

                                        case 'Yes/No/Not Given':
                                            isAnswer = !!yesNoNotGivenAnswers.find(
                                                item => item.id === answer && item.name === value
                                            )
                                            break;
                                        case 'True/False/Not Given':
                                            isAnswer = !!trueFalseGivenAnswers.find(
                                                item => item.id === answer && item.name === value
                                            )
                                            break;

                                        default:
                                            isAnswer = answer === value
                                            break;
                                    }

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