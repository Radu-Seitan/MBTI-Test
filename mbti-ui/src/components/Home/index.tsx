import { FC, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';

import knowledge_base from '../../../../knowledge_base/knowledge_base.json';

import './Home.scss';
import {
    Answer,
    PersonalityStatistics,
    QuestionType,
} from '../../inference-machine/types';
import { QuestionList } from './QuestionList';
import { InferenceMachine } from '../../inference-machine/inference.machine';
import { PredictedPersonalityModal } from './PredictedPersonalityModal';

export const Home: FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const questions: QuestionType[] =
        knowledge_base.questions as QuestionType[];
    const answers: Answer[] = [];
    const [personalityStatistics, setPersonalityStatistics] =
        useState<PersonalityStatistics>();
    const inferenceMachine = new InferenceMachine();

    useEffect(() => {
        console.log(personalityStatistics);
    });

    return (
        <Box className={'home-container'}>
            <Button
                variant="contained"
                color="secondary"
                className={'submit-button'}
                onClick={() => {
                    setPersonalityStatistics(
                        inferenceMachine.processAnswers(answers)
                    );
                    handleOpen();
                }}
            >
                Submit
            </Button>
            <Box className={'background-image'}></Box>
            <QuestionList questions={questions} answers={answers} />
            {personalityStatistics && (
                <PredictedPersonalityModal
                    personalityStatistics={personalityStatistics}
                    open={open}
                    onClose={handleClose}
                />
            )}
        </Box>
    );
};
