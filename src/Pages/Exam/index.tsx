import React from "react";
import mathData from "../../data/Toan.json";
import QuestionCard from "../Exam/Modal/QuestionCard";
import { Exam } from "resource/model/question";

export default function index() {
  const exam = mathData as Exam;
  return (
    <div>
      {exam.questions.map((q, index) => (
        <QuestionCard question={q} index={index + 1} />
      ))}
    </div>
  );
}
