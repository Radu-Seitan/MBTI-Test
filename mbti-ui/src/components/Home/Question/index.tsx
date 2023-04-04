import {
    Box,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import { QuestionType } from '../../../inference-machine/types';
import { FC, useEffect, useState } from 'react';

import './Question.scss';

interface QuestionProps {
    question: QuestionType;
    onChange: any;
}

export const Question: FC<QuestionProps> = ({ question, onChange }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <Box className={'question-box'}>
            <Typography className="question-text" textAlign="center">
                {`${question.id + 1}. ${question.text}`}
            </Typography>
            <RadioGroup
                className="radio-group"
                aria-label="quiz"
                name="quiz"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    className="disagree"
                    value={-3}
                    control={<Radio />}
                    label="Completely disagree"
                />
                <FormControlLabel
                    className="disagree"
                    value={-2}
                    control={<Radio />}
                    label="Strongly disagree"
                />
                <FormControlLabel
                    className="disagree"
                    value={-1}
                    control={<Radio />}
                    label="Disagree"
                />
                <FormControlLabel
                    className="neutral"
                    value={0}
                    control={<Radio />}
                    label="Neutral"
                />
                <FormControlLabel
                    className="agree"
                    value={1}
                    control={<Radio />}
                    label="Agree"
                />
                <FormControlLabel
                    className="agree"
                    value={2}
                    control={<Radio />}
                    label="Strongly agree"
                />
                <FormControlLabel
                    className="agree"
                    value={3}
                    control={<Radio />}
                    label="Completely agree"
                />
            </RadioGroup>
        </Box>
    );
};
