import { Entity, Column, OneToMany } from 'typeorm';
import { Question } from '../../../modules/question/entities/question.entity';
import { CustomBaseEntity } from '../../../shared/entities/base.entity';

@Entity({ name: 'survey' })
export class Survey extends CustomBaseEntity {
  @Column()
  title: string;

  @Column()
  emailCreator: string;

  @OneToMany(() => Question, (question) => question.survey, {
    cascade: true,
  })
  questions: Question[];
}
