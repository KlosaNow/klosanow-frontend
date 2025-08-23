import { Flex, Skeleton, Text } from "@chakra-ui/react";
import { secondsToHours, secondsToMinutes } from "date-fns";
import { uniqueId } from "lodash";
import { colors } from "src/data/colors";

interface RecorderLoaderProps {
  time: number;
}

const RecorderLoader: React.FC<RecorderLoaderProps> = ({ time }) => {
  const hours = secondsToHours(time);
  const minutes = secondsToMinutes(time);
  const seconds = Math.floor(time % 60);
  return (
    <Flex
      gap={"4px"}
      borderRadius="8px"
      bg={colors.primary[5]}
      p="7px"
      maxW="552px"
      align="center"
    >
      {Array.from({ length: 4 }).map((_) => (
        <Flex gap={"4px"} align="center" key={uniqueId(`recoder-loader`)}>
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="10px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="10px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="20px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="10px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="20px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="10px"
            width="4px"
          />
          <Skeleton
            startColor="#8c8c8c"
            endColor="#515151"
            height="10px"
            width="4px"
          />
        </Flex>
      ))}

      <Text marginLeft={"12px"}>
        {hours > 0 ? `${hours} :` : ""} {minutes >= 10 ? "" : 0}
        {minutes}: {seconds >= 10 ? "" : 0}
        {seconds}
      </Text>
    </Flex>
  );
};

export default RecorderLoader;
