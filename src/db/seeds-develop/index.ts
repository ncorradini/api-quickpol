import dataSource from '../config';
import { surveySeeder } from './survey';

const seeder = async () => {
  try {
    console.log('Seeder Initialized');
    await dataSource.initialize();

    await surveySeeder(dataSource);

    console.log('Seeder Finished Successfully');
    await dataSource.destroy();
  } catch (error) {
    console.log(error);
  }
};

seeder();
