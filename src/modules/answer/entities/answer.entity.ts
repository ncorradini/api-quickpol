import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../../shared/entities/base.entity';
import { Question } from '../../question/entities/question.entity';

@Entity({ name: 'answer' })
export class Answer extends CustomBaseEntity {
  @Column()
  answer: string;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;

  @Column({ default: 0 })
  voteCouting: number;
}
