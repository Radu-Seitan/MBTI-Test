import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Pagination, Stack } from '@mui/material';

import knowledge_base from '../../../../knowledge_base/knowledge_base.json';

import './Home.scss';
import { Answer, QuestionType } from '../../inference-machine/types';
import { Question } from './Question';
import { QuestionList } from './QuestionList';

export const Home: FC = () => {
    const { t } = useTranslation();
    const questions: QuestionType[] =
        knowledge_base.questions as QuestionType[];
    const answers: Answer[] = [];

    return (
        <>
            <Box className={'background-image'}></Box>
            <QuestionList questions={questions} answers={answers} />
        </>
    );
};
