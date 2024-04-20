import { Survey } from 'src/modules/survey/entities/survey.entity';
import { CustomBaseEntity } from 'src/shared/entities/base.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Answer } from '../../answer/entities/answer.entity';

@Entity({ name: 'question' })
export class Question extends CustomBaseEntity {
  @Column()
  question: string;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
