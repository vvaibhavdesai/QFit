import { Dispatch, SetStateAction } from "react";

export type AnswerManager = {
  questionIdx: number;
  isRight: boolean;
  setQuestionIdx: Dispatch<SetStateAction<number>>;
  setUserAnswer: Dispatch<SetStateAction<boolean[]>>;
};
