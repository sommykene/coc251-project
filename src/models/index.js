// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Lesson, LessonWord } = initSchema(schema);

export {
  Lesson,
  LessonWord
};