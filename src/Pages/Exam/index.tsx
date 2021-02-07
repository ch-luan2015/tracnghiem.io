import React from "react";
import mathData from "../../data/Toan.json";
import QuestionCard from "../Exam/Modal/QuestionCard";
import { Exam } from "resource/model/question";
import { Box, Flex } from "@chakra-ui/react";
export default function index() {
  const exam = mathData as Exam;
  return (
    <Box bg="gray.300" h="100vh">
      {exam.questions.map((q, index) => (
        <QuestionCard question={q} index={index + 1} />
      ))}
    </Box>
  );
}
