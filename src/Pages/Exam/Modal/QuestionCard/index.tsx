import React, { useState } from "react";
import { Radio, RadioGroup, Stack, Heading, Text, Box } from "@chakra-ui/react";
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
  console.log(props.index);

  return (
    <div>
      <Heading as="h4" size="md" isTruncated>
        <Text as="span">{props.index} . </Text> {props.question.content}
      </Heading>
      <RadioGroup onChange={handleChange} value={answerChoice}>
        <SimpleGrid columns={2} spacing={10}>
          {props.question.answerOptions.map((a, index: number) => {
            const indexString = index.toString();
            // console.log(a, indexString, answerChoice);
            return (
              <Box bg="blue.300" height={12}>
                <Radio key={index} value={indexString}>
                  {a.content}
                </Radio>
              </Box>
            );
          })}
        </SimpleGrid>
      </RadioGroup>
    </div>
  );
}
