import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BackButtonIcon, DeleteIcon, UploadIcon } from "../../assets/svgs";
import {
  formButtonStyles,
  createButtonStyles,
  inputStyles,
} from "../../data/styles";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { StudyGroupInfoLocation } from "../../../../types/studyChat";
import { uniqueId } from "lodash";
import { studyGroupInfoValidationSchema } from "../../validators";
import { studyChatPagePath } from "../../../../data/pageUrl";

const StudyGroupInfo: React.FC = () => {
  const uploadImgRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { contacts } = location.state as StudyGroupInfoLocation;

  const [imageUrl, setImageUrl] = React.useState({
    url: "",
    name: "",
  });

  const initialValues = {
    title: "",
    description: "",
    participants: contacts || [],
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    navigate(studyChatPagePath);
  };

  const handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.currentTarget.files) return;

    const file = e.currentTarget.files[0];

    setImageUrl({
      url: URL.createObjectURL(file),
      name: file.name,
    });
  };

  return (
    <Box
      padding={["10px 10px 100px", "100px 41px 0"]}
      width="100%"
      maxWidth="525px"
      bg="#fafafa"
    >
      <Flex alignItems="center" gap="8px">
        <Box as="button" onClick={() => navigate(-1)}>
          <BackButtonIcon />
        </Box>
        <Text
          fontFamily="Playfair Display, serif"
          fontSize="24px"
          fontWeight="600"
        >
          StudyGroupInfo
        </Text>
      </Flex>

      <Box h="628px" overflowY="scroll">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={studyGroupInfoValidationSchema}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            dirty,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Flex gap="31px" alignItems="center" m="52px 0">
                <Box
                  w="150px"
                  h="150px"
                  bg="#D9D9D9"
                  borderRadius="10px"
                  overflow="hidden"
                >
                  {!!imageUrl.url && (
                    <Image
                      src={imageUrl.url}
                      alt={imageUrl.name}
                      w="100%"
                      h="100%"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                  )}
                </Box>

                <Flex flexDir="column" gap="17px">
                  <Input
                    type="file"
                    ref={uploadImgRef}
                    name="imageUrl"
                    accept="image/*"
                    onChange={handleFileUpload}
                    hidden
                  />
                  <Button
                    {...formButtonStyles}
                    leftIcon={<UploadIcon />}
                    onClick={() => uploadImgRef.current?.click()}
                  >
                    Upload New Image
                  </Button>
                  <Button
                    {...formButtonStyles}
                    leftIcon={<DeleteIcon />}
                    onClick={() =>
                      setImageUrl({
                        url: "",
                        name: "",
                      })
                    }
                  >
                    Delete Image
                  </Button>
                </Flex>
              </Flex>

              <Input
                {...inputStyles}
                value={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
                name="title"
                placeholder="Social Study 101"
                borderColor={touched.title ? "#BA1A1A" : "#958DA5"}
                mb={!touched.title ? "24px" : "5px"}
              />
              {touched.title ? (
                <Text
                  mb="24px"
                  fontSize="12px"
                  color="#BA1A1A"
                  borderColor="#958DA5"
                >
                  {errors.title}
                </Text>
              ) : null}

              <Input
                {...inputStyles}
                placeholder="Add a description"
                value={values.description}
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <Box mt="55px">
                <Text mb="16px" fontSize="16px" fontWeight="500">
                  Participants: {values.participants.length}
                </Text>

                {contacts && (
                  <Grid templateColumns="repeat(4, 1fr)" gap="35px">
                    {contacts.map(({ imageUrl, id, name }) => (
                      <GridItem
                        key={uniqueId(`participants-${id}`)}
                        placeItems="center"
                      >
                        <Circle size="60px" bg="#b1b1b1" overflow="hidden">
                          <Image
                            src={imageUrl}
                            alt={name}
                            objectFit="cover"
                            h="100%"
                            w="100%"
                          />
                        </Circle>
                        <Text
                          fontFamily="Encode Sans"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {name}
                        </Text>
                      </GridItem>
                    ))}
                  </Grid>
                )}
              </Box>

              <Flex justifyContent="center">
                <Button
                  {...createButtonStyles}
                  _disabled={{
                    cursor: "not-allowed",
                    bg: "#958DA5",
                  }}
                  type="submit"
                  disabled={!isValid || !dirty}
                  isLoading={isSubmitting}
                >
                  Create
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default StudyGroupInfo;
