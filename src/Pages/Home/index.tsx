import React from "react";
import Header from "./Header";
import ExamTest from "../ExamTest";
import { Box } from "@chakra-ui/react";

export default function index() {
  return (
    <Box bg="gray.300">
      <Header />
      <ExamTest />
    </Box>
  );
}
