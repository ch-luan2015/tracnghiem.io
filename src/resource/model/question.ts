export interface AnswerOption {
  id: number;
  content: string;
  questionId: number;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  examId: number;
  content: string;
  answerOptions: AnswerOption[];
}

export interface Exam {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
