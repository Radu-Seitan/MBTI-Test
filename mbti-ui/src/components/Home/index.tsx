import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Pagination, Stack } from '@mui/material';

import knowledge_base from '../../../../knowledge_base/knowledge_base.json';

import './Home.scss';
import { Answer, QuestionType } from '../../inference-machine/types';
import { QuestionList } from './QuestionList';
import { InferenceMachine } from '../../inference-machine/inference.machine';

export const Home: FC = () => {
    const { t } = useTranslation();
    const questions: QuestionType[] =
        knowledge_base.questions as QuestionType[];
    const answers: Answer[] = [];
    const inferenceMachine = new InferenceMachine();

    return (
        <Box className={'home-container'}>
            <Button
                variant="contained"
                color="secondary"
                className={'submit-button'}
                onClick={() => {
                    console.log(inferenceMachine.processAnswers(answers));
                }}
            >
                Submit
            </Button>
            <Box className={'background-image'}></Box>
            <QuestionList questions={questions} answers={answers} />
        </Box>
    );
};
