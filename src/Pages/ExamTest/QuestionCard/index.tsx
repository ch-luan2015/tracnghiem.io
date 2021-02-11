import React, { useState } from "react";
import { Radio, RadioGroup, Heading, Text, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

import { Question } from "resource/model/question";

interface QuestionProps {
  question: Question;
  index?: number;
}
export default function QuestionCard(props: QuestionProps) {
  const [answerChoice, setAnswerChoice] = useState<number | string>();

  const handleChange = (value: number | string) => {
    setAnswerChoice(value);
  };

  return (
    <Box bg="white" rounded="lg" p="1rem" my="2rem" mx="auto" w="90%" shadow="lg">
      <Heading fontSize="xl" color="Teal" my="1rem" w="100%">
        {props.index}. {props.question.content}
      </Heading>

      <RadioGroup onChange={handleChange} value={answerChoice} mt="2rem">
        <SimpleGrid columns={2} spacing={5}>
          {props.question.answerOptions.map((a, index: number) => {
            const indexString = index.toString();
            return (
              <Box height={8} key={index}>
                <Radio value={indexString}>
                  <Text textAlign="justify" fontSize="lg" fontWeight="md" color="gray.900">
                    {a.content}
                  </Text>
                </Radio>
              </Box>
            );
          })}
        </SimpleGrid>
      </RadioGroup>
    </Box>
  );
}
