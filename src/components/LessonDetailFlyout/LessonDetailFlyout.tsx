import React from "react";
import { Lesson } from "../../types";
import {
  Box,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { uniqueId } from "lodash";

interface LessonDetailFlyoutProps {
  show: boolean;
  handleClose: () => void;
  lesson: Lesson | null;
}

const LessonDetailFlyout: React.FC<LessonDetailFlyoutProps> = ({
  show,
  handleClose,
  lesson,
}) => {
  return (
    <Drawer isOpen={show} onClose={handleClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottom="1px solid #ccc">
          {lesson?.title}
        </DrawerHeader>
        <DrawerCloseButton />

        <DrawerBody>
          <Flex align="center" justify="center" flexDir="column">
            <Circle size="170px" overflow="hidden">
              <Image
                src={lesson?.thumbnailUrl}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Circle>

            <Text mt="12px" fontSize="14px">
              {lesson?.about}
            </Text>
          </Flex>

          <Box mt="24px" p="16px 0" borderTop="1px solid #ccc" w="full">
            <Flex align="center" justifyContent="space-between">
              <Text fontSize="14px">Author</Text>
              <Text fontSize="14px" fontWeight={500} w="100%" maxW="200px">
                {lesson?.tutor_name}
              </Text>
            </Flex>

            <Flex align="center" justifyContent="space-between" mt="24px">
              <Text fontSize="14px">Author's bio</Text>
              <Text fontSize="14px" w="100%" maxW="200px">
                {lesson?.tutor_bio}
              </Text>
            </Flex>

            {lesson?.content.length !== 0 && (
              <Box mt="24px">
                <Text fontWeight="500">Contents</Text>

                <Box mt="24px">
                  {lesson?.content.map((item) => (
                    <div
                      dangerouslySetInnerHTML={{ __html: item }}
                      key={uniqueId(`lesson-content`)}
                      className="lesson-content"
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default LessonDetailFlyout;
