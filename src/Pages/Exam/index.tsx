import React from "react";
import mathData from "../../data/Toan.json";
import QuestionCard from "./QuestionCard";
import ChooseTable from "./ChooseTable";
import { Exam } from "resource/model/question";
import { Flex, Box, Spacer, useRadioGroup, HStack } from "@chakra-ui/react";
// import RadioCard from "../../Components/RadioCard";
import Example from "./Example";

export default function index() {
  const exam = mathData as Exam;

  return (
    <Flex bg="gray.300" h="100vh" wrap="wrap" direction="row" justify="flex-start" align="flex-start">
      <Flex flex="1 0 0">
        <Spacer />
        <ChooseTable index={exam.questions.length} />
      </Flex>
      <Box flex="2 0 0">
        {exam.questions.map((q, index) => (
          <QuestionCard question={q} index={index + 1} />
        ))}
      </Box>

      <Box flex="1 0 0">
        <ChooseTable index={exam.questions.length} />
        <Example />
      </Box>
    </Flex>
  );
}
