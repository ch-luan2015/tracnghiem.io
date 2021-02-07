import React, { useState } from "react";
import { Radio, RadioGroup, Heading, Text, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

import { Question } from "resource/model/question";
import { Input, Stack, Select, Checkbox } from "@chakra-ui/react";

interface QuestionProps {
  question: Question;
  index?: number;
}
export default function QuestionCard(props: QuestionProps) {
  const [answerChoice, setAnswerChoice] = useState<number | string>();

  const handleChange = (value: number | string) => {
    setAnswerChoice(value);
  };
  console.log(props.index);

  return (
    <Box bg="white" rounded="lg" p="2em" w="60%" my="2rem" mx="auto" shadow="lg">
      <Heading fontSize="xl" color="Teal" my="1rem" w="100%">
        {props.index}.{props.question.content}
      </Heading>

      <RadioGroup onChange={handleChange} value={answerChoice} mt="2rem">
        <SimpleGrid columns={2} spacing={5}>
          {props.question.answerOptions.map((a, index: number) => {
            const indexString = index.toString();
            return (
              <Box height={8}>
                <Radio key={index} value={indexString}>
                    <Text></Text>{a.content}
                </Radio>
              </Box>
            );
          })}
        </SimpleGrid>
      </RadioGroup>
    </Box>
  );
}
