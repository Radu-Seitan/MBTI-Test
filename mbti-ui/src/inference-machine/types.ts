export interface Answer {
    id: number;
    points: number;
}
type DirectionName = 'Extraverted' | 'Intuitive' | 'Thinking' | 'Perceiving';
type AllPersonalities =
    | DirectionName
    | 'Introverted'
    | 'Sensing'
    | 'Feeling'
    | 'Judging';

export interface QuestionType {
    id: number;
    text: string;
    direction: {
        name: DirectionName;
        initial: string;
    };
    keyed: '+' | '-';
}

export interface PersonalityTypeStatistics {
    totalPoints: number;
    totalQuestionsAsked: number;
}

export type PersonalityResults = {
    [k in DirectionName]: PersonalityTypeStatistics;
};

export type PersonalityStatistics = {
    [k in AllPersonalities]: number;
};
