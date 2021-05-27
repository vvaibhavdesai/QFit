export type Options = {
  text: string;
  /** for the right answer this is true**/
  optionId: string;
};

export type Questions = {
  questionId: number;
  question: string;
  points: number;
  options: Options[];
  answer: string;
  // options: { text: string; isRight: boolean }[];
};

export type Quiz = {
  quizName: string;
  questions: Questions[];
  // questions: [Questions]; why cant we do it like this ????
};
export type QuizData = {
  data: Quiz[];
};
