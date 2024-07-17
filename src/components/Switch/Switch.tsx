import React from "react";
import { Box, Circle, Flex, Input, Text } from "@chakra-ui/react";
import { colors } from "../../data/colors";

export enum SwitchLabel {
  Off = "Off",
  On = "On",
}

interface SwitchProps {
  onChange: (x: SwitchLabel) => void;
}

const Switch: React.FC<SwitchProps> = ({ onChange }) => {
  const toggleRef = React.useRef<HTMLInputElement>(null);
  const [isChecked, setChecked] = React.useState(false);

  const toggleChecked: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    setChecked(checked);
    onChange(checked ? SwitchLabel.On : SwitchLabel.Off);
  };

  return (
    <Box>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={toggleChecked}
        ref={toggleRef}
        hidden
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir={isChecked ? "row" : "row-reverse"}
        gap="7px"
        as="button"
        w="80px"
        h="40px"
        bg={colors.neutral[5]}
        borderRadius="50px"
        onClick={() => toggleRef.current?.click()}
      >
        <Circle size="17px" bg={colors.primary[50]} />
        <Text fontSize="12px" fontWeight="500">
          {isChecked ? SwitchLabel.On : SwitchLabel.Off}
        </Text>
      </Flex>
    </Box>
  );
};

export default Switch;
