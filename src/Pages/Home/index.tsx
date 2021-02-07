import React from "react";
import Header from "./Header";
import Exam from "../Exam";
import { Box } from "@chakra-ui/react";

export default function index() {
  return (
    <Box bg="gray.300">
      <Header />
      <Exam />
    </Box>
  );
}
