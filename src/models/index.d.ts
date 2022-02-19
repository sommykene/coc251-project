import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LessonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LessonWordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Lesson {
  readonly id: string;
  readonly name?: string;
  readonly subtitle?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Lesson, LessonMetaData>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson, LessonMetaData>) => MutableModel<Lesson, LessonMetaData> | void): Lesson;
}

export declare class LessonWord {
  readonly id: string;
  readonly igbo?: string;
  readonly english?: string;
  readonly meaning?: string;
  readonly example?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LessonWord, LessonWordMetaData>);
  static copyOf(source: LessonWord, mutator: (draft: MutableModel<LessonWord, LessonWordMetaData>) => MutableModel<LessonWord, LessonWordMetaData> | void): LessonWord;
}