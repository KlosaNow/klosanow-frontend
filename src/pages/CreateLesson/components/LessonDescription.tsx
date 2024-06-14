import {
  Box,
  Text,
  Input,
  Textarea,
  Stack,
  Button,
  Image,
  Flex,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import dummyImg from "../../../assets/images/dummy image.png";

import { FormikStepComponentProps } from "../../../types/components/componetInterface";
import { CreateLessonInterface } from "../../../api-endpoints/lessons/interface";
import { FormikHelpers, useFormik } from "formik";
import { saveToDrafts } from "../../../api-endpoints/lessons";
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";


const LessonDescription = ({ nextFunc }: FormikStepComponentProps) => {
  const [file, setFile] = useState<any>(null);
  const toast = useToast()
  const navigate = useNavigate()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(URL.createObjectURL(selectedFile));
      console.log(file);
    } else {
      console.log("Please select an image file.");
    }
  };

    const mutation = useMutation({
    mutationFn: (formData: CreateLessonInterface) => saveToDrafts(formData),
  })

  if (mutation?.isSuccess) {
    toast({
          title: 'Draft created successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
    });
    navigate('/drafts')
  }
  if (mutation?.isError) {
     toast({
        title:  'Request failed',
        description: `Please try again later`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
  }

  const handleOnSubmit = (values: CreateLessonInterface, { setSubmitting }: FormikHelpers<CreateLessonInterface>) => {
    console.log("values", {...values, lessonImage: file});
    // nextFunc();
    setSubmitting(false); 
  };



  const formik = useFormik({
    initialValues: {
      title: "",
      about: "",
      description: "",
      videoUrl: "",
      tag: "",
      isPrivate: false,
      user: "",
      content:''
    },
    onSubmit: handleOnSubmit,
  });

  const handleNext = () => {
      const data = { ...formik.values, lessonImage: file }
      localStorage.setItem("CREATE_LESSON_DATA", JSON.stringify(data));
      nextFunc()
  }
  const handleDrafts = () => {
      const data = { ...formik.values, lessonImage: file }
      mutation.mutate(data)
      localStorage.setItem("CREATE_LESSON_DATA", JSON.stringify(data));
      
  }

  return (
    <Box>
      <Text fontSize="32px" fontWeight="500" textColor="black.100" mb={2}>
        Create your lessons
      </Text>
      <Stack direction={"row"} spacing={6} display={["none", "flex"]}>
        <Box>
          <Image
            src={file || dummyImg}
            alt="Klosanaw"
            w={"250px"}
            h={"170px"}
            borderRadius={"0.2rem"}
          />
        </Box>
        <Box>
          <Flex gap={1}>
            <Text>Important guidelines: </Text>
            <Text fontWeight={600} color={"#523BA3"}>
              700x430 pixels
            </Text>
          </Flex>
          <Flex gap={1}>
            <Text>File support: </Text>
            <Text fontWeight={600} color={"#523BA3"}>
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
            >
              Upload image
              <Input
                pr="4.5rem"
                type="file"
                placeholder="Enter password"
                zIndex={"revert"}
                h={"full"}
                w={"full"}
                position={"absolute"}
                opacity={0}
                accept="image/*"
                cursor={"pointer"}
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        </Box>
      </Stack>
      <Stack spacing={5} mt={"1rem"} as={"form"} onSubmit={formik.handleSubmit}>
        <Box>
          <Box>
            <Text mb="8px">Course title: </Text>
            <Input
              id="title"
              placeholder="Lesson Title"
              size="lg"
              value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
            />
          </Box>
        </Box>
        <Box>
          <Text mb="8px">Description</Text>
          <Textarea
            placeholder="Tell us about your lesson"
            size="sm"
            id="content"
           value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
          />
        </Box>
        <Box>
          <Box>
            <Text mb="8px">Tutors name: </Text>
            <Input
              placeholder={`Tutor's name`}
              size="lg"
              id="user"
              value={formik.values.user}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
        </Box>
        <Box>
          <Text mb="8px" cursor={"pointer"}>
            {`Tutor's Bio`}
          </Text>
          <Textarea
            size="sm"
            id="about"
            onBlur={formik.handleBlur}
            value={formik.values.about}
            onChange={formik.handleChange}
            placeholder="Tell us about you"
          />
        </Box>
        <Flex justify={"space-between"} color={"#BA1A1A"} fontSize={"0.7rem"}>
          <Text>You exceeded limit</Text>
          <Text>-126 words</Text>
        </Flex>
        <Stack
          p={2}
          direction={"row"}
          borderStyle={"dashed"}
          borderWidth="2px"
          position={"relative"}
          borderRadius={"0.7rem"}
          display={["flex", "none"]}
        >
          <Input
            type="file"
            h={"full"}
            opacity={0}
            position={"absolute"}
            cursor={"pointer"}
            onChange={handleFileChange}
            accept="image/*"
          />
          <Image
            boxSize="100px"
            objectFit="cover"
            alt="Dan Abramov"
            src={file}
            h={"70px"}
            w={"70px"}
            fallbackSrc={dummyImg}
          />
          <Box>
            <Text>Add a thumbnail for your lesson</Text>
            <Text fontWeight={"bold"} mt={"0.5rem"}>
              Browse your files
            </Text>
          </Box>
        </Stack>
        <Stack display={["flex", "none"]}>
          <Button
            colorScheme="#7B58F4;"
            variant="solid"
            width={"100px"}
            h={"50px"}
            onClick={handleNext}
          >
            Next
          </Button>
        </Stack>
        <Text color={"#7B58F4"} cursor={"pointer"}>
          Add tag
        </Text>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify={"right"}
          display={["none", "flex"]}
        >
          <Button
            colorScheme="#7B58F4;"
            variant="outline"
            width={"200px"}
            h={"50px"}
            type="button"
            _hover={{ color: "none" }}
            onClick={handleDrafts}
            >
            {mutation.isLoading ? <Spinner color="#7B58F4" />:'Save to drafts'}
          </Button>
          <Button
            colorScheme="#7B58F4;"
            variant="solid"
            width={"200px"}
            h={"50px"}
            type="button"
            onClick={handleNext}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LessonDescription;
