import { Answer, PersonalityResults, Question } from "./types";
import * as knowledgeBase from '../../../knowledge_base/knowledge_base.json'
export class InferenceMachine {
    public processAnswers(answers: Answer[]): PersonalityResults {
        const questions: Question[] = knowledgeBase.question as Question[];
        const personalityResults: PersonalityResults = this.initializePersonalitiesResults();
        answers.forEach((answer, index) => {
            const question: Question = questions[index];
            const signOfAddition = question.keyed === '+' ? 1 : -1;
            const answerDirectionName = question.direction.name;

            personalityResults[answerDirectionName].totalPoints += signOfAddition * answer.points;
            personalityResults[answerDirectionName].totalQuestionsAsked ++;
        });

        return personalityResults;
    }

    private initializePersonalitiesResults(): PersonalityResults {
        return {
            Extraverted: {totalPoints:0, totalQuestionsAsked: 0},
            Intuitive: {totalPoints:0, totalQuestionsAsked: 0},
            Thinking: {totalPoints:0, totalQuestionsAsked: 0},
            Perceiving: {totalPoints:0, totalQuestionsAsked: 0}
        }
    }
}