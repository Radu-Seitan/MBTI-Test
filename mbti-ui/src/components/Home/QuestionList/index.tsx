import { FC, useState, useEffect } from 'react';
import { Answer, QuestionType } from '../../../inference-machine/types';
import { Stack, Pagination } from '@mui/material';
import { Question } from '../Question';

interface QuestionListProps {
    questions: QuestionType[];
    answers: Answer[];
}

export const QuestionList: FC<QuestionListProps> = ({ questions, answers }) => {
    const itemsPerPage = 2; // set the number of items per page
    const [page, setPage] = useState(1); // initialize page state to 1

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value); // update page state when user clicks on a new page
    };

    // calculate the start and end index for the questions to be displayed on the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const upsertAnswer = (answerParam: Answer) => {
        const existingAnswerIndex = answers.findIndex(
            (answer) => answer.id === answerParam.id
        );

        if (existingAnswerIndex !== -1) {
            // Replace the existing answer with the new answer
            answers[existingAnswerIndex].points = answerParam.points;
        } else {
            // Add the new answer to the array
            answers.push(answerParam);
        }
    };

    const computeInitialValue = (question: QuestionType) => {
        const existingAnswerIndex = answers.findIndex(
            (answer) => answer.id === question.id
        );

        if (existingAnswerIndex !== -1) {
            return answers[existingAnswerIndex].points;
        } else {
            return 0;
        }
    };

    return (
        <>
            {questions &&
                questions.slice(startIndex, endIndex).map((question) => {
                    return (
                        <Question
                            key={question.id}
                            question={question}
                            initialValue={computeInitialValue(question)}
                            onChange={(value: number) => {
                                const answer: Answer = {
                                    id: question.id,
                                    points: value,
                                };

                                upsertAnswer(answer);
                            }}
                        />
                    );
                })}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Pagination
                    count={Math.ceil(questions.length / itemsPerPage)} // calculate the total number of pages
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                    size="large"
                    className={'question-pagination'}
                />
            </Stack>
        </>
    );
};
