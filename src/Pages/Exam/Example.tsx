import React from "react";
import { useRadioGroup, HStack } from "@chakra-ui/react";
import RadioCard from "../../Components/RadioCard";

export default function Example() {
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Question",
    defaultValue: "1",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value: any) => {
        const radio = getRadioProps(value);

        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
