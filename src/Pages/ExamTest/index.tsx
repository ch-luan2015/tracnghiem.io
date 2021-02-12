import React, { useContext } from "react";
import mathData from "../../data/Toan.json";
import deThat from "../../data/HocMai.json";
import QuestionCard from "./QuestionCard";
import ChooseTable from "./ChooseTable";
import { Exam } from "resource/model/question";
import { Flex, Box, Spacer, Button, Text } from "@chakra-ui/react";
import Example from "./Example";

function ExamTest() {
  const exam = mathData as Exam;

  var { title, subtitle, questions } = deThat;
  console.log("deThat", deThat);
  console.log("title", title);
  console.log("subtitle", subtitle);
  console.log("questions", questions);

  return (
    <>
      {/* <Flex bg="gray.300" h="100vh" wrap="wrap" direction="row" justify="flex-start" align="flex-start">
        <Flex flex="1 0 0">
          <Spacer />
          <ChooseTable index={exam.questions.length} />
        </Flex>
        <Box flex="2 0 0">
          {exam.questions.map((q, index) => (
            <QuestionCard question={q} index={index + 1} key={index} />
          ))}
        </Box>

        <Box flex="1 0 0" flexWrap="wrap">
          <ChooseTable index={exam.questions.length} />

          <Example />
        </Box>
      </Flex> */}
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Text>{questions.map((item) => item.answers.map((answers1) => answers1.content))}</Text>
    </>
  );
}

export default ExamTest;
//Bo mot react-markdown vao de render  answers1.content
