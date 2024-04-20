import { Question } from 'src/modules/question/entities/question.entity';
import { CustomBaseEntity } from 'src/shared/entities/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity({ name: 'survey' })
export class Survey extends CustomBaseEntity {
  @Column()
  title: string;

  @Column()
  emailCreator: string;

  @OneToMany(() => Question, (question) => question.survey)
  questions: Question[];
}
