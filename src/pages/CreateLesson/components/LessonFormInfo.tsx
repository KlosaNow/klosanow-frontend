import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Input,
  Textarea,
  Stack,
  Button,
  Image,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik } from "formik";

import { colors } from "src/data/colors";
import dummyImg from "src/assets/images/dummy image.png";
// import { saveToDrafts, updateDraft } from "src/api-endpoints/lessons";
import { CreateLessonFormStepsType } from "src/types";
import { draftsPagePath } from "src/data/pageUrl";
// import { FileUploadResponseStatus, uploadFile } from "src/utils/file-upload";

import { createLessonValidationSchema } from "../validation";
import { btnStyles } from "../data";
import {
  CreateLessonFormContext,
  CreateLessonFormDefaultValues,
} from "../context/CreateLessonFormContext";

const LessonFormInfo: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  // const toast = useToast();

  const {
    canUpdate,
    draft_id,
    template,
    form_info,
    updateCreateLessonFormValues,
  } = React.useContext(CreateLessonFormContext);

  const [file, setFile] = useState(form_info.thumbnail);

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    cb: (fileUrl: string, fileSize: number) => void
  ) => {
    e.preventDefault();
    if (!e.currentTarget.files) return;

    const file = e.currentTarget.files[0];
    // const res = await uploadFile(file);

    const fileURL = URL.createObjectURL(file);

    cb(fileURL, file.size);
    setFile(fileURL);

    // if (res.status !== FileUploadResponseStatus.Failed || !res.data) {
    //   toast({
    //     title: res.message,
    //     status: "error",
    //     duration: 3000,
    //     position: "top-right",
    //   });

    //   return;
    // }

    // cb(res.data.videoUrl, res.data.videoSize);
    // setFile(res.data.videoUrl);
  };

  const handleNext = (values: CreateLessonFormDefaultValues["form_info"]) => {
    updateCreateLessonFormValues({
      form_info: {
        ...values,
      },
      activeStep: CreateLessonFormStepsType.Content,
    });
  };

  const handleDraft = async () => {
    const formData = {
      ...form_info,
      about: form_info.description,
      template,
    };

    if (draft_id) {
      // await updateDraft(draft_id, formData);
      console.log({ draft_id, ...formData });
    } else {
      // await saveToDrafts(formData);
      console.log(formData);
    }

    navigate(draftsPagePath);
  };

  return (
    <>
      <Text fontSize="32px" fontWeight="500" textColor="black.100" mb={2}>
        Create your lessons
      </Text>

      <Text fontSize="20px" mb="8px" color="#6D6F71">
        Course thumbnail
      </Text>

      <Formik
        initialValues={form_info}
        onSubmit={handleNext}
        validationSchema={createLessonValidationSchema}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          isValid,
          dirty,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Flex
              gap="16px"
              mb="24px"
              flexDir={{
                base: "column",
                md: "row",
              }}
            >
              <Box
                w={"250px"}
                h={"170px"}
                borderRadius={"0.2rem"}
                overflow="hidden"
              >
                <Image
                  src={file || dummyImg}
                  alt="Klosanaw"
                  w="100%"
                  h="100%"
                />
              </Box>

              <Box>
                <Flex gap={1}>
                  <Text>Important guidelines: </Text>
                  <Text fontWeight={600} color={colors.primary[70]}>
                    700x430 pixels
                  </Text>
                </Flex>
                <Flex gap={1}>
                  <Text>File support: </Text>
                  <Text fontWeight={600} color={colors.primary[70]}>
                    Jpg, jpeg or png
                  </Text>
                </Flex>
                <Box w={"190px"} mt={"2rem"}>
                  <Button
                    colorScheme="purple"
                    variant="outline"
                    w={"full"}
                    h={"50px"}
                    _hover={{ color: "none" }}
                    onClick={() => inputRef.current?.click()}
                  >
                    Upload image
                    <Input
                      type="file"
                      name="thumbnail"
                      accept="image/*"
                      ref={inputRef}
                      hidden
                      onChange={(e) => {
                        e.preventDefault();
                        handleFileChange(e, (file, size) => {
                          setFieldValue("thumbnail", file);
                          setFieldValue("thumbnailSize", size);
                        });
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Flex>

            <Stack spacing={4}>
              <FormControl isInvalid={touched.title && !!errors.title}>
                <FormLabel {...labelStyles}>Course title</FormLabel>
                <Input
                  id="title"
                  placeholder="Lesson Title"
                  name="title"
                  fontSize="16px"
                  focusBorderColor={colors.primary[5]}
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={touched.description && !!errors.description}
              >
                <FormLabel {...labelStyles}>Description</FormLabel>
                <Textarea
                  placeholder="Tell us about your lesson"
                  fontSize="16px"
                  focusBorderColor={colors.primary[5]}
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={touched.tutor_name && !!errors.tutor_name}
              >
                <FormLabel {...labelStyles}>Tutors name</FormLabel>
                <Input
                  fontSize="16px"
                  focusBorderColor={colors.primary[5]}
                  id="tutor_name"
                  name="tutor_name"
                  value={values.tutor_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={!canUpdate}
                />
                <FormErrorMessage>{errors.tutor_name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={touched.tutor_bio && !!errors.tutor_bio}>
                <FormLabel {...labelStyles}>Tutors bio</FormLabel>
                <Textarea
                  fontSize="16px"
                  focusBorderColor={colors.primary[5]}
                  id="tutor_bio"
                  name="tutor_bio"
                  onBlur={handleBlur}
                  value={values.tutor_bio}
                  onChange={handleChange}
                  placeholder="Tell us about you"
                  disabled={!canUpdate}
                />
                <FormErrorMessage>{errors.tutor_bio}</FormErrorMessage>
              </FormControl>

              <Text
                as="button"
                type="button"
                color={colors.primary[50]}
                onClick={() =>
                  updateCreateLessonFormValues({ canUpdate: !canUpdate })
                }
                w="max-content"
                fontSize="14px"
              >
                Update Bio
              </Text>
            </Stack>

            <Flex
              align="center"
              mt="40px"
              gap="24px"
              justifyContent="space-between"
              flexDir={{
                base: "column",
                md: "row",
              }}
            >
              <Button
                {...btnStyles}
                _hover={{ color: "none" }}
                onClick={handleDraft}
                type="button"
              >
                Save to drafts
              </Button>

              <Flex
                gap="16px 24px"
                w={{
                  base: "100%",
                  md: "max-content",
                }}
                flexDir={{
                  base: "column",
                  md: "row",
                }}
              >
                <Button
                  {...btnStyles}
                  type="button"
                  _hover={{ color: "none" }}
                  onClick={() =>
                    updateCreateLessonFormValues({
                      activeStep: CreateLessonFormStepsType.Template,
                    })
                  }
                >
                  Back
                </Button>

                <Button
                  {...btnStyles}
                  bg={colors.primary[50]}
                  color={colors.neutral[10]}
                  isDisabled={!dirty || !isValid}
                  _hover={{ opacity: 0.9 }}
                  isLoading={isSubmitting}
                  type="submit"
                  _disabled={{
                    bg: "#E5DEFD",
                    borderColor: "#E5DEFD",
                    cursor: "not-allowed",
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LessonFormInfo;

const labelStyles = {
  mb: "8px",
  color: "#6D6F71",
  fontSize: "20px",
};
