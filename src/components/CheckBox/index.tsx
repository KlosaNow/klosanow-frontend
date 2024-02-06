import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CheckBoxLabelProp {
  label: string;
}

export const CheckBox: React.FC<CheckBoxLabelProp> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Box
        bg={checked ? "#7B58F4" : "#FFFFFF"}
        borderRadius={6}
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={7}
        width={7}
        onClick={handleCheckbox}
      >
        {checked && (
          // Check mark
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.73849 11.7069C5.26151 11.7069 5.6569 11.5061 5.92469 11.1044L11.7176 2.37428C11.8138 2.23202 11.8849 2.09185 11.931 1.95378C11.977 1.81152 12 1.67554 12 1.54583C12 1.186 11.8745 0.888925 11.6234 0.654616C11.3766 0.416122 11.0711 0.296875 10.7071 0.296875C10.4561 0.296875 10.2427 0.347084 10.0669 0.447503C9.8954 0.543737 9.73222 0.711101 9.57741 0.949595L4.71339 8.58767L2.27824 5.66926C2.01464 5.36382 1.6841 5.2111 1.28661 5.2111C0.914226 5.2111 0.606695 5.33035 0.364017 5.56884C0.121339 5.80734 0 6.1065 0 6.46633C0 6.62951 0.0251046 6.78432 0.0753138 6.93077C0.129707 7.07303 0.228033 7.22156 0.370293 7.37637L3.60251 11.186C3.89958 11.5333 4.27824 11.7069 4.73849 11.7069Z"
              fill="white"
            />
          </svg>
        )}
      </Box>
      <Text
        color="#2A2A2A"
        cursor="pointer"
        fontSize={18}
        onClick={handleCheckbox}
      >
        {label}
      </Text>
    </>
  );
};