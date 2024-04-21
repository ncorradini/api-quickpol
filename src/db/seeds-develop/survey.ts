import { SurveysFactory } from '../../modules/survey/entities/survey.factory';
import { DataSource } from 'typeorm';
import { Survey } from '../../modules/survey/entities/survey.entity';

export const surveySeeder = async (dataSource: DataSource) => {
  const surveyRepository = dataSource.getRepository(Survey);

  const [, count] = await surveyRepository.findAndCount();

  if (count === 0) {
    const surveys = SurveysFactory();
    await surveyRepository.save(surveys);

    console.log('Surveys => Added');
    return;
  }
  console.log('Surveys => Skipped');
};
