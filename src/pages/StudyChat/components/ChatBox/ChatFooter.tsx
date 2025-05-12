import React from "react";
import {
  Box,
  Circle,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Spinner,
  Text,
  Textarea,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { EmojiIcon, InsertIcon, MicIcon } from "../../assets/svgs";
import Picker from "emoji-picker-react";
import { colors } from "../../../../data/colors";
import { getUploadedDataPreview, renderPreveiwAction } from "../../utils";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BsSendFill } from "react-icons/bs";
import useChatWebSocket from "src/hooks/useChatWebSocket";
import { ChatListData, ChatType } from "src/types";
import {
  deletedFile,
  FileUploadResponseStatus,
  uploadFile,
} from "src/utils/file-upload";
import { clearFileUrl, setFileUrl } from "src/utils/constant";
import RecorderLoader from "../RecorderLoader";

import styles from "./styles.module.scss";

interface ChatFooterProps {
  activeChat: ChatListData;
  loading: boolean;
  handleRefresh: () => void;
}
const ChatFooter: React.FC<ChatFooterProps> = ({
  activeChat,
  loading,
  handleRefresh,
}) => {
  const toast = useToast();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const uploadBtnRef = React.useRef<HTMLInputElement>(null);

  const { sendChatMessage, sendStudyChatMessage } = useChatWebSocket();

  const {
    isRecording,
    startRecording,
    stopRecording,
    recordingBlob,
    recordingTime,
  } = useAudioRecorder();

  const initialState = {
    message: "",
    showEmoji: false,
    audioUrl: "",
    uploadedfile: {
      url: "",
      type: "",
      name: "",
    },
    detectedURLs: [] as string[],
    uploadingMedia: false,
  };
  const [state, setState] = React.useState<typeof initialState>(initialState);

  const handleStateUpdate = (newState: Partial<typeof initialState>) =>
    setState((state) => ({ ...state, ...newState }));

  const extractURLs = (text: string): string[] => {
    const urlRegex = /\b((https?:\/\/|www\.)[^\s/$.?#].[^\s]*)/gi;
    const matchedUrls = text.match(urlRegex) || [];
    return matchedUrls;
  };

  const handleSendAction = (message: string) => {
    if (activeChat.type === ChatType.Single)
      sendChatMessage({
        recipientId: activeChat?.recipient?._id || "",
        message: message,
      });
    else
      sendStudyChatMessage({
        studyChatId: activeChat?.id || "",
        message: message,
      });
  };

  const handleSend = (message: string) => {
    handleSendAction(message);
    clearFileUrl("chat-file");
    clearFileUrl("chat-audio");
    handleRefresh();
    handleStateUpdate(initialState);
  };

  const onEmojiClick = (emojiObject: any, _: MouseEvent) => {
    if (!inputRef.current) return;

    const cursor = inputRef.current.selectionStart;
    const text =
      state.message.slice(0, cursor) +
      emojiObject.emoji +
      state.message.slice(cursor);
    handleStateUpdate({ message: text, showEmoji: false });
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.currentTarget.files) return;

    try {
      handleStateUpdate({ uploadingMedia: true });
      const file = e.currentTarget.files[0];
      const res = await uploadFile(file);

      if (!res || !res.data || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Unable to fetch data");

      if (res.status === FileUploadResponseStatus.Success) {
        const uploadedfile = {
          url: res.data.url,
          type: file.type,
          name: file.name,
        };

        handleStateUpdate({
          uploadedfile,
        });

        setFileUrl("chat-file", res.data.url);
      }
    } catch (error: any) {
      toast({
        title: error.message ?? error.response ?? "Something went wrong",
        description: "Try again later",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    } finally {
      handleStateUpdate({ uploadingMedia: false });
    }
  };

  // const handleAudioUpload = async (blob: Blob) => {
  //   try {
  //     handleStateUpdate({ uploadingMedia: true });
  //     const file = new File([blob], `${activeChat.name}-${uniqueId("")}`);
  //     const res = await uploadFile(file);

  //     if (!res || !res.data || res.status !== FileUploadResponseStatus.Success)
  //       throw new Error("Unable to fetch data");

  //     if (res.status === FileUploadResponseStatus.Success) {
  //       handleStateUpdate({
  //         audioUrl: res.data.url,
  //       });

  //       setFileUrl("chat-audio", res.data.url);
  //     }
  //   } catch (error: any) {
  //     toast({
  //       title: error.message ?? error.response ?? "Something went wrong",
  //       description: "Try again later",
  //       status: "error",
  //       duration: 3000,
  //       position: "top-right",
  //     });
  //   } finally {
  //     handleStateUpdate({ uploadingMedia: false });
  //   }
  // };

  const handleDeleteFile = async (type: "audio" | "file") => {
    try {
      handleStateUpdate({ uploadingMedia: true });

      const res = await deletedFile(
        type === "audio" ? state.audioUrl : state.uploadedfile.url
      );

      if (!res || res.status !== FileUploadResponseStatus.Success)
        throw new Error("Unable to delete file");

      if (res.status === FileUploadResponseStatus.Success) {
        handleStateUpdate({
          uploadedfile: initialState.uploadedfile,
          audioUrl: "",
        });

        type === "file"
          ? clearFileUrl("chat-file")
          : clearFileUrl("chat-audio");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again later",
        status: "error",
        duration: 3000,
        position: "top-right",
      });
    } finally {
      handleStateUpdate({ uploadingMedia: true });
    }
  };

  const isDisabled =
    !!state.audioUrl || !!state.uploadedfile.url || state.uploadingMedia;

  const renderUploadPreview = () => (
    <Box borderRadius="8px" bg={colors.primary[5]} p="10px">
      {state.uploadingMedia ? (
        <Spinner />
      ) : (
        getUploadedDataPreview(state.uploadedfile.url, state.uploadedfile.type)
      )}

      <Text fontSize="12px" color="#555555" m="4px 0" maxW="250px">
        {state.uploadedfile.name.substring(0, 40)}
        {state.uploadedfile.name.length >= 20 && "..."}
      </Text>

      {renderPreveiwAction(
        () =>
          state.uploadedfile.url ? handleSend(state.uploadedfile.url) : null,
        () => handleDeleteFile("file")
      )}
    </Box>
  );

  React.useEffect(() => {
    if (loading) handleStateUpdate(initialState);
  }, [loading]);

  React.useEffect(() => {
    if (!recordingBlob) return;
    handleStateUpdate({ audioUrl: URL.createObjectURL(recordingBlob) });
  }, [recordingBlob]);

  return (
    <Flex
      h="120px"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        position="absolute"
        minW="100px"
        maxW="320px"
        bottom="110px"
        left={{
          base: "5px",
          md: "10px",
          xl: "50px",
        }}
      >
        {!!state.uploadedfile.url && renderUploadPreview()}

        {isRecording && <RecorderLoader time={recordingTime} />}

        {state.detectedURLs.length > 0 && (
          <UnorderedList listStyleType={"none"} margin={0}>
            {state.detectedURLs.map((url, idx) => (
              <ListItem
                borderRadius="8px"
                bg={colors.primary[5]}
                p="10px"
                key={idx}
              >
                {getUploadedDataPreview(url)}
              </ListItem>
            ))}
          </UnorderedList>
        )}

        {!!state.audioUrl && (
          <Box borderRadius="8px" bg={colors.primary[5]} p="10px" w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <audio src={state.audioUrl} controls></audio>
              <Box maxW="100px" w="100%">
                {/* {renderPreveiwAction(
                  () => (state.audioUrl ? handleSend(state.audioUrl) : null),
                  () => handleDeleteFile("audio")
                )} */}
                {renderPreveiwAction(
                  () => null,
                  () => handleStateUpdate({ audioUrl: "" })
                )}
              </Box>
            </Flex>
          </Box>
        )}
      </Box>

      <Flex
        bg={colors.primary[5]}
        maxW="552px"
        w="100%"
        p="13px 17px 14px"
        borderRadius="10px"
        alignItems="center"
        gap="16px"
        position="relative"
      >
        <Input
          ref={uploadBtnRef}
          type="file"
          onChange={handleFileUpload}
          id="upload"
          hidden
        />
        <IconButton
          bg="transparent"
          _hover={{ bg: "transparent" }}
          aria-label="insert"
          icon={<InsertIcon />}
          disabled={isRecording || isDisabled}
          onClick={() => !isRecording && uploadBtnRef.current?.click()}
          cursor={isRecording ? "not-allowed" : "pointer"}
        />

        <form className={styles.ChatFooter_form} autoComplete="off">
          <InputGroup display="flex">
            <Textarea
              placeholder="Type your message..."
              value={state.message}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                const value = e.currentTarget.value;
                const urls = extractURLs(value);
                handleStateUpdate({
                  message: value,
                  showEmoji: false,
                  detectedURLs: urls,
                });
              }}
              name="message"
              ref={inputRef}
              w="100%"
              bg="#fff"
              borderColor="#fff"
              focusBorderColor="#fff"
              h="59px"
              minH="0"
              borderRadius="50px"
              resize="none"
              verticalAlign="middle"
              disabled={isRecording}
            />

            <InputRightElement top="10px" right="10px">
              <IconButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                aria-label="emoji"
                icon={<EmojiIcon />}
                onClick={() =>
                  handleStateUpdate({ showEmoji: !state.showEmoji })
                }
              />
            </InputRightElement>
          </InputGroup>
        </form>

        {state.showEmoji && (
          <Picker
            className={styles.ChatFooter_picker}
            onEmojiClick={onEmojiClick}
          />
        )}

        {state.message.length !== 0 ? (
          <Circle
            size="40px"
            as="button"
            aria-label="send"
            bg={colors.primary[10]}
            onClick={() => handleSend(state.message)}
          >
            <BsSendFill />
          </Circle>
        ) : (
          <Circle
            size="40px"
            as="button"
            aria-label="mic"
            opacity={isDisabled ? 0.6 : 1}
            bg={isRecording ? colors.primary[20] : colors.primary[10]}
            onClick={() => (isRecording ? stopRecording() : startRecording())}
            disabled={isDisabled}
            cursor={isDisabled ? "not-allowed" : "pointer"}
          >
            <MicIcon />
          </Circle>
        )}
      </Flex>
    </Flex>
  );
};

export default ChatFooter;
