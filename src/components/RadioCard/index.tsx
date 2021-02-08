import React from "react";
import { useRadio, Box, Flex } from "@chakra-ui/react";

export default function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Flex as="label" w="2rem" h="2rem" boxShadow="md" rounded="md" bg="white" textAlign="center" justify="flex-start" wrap="wrap">
      <input {...input} />
      <Box {...checkbox} w="100%" h="100%">
        <Box color="gray.400" fontSize="lg" fontWeight="bold" mt="0.2rem">
          {props.children}
        </Box>
      </Box>
    </Flex>
  );
}
