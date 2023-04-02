import { Direction } from '@mui/material';

export type Question = {
    id: number;
    text: string;
    direction: Direction;
    keyed: '+' | '-';
};
