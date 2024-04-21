import { Question } from './question.entity';
import { AnswersFactory } from '../../../modules/answer/entities/answer.factory';

export const QuestionsFactory = (
  questions: {
    question: string;
    answers: string[];
  }[],
) => {
  const entities: Question[] = [];

  for (let i = 0; i < questions.length; i++) {
    const question = new Question();

    question.question = questions[i].question;
    question.answers = AnswersFactory(questions[i].answers);

    entities.push(question);
  }

  return entities;
};
