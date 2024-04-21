import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Survey } from '../../../modules/survey/entities/survey.entity';
import { CustomBaseEntity } from '../../../shared/entities/base.entity';
import { Answer } from '../../answer/entities/answer.entity';

@Entity({ name: 'question' })
export class Question extends CustomBaseEntity {
  @Column()
  question: string;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @OneToMany(() => Answer, (answer) => answer.question, {
    cascade: true,
  })
  answers: Answer[];
}
