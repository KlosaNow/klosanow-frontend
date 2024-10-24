import React from "react";
import { Link } from "react-router-dom";
import { Circle, Flex, Image, Text } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { colors } from "src/data/colors";
import EmptyStateImg from "src/assets/images/file.png";
import { DEVICE_SCREEN_SIZES } from "src/data/constants";

interface EmptyStateProps {
  title: string;
  link: string;
  height?: "sm" | "lg";
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, link, height }) => {
  const flexHeight = {
    sm: "250px",
    lg: "500px",
  }[height || "lg"];

  const [isDesktop, setIsDesktop] = React.useState(
    window.innerWidth >= DEVICE_SCREEN_SIZES.laptop_sm
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DEVICE_SCREEN_SIZES.laptop_sm);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      gap="8px"
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      h={flexHeight}
      w="100%"
    >
      <Circle size="144px" border={`1px solid ${colors.primary[5]}`}>
        <Image src={EmptyStateImg} alt="draft" w="60%" />
      </Circle>
      <Text fontSize={"14px"} fontWeight={500}>
        No {capitalize(title)}
      </Text>
      {isDesktop && (
        <Text fontSize={"14px"}>
          Click{" "}
          <Link to={link}>
            <u>here</u>
          </Link>{" "}
          to start creating lessons
        </Text>
      )}
    </Flex>
  );
};

export default EmptyState;
