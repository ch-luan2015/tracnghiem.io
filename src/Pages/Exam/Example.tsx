import React from "react";
import { useRadioGroup, HStack } from "@chakra-ui/react";
import RadioCard from "../../Components/RadioCard";

export default function Example() {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();
  console.log("group", group);

  return (
    <HStack {...group}>
      {options.map((value: any) => {
        const radio = getRadioProps(value);
        console.log("radio", radio);

        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
