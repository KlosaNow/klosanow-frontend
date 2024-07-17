import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { NotSelectedIcon, SelectedIcon } from "../../assets/svgs";
import { uniqueId } from "lodash";

interface CheckBoxProps extends React.InputHTMLAttributes<any> {
  label?: string | React.ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange, ...props }) => {
  const checkRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.disabled) return;
    return onChange && onChange(e);
  };

  return (
    <Flex alignItems="center" gap="12px">
      {label && <Text fontSize="16px">{label}</Text>}
      <input
        {...props}
        type="checkbox"
        ref={checkRef}
        onChange={handleChange}
        hidden
        id={uniqueId("checkbox")}
      />

      <Box as="button" onClick={() => checkRef.current?.click()}>
        {props.checked ? <SelectedIcon /> : <NotSelectedIcon />}
      </Box>
    </Flex>
  );
};

export default CheckBox;
