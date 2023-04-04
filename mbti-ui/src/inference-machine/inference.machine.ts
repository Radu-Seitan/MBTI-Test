import {
    Answer,
    PersonalityResults,
    PersonalityStatistics,
    PersonalityTypeStatistics,
    QuestionType,
} from './types';
import knowledge_base from '../../../knowledge_base/knowledge_base.json';
export class InferenceMachine {
    public processAnswers(answers: Answer[]): PersonalityStatistics {
        const questions: QuestionType[] =
            knowledge_base.questions as QuestionType[];
        const personalityResults: PersonalityResults =
            this.initializePersonalitiesResults();
        answers.forEach(answer => {
            const question: QuestionType = questions.find(q => q.id === answer.id)!;
            const signOfAddition = question.keyed === '+' ? 1 : -1;
            const answerDirectionName = question.direction.name;

            personalityResults[answerDirectionName].totalPoints +=
                signOfAddition * answer.points;
            personalityResults[answerDirectionName].totalQuestionsAsked++;
        });

        return this.calculatePersonalityStatistics(personalityResults);
    }

    private initializePersonalitiesResults(): PersonalityResults {
        return {
            Extraverted: { totalPoints: 0, totalQuestionsAsked: 0 },
            Intuitive: { totalPoints: 0, totalQuestionsAsked: 0 },
            Thinking: { totalPoints: 0, totalQuestionsAsked: 0 },
            Perceiving: { totalPoints: 0, totalQuestionsAsked: 0 },
        };
    }

    private calculatePersonalityStatistics(
        personalityResults: PersonalityResults
    ): PersonalityStatistics {
        const extravertedPercentage = Math.round(
            this.calculatePercentateForDirection(personalityResults.Extraverted)
        );
        const intuitivePercentage = Math.round(
            this.calculatePercentateForDirection(personalityResults.Intuitive)
        );
        const thinkingPercentage = Math.round(
            this.calculatePercentateForDirection(personalityResults.Thinking)
        );
        const perceivingPercentage = Math.round(
            this.calculatePercentateForDirection(personalityResults.Perceiving)
        );
        return {
            Extraverted: extravertedPercentage,
            Introverted: 100 - extravertedPercentage,
            Intuitive: intuitivePercentage,
            Sensing: 100 - intuitivePercentage,
            Thinking: thinkingPercentage,
            Feeling: 100 - thinkingPercentage,
            Perceiving: perceivingPercentage,
            Judging: 100 - perceivingPercentage,
        };
    }

    private calculatePercentateForDirection(
        personalityTypeStatistics: PersonalityTypeStatistics
    ): number {
        console.log(personalityTypeStatistics);
        return (
            (100 *
                (personalityTypeStatistics.totalPoints +
                    3 * personalityTypeStatistics.totalQuestionsAsked)) /
            (2 * 3 * personalityTypeStatistics.totalQuestionsAsked)
        );
    }
}
