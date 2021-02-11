import React, { useContext } from "react";
import mathData from "../../data/Toan.json";
import QuestionCard from "./QuestionCard";
import ChooseTable from "./ChooseTable";
import { Exam } from "resource/model/question";
import { Flex, Box, Spacer, Button, Text } from "@chakra-ui/react";
import { StoreContext } from "ultis/store";
import Example from "./Example";

function ExamTest() {
  const exam = mathData as Exam;
  const { count }: any = useContext(StoreContext);
  console.log({ count });

  const inCount = () => count.setCount(count.count + 1);
  return (
    <>
      <Button onClick={inCount}>+1</Button>
      <Text>{count.count}</Text>
      <Flex bg="gray.300" h="100vh" wrap="wrap" direction="row" justify="flex-start" align="flex-start">
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
      </Flex>
    </>
  );
}

export default ExamTest;
