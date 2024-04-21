import { Survey } from './survey.entity';
import { QuestionsFactory } from '../../../modules/question/entities/question.factory';

const SURVEYS_LIST = [
  {
    title: 'Deportes',
    emailCreator: 'nicocorradini471@gmail.com',
    questions: [
      {
        question: '¿Cuál es tu deporte favorito?',
        answers: ['Fútbol', 'Baloncesto', 'Tenis', 'Atletismo'],
      },
      {
        question: '¿Con qué frecuencia practicas deporte?',
        answers: [
          'Todos los días',
          'Varias veces a la semana',
          'Una vez a la semana',
          'Ocasionalmente',
        ],
      },
      {
        question: '¿Qué te motiva a practicar deporte?',
        answers: [
          'Salud y bienestar',
          'Competir y ganar',
          'Socializar con amigos',
          'Desestresarme y relajarme',
        ],
      },
    ],
  },
  {
    title: 'Películas',
    emailCreator: 'nicocorradini471@gmail.com',
    questions: [
      {
        question: '¿Cuál es tu género de película favorito?',
        answers: ['Acción', 'Comedia', 'Drama', 'Ciencia ficción'],
      },
      {
        question: '¿Cómo prefieres ver películas?',
        answers: [
          'En el cine',
          'En casa, en streaming',
          'En DVD/Blu-ray',
          'Depende de la ocasión',
        ],
      },
      {
        question: '¿Con qué frecuencia vas al cine?',
        answers: [
          'Varias veces al mes',
          'Una vez al mes',
          'Varias veces al año',
          'Casi nunca',
        ],
      },
    ],
  },
];

export const SurveysFactory = () => {
  const entities: Survey[] = [];

  for (let i = 0; i < SURVEYS_LIST.length; i++) {
    const survey = new Survey();
    survey.title = SURVEYS_LIST[i].title;
    survey.emailCreator = SURVEYS_LIST[i].emailCreator;
    survey.questions = QuestionsFactory(SURVEYS_LIST[i].questions);

    entities.push(survey);
  }

  return entities;
};
