import { Answer } from './answer.entity';

export const AnswersFactory = (answers: string[]) => {
  const entities: Answer[] = [];

  for (let i = 0; i < answers.length; i++) {
    const answer = new Answer();
    answer.answer = answers[i];

    entities.push(answer);
  }

  return entities;
};
