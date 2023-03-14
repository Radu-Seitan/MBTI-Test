import { Answer, PersonalityResults, Question } from "./types";
import * as knowledgeBase from '../../../knowledge_base/knowledge_base.json'
export class InferenceMachine {
    public processAnswers(answers: Answer[]): PersonalityResults {
        const questions: Question[] = knowledgeBase.question as Question[];
        const personalityResults: PersonalityResults = this.initializePersonalitiesResults();
        answers.forEach((answer, index) => {
            const answerDirection = questions[index].direction.name;

            personalityResults[answerDirection].totalPoints += answer.points;
            personalityResults[answerDirection].totalQuestionsAsked ++;
        });

        return personalityResults;
    }

    private initializePersonalitiesResults(): PersonalityResults {
        return {
            Extraverted: {totalPoints:0, totalQuestionsAsked: 0},
            Introverted: {totalPoints:0, totalQuestionsAsked: 0},
            Sensing: {totalPoints:0, totalQuestionsAsked: 0},
            Intuitive: {totalPoints:0, totalQuestionsAsked: 0},
            Thinking: {totalPoints:0, totalQuestionsAsked: 0},
            Feeling: {totalPoints:0, totalQuestionsAsked: 0},
            Judging: {totalPoints:0, totalQuestionsAsked: 0},
            Perceiving: {totalPoints:0, totalQuestionsAsked: 0}
        }
    }
}