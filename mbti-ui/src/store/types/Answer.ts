export type Answer = {
    text:
        | 'Completely disagree'
        | 'Strongly disagree'
        | 'Disagree'
        | 'Neutral'
        | 'Agree'
        | 'Strongly agree'
        | 'Completely disagree';
    point: -3 | -2 | -1 | 0 | 1 | 2 | 3;
};
