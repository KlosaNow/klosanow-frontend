import React from "react";
import { Text, Box, Flex, IconButton, Button } from "@chakra-ui/react";
import { capitalize, uniqueId } from "lodash";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";
import {
  CreateLessonFormStepsType,
  LessonTemplateType,
} from "../../../../types";

import { btnStyles } from "../../data";
import { colors } from "src/data/colors";

const LessonPreview: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const { template, content, form_info, updateCreateLessonFormValues } =
    React.useContext(CreateLessonFormContext);

  const initialSlide = `
    <p style='font-size: 32px; font-weight: 500'>${capitalize(
      form_info?.title || ""
    )}</p>
    <p style='font-size: 18px; margin-top: 12px'>
      ${form_info?.description || ""}
    </p>
    <div class='slide-img-container'>
      <img
        src=${form_info?.thumbnailUrl || ""}
        alt=${form_info?.title || ""}
        class='slide-img'
      />
    </div>
  `;

  const slides = [initialSlide, ...content];

  return (
    <>
      <Flex
        flexDir="column"
        h={{
          base: "calc(100vh - 200px)",
          md: "600px",
        }}
        w="full"
        bg="#F8F7FE"
        justify="space-between"
        as="div"
        position="relative"
        overflow="hidden">
        <Box
          h="100%"
          padding="16px 24px"
          overflow="scroll"
          className="hide-scroll">
          {template === LessonTemplateType.Slide ? (
            <div
              className={"slide"}
              dangerouslySetInnerHTML={{ __html: slides[index] }}
            />
          ) : (
            <>
              {slides.map((item) => (
                <div
                  key={uniqueId("slide-item")}
                  className={"slide"}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </>
          )}
        </Box>

        {slides.length - 1 > 1 && (
          <Flex w="100%" align="center" justify="center" gap="50px" h="60px">
            {index > 0 ? (
              <IconButton
                aria-label="delete"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={() => setIndex((prev) => prev - 1)}
                icon={<MdArrowBackIosNew />}
              />
            ) : (
              <Box w="40px" />
            )}

            <Text>
              Slide {index + 1}/{slides.length}
            </Text>

            {index < slides.length - 1 ? (
              <IconButton
                aria-label="delete"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={() => setIndex((prev) => prev + 1)}
                icon={<MdOutlineArrowForwardIos />}
              />
            ) : (
              <Box w="40px" />
            )}
          </Flex>
        )}
      </Flex>

      <Flex justify="flex-end" mt="12px" gap="24px">
        <Button
          {...btnStyles()}
          type="button"
          _hover={{ color: "none" }}
          onClick={() =>
            updateCreateLessonFormValues({
              activeStep: CreateLessonFormStepsType.Content,
            })
          }>
          Back
        </Button>

        <Button
          {...btnStyles()}
          bg={colors.primary[50]}
          color={colors.neutral[10]}
          type="button"
          _hover={{ color: "none" }}
          onClick={() =>
            updateCreateLessonFormValues({ showRecordLessonModal: true })
          }>
          Start record
        </Button>
      </Flex>
    </>
  );
};

export default LessonPreview;
