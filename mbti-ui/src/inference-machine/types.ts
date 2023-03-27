export interface Answer {
    points: number;
}

type DirectionName = 'Extraverted' | 'Intuitive' | 'Thinking' |  'Perceiving';

export interface Question {
    id: number;
    text: string;
    direction: {
        name: DirectionName;
        initial: string;
    };
    keyed: "+" | "-";
}

export interface PersonalityTypeStatistics {
    totalPoints: number;
    totalQuestionsAsked: number;
}

export type PersonalityResults = {
    [k in DirectionName]: PersonalityTypeStatistics;
}

