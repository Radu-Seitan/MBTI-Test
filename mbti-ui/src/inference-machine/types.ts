export interface Answer {
    points: number;
}

type DirectionName = 'Extraverted' | 'Introverted' | 'Sensing' | 'Intuitive' | 'Thinking' | 'Feeling' | 'Judging' | 'Perceiving';

export interface Question {
    id: number;
    text: string;
    direction: {
        name: DirectionName;
        initial: string;
    }
}

export interface PersonalityTypeStatistics {
    totalPoints: number;
    totalQuestionsAsked: number;
}

export type PersonalityResults = {
    [k in DirectionName]: PersonalityTypeStatistics;
}

