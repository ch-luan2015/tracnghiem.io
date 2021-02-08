import React, { useState } from "react";
import { Question } from "resource/model/question";
import { Input, Stack, Select, Checkbox, SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";

interface ChooseTableProps {
  index?: number;
}

export default function ChooseTable(props: ChooseTableProps) {
  return (
    <Box bg="white" rounded="lg" p="1rem" my="2rem" w="90%" shadow="lg">
      <Heading fontSize="lg" color="Teal" my="1rem" w="100%" textAlign="center">
        Tổng sô câu hỏi: {props.index}
      </Heading>
    </Box>
  );
}
