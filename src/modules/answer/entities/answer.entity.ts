import { CustomBaseEntity } from 'src/shared/entities/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Question } from '../../question/entities/question.entity';

@Entity({ name: 'answer' })
export class Answer extends CustomBaseEntity {
  @Column()
  answer: string;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;

  @Column()
  voteCouting: number;
}
