import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
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
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { clearFileUrl, setFileUrl } from "src/utils/constant";
import {
  deletedFile,
  FileUploadResponseStatus,
  uploadFile,
} from "src/utils/file-upload";

interface CreateStudyChatValue {
  title: string;
  description: string;
}

interface StudyGroupInfoState {
  loading: boolean;
  imageUrl: string;
  imageName: string;
}

const StudyGroupInfo: React.FC = () => {
  const { createStudyChat } = useChatWebSocket();
  const uploadImgRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const toast = useToast();

  const location = useLocation();
  const { contacts } = location.state as StudyGroupInfoLocation;

  const initialState: StudyGroupInfoState = {
    loading: false,
    imageName: "",
    imageUrl: "",
  };
  const [state, setState] = React.useState(initialState);

  const handleStateUpdate = (newState: Partial<StudyGroupInfoState>) =>
    setState((state) => ({ ...state, ...newState }));

  const participantsId = contacts.map((item) => item._id);

  const initialValues: CreateStudyChatValue = {
    title: "",
    description: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    createStudyChat(
      {
        title: values.title,
        photoUrl: state.imageUrl,
        members: participantsId,
      },
      (res) => {
        if (res) navigate(studyChatPagePath);
        else {
          toast({
            title: "Unable to create study chat",
            description: "Try again later",
            status: "error",
            duration: 3000,
            position: "top-right",
          });
        }
      }
    );
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLInputElement>) => {
    handleStateUpdate({ loading: true });
    e.preventDefault();
    try {
      if (!e.currentTarget.files) return;

      const file = e.currentTarget.files[0];
      const res = await uploadFile(file);

      if (!res || !res.data || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Unable to fetch data");

      if (res.status === FileUploadResponseStatus.Success) {
        handleStateUpdate({
          loading: false,
          imageUrl: res.data.url,
          imageName: file.name,
        });
        setFileUrl("study_chat", res.data.url);
      }
    } catch (error: any) {
      handleStateUpdate({ loading: false });
      toast({
        title: error.message ?? error.response ?? "Something went wrong",
        description: "Try again later",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const handleDeleteFile = async () => {
    handleStateUpdate({ loading: true });
    try {
      const res = await deletedFile(state.imageUrl);

      if (!res || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Unable to delete file");

      if (res.status === FileUploadResponseStatus.Success) {
        handleStateUpdate({ loading: false, imageName: "", imageUrl: "" });
        clearFileUrl("thumbnail_url");
      }
    } catch (error) {
      handleStateUpdate({ loading: false });
      toast({
        title: "Something went wrong",
        description: "Try again later",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <Box
      padding={["10px 10px 100px", "24px 41px 0"]}
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
              <Flex gap="31px" alignItems="center" m="36px 0">
                <Box
                  w="150px"
                  h="150px"
                  bg="#D9D9D9"
                  borderRadius="10px"
                  overflow="hidden"
                >
                  {!!state.imageUrl && (
                    <Image
                      src={state.imageUrl}
                      alt={state.imageName}
                      w="100%"
                      h="100%"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                  )}

                  {state.loading && <Spinner />}
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
                    disabled={!!state.imageUrl}
                  >
                    Upload New Image
                  </Button>
                  <Button
                    {...formButtonStyles}
                    leftIcon={<DeleteIcon />}
                    onClick={() => handleDeleteFile()}
                    disabled={!state.imageUrl}
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
                placeholder="Group name"
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
                  Participants: {participantsId.length}
                </Text>

                {contacts && (
                  <Grid templateColumns="repeat(4, 1fr)" gap="35px">
                    {contacts.map(({ image, _id, name }) => (
                      <GridItem
                        key={uniqueId(`participants-${_id}`)}
                        placeItems="center"
                      >
                        <Circle size="60px" bg="#b1b1b1" overflow="hidden">
                          <Image
                            src={image}
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
                  disabled={!isValid || !dirty || !state.imageUrl}
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
