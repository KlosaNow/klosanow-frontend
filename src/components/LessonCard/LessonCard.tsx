import React from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
} from "@chakra-ui/react";
import { Lesson } from "../../types";
import { capitalize } from "lodash";
import { OptionWhiteIcon } from "../../assets/svgs";

interface LessonCardProps {
  lesson: Lesson;
  handleWacth?: (x: Lesson) => void;
  handleDelete?: (id: string) => void;
  handleView?: (x: Lesson) => void;
  handleShare?: (x: Lesson) => void;
  hasOptions?: boolean;
  descriptionLength?: number;
  canWatch?: boolean;
  hasDescription?: boolean;
  width?: "sm" | "lg";
}

const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  hasOptions,
  hasDescription = true,
  descriptionLength,
  canWatch = true,
  handleWacth,
  handleDelete,
  handleView,
  handleShare,
  width,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const {
    thumbnailUrl,
    title,
    about: description,
    tutor_name: author,
    videoUrl,
  } = lesson;

  const duration =
    React.useMemo(() => {
      const video = videoRef.current;

      if (video) {
        const vidDurArr = video.duration.toString().split(".");

        const vidHr = vidDurArr[vidDurArr.length - 4];
        const vidMin = vidDurArr[vidDurArr.length - 3];
        const vidSec = vidDurArr[vidDurArr.length - 2];

        const vidHrValue = vidHr ? `${vidHr}:` : "";
        const vidMinValue = vidMin ? `${vidMin}:` : "";
        const vidSecValue = vidSec ? `${vidSec}:` : "";

        const vidDur = `${vidHrValue}${vidMinValue}:${vidSecValue}`;

        return vidDur;
      }
    }, [videoRef.current]) || "0.00";

  const cardWidth = {
    sm: "299px",
    lg: "354px",
  }[width || "lg"];

  return (
    <Box
      width="100%"
      minW={{
        base: "280px",
        sm: "299px",
      }}
      maxW={{
        base: "350px",
        lg: "330px",
        xl: cardWidth,
      }}
    >
      <Box position="relative">
        <Image
          width="full"
          height="184px"
          objectFit="cover"
          src={thumbnailUrl}
          alt={title}
          borderRadius="xl"
        />
        <video src={videoUrl} ref={videoRef} hidden />

        {hasOptions && (
          <Box position="absolute" top="8px" right="7px">
            <Popover placement="bottom">
              <PopoverTrigger>
                <IconButton
                  aria-label="lesson-option"
                  icon={<OptionWhiteIcon />}
                  bg="transparent"
                  w="max-content"
                  _hover={{
                    bg: "transparent",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent w="max-content" overflow="hidden">
                <Box
                  as="button"
                  fontSize="12px"
                  padding="4px 6px"
                  onClick={() => handleDelete && handleDelete(lesson._id)}
                  _hover={{
                    bg: "#eee",
                  }}
                >
                  Delete
                </Box>
                <Box
                  as="button"
                  fontSize="12px"
                  padding="4px 6px"
                  onClick={() => handleShare && handleShare(lesson)}
                  _hover={{
                    bg: "#eee",
                  }}
                >
                  Share
                </Box>
                <Box
                  as="button"
                  fontSize="12px"
                  padding="4px 6px"
                  onClick={() => handleView && handleView(lesson)}
                  _hover={{
                    bg: "#eee",
                  }}
                >
                  View
                </Box>
              </PopoverContent>
            </Popover>
          </Box>
        )}

        {duration && (
          <Text
            fontSize="12px"
            background="primary.50"
            color="#fff"
            position="absolute"
            bottom="8px"
            right="7px"
            padding="1px 8px"
            borderRadius="4px"
          >
            {duration}
          </Text>
        )}
      </Box>

      <Box padding="8px 0px" width="full">
        <Text fontSize={16} fontWeight="500" color="#000" mb="4px">
          {capitalize(title)}
        </Text>

        {hasDescription && (
          <Text fontSize={[12, 14]} color="black.30">
            {description.substring(0, descriptionLength || 130)}
            {description.length > (descriptionLength || 130) ? "..." : ""}{" "}
            <Text as="span" color="black.40" fontWeight="500">
              {author}
            </Text>
          </Text>
        )}

        {canWatch && (
          <Button
            mt="8px"
            bg="primary.50"
            color="#fff"
            fontWeight="400"
            fontSize="16px"
            padding="18px 24px"
            _hover={{
              opacity: 0.8,
            }}
            onClick={() => handleWacth && handleWacth(lesson)}
          >
            Watch now
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default LessonCard;
