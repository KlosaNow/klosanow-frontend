import React from "react";
import {
  Box,
  Circle,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { EmojiIcon, InsertIcon, MicIcon } from "../../assets/svgs";
import Picker from "emoji-picker-react";
import { colors } from "../../../../data/colors";

import styles from "./styles.module.scss";
import { renderPreveiwAction, renderUploadedDataPreview } from "../../utils";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BsSendFill } from "react-icons/bs";

const ChatFooter: React.FC = () => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const uploadBtnRef = React.useRef<HTMLInputElement>(null);

  const { isRecording, startRecording, stopRecording, recordingBlob } =
    useAudioRecorder();

  const initialState = {
    message: "",
    showEmoji: false,
    audioUrl: "",
    uploadedfile: {
      url: "",
      type: "",
      name: "",
    },
  };
  const [state, setState] = React.useState<typeof initialState>(initialState);

  const handleStateUpdate = (newState: Partial<typeof initialState>) =>
    setState((state) => ({ ...state, ...newState }));

  const handleSend = () => {
    const messageData = {
      message: state.message,
      date: new Date(Date.now()),
    };

    console.log(messageData);

    handleStateUpdate({ message: "", showEmoji: false });
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

  const handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.currentTarget.files) return;

    const file = e.currentTarget.files[0];

    const uploadedfile = {
      url: URL.createObjectURL(file),
      type: file.type,
      name: file.name,
    };

    handleStateUpdate({
      uploadedfile,
    });
  };

  const renderUploadPreview = () => (
    <Box
      position="absolute"
      minH="100px"
      maxH="224px"
      minW="100px"
      maxW="320px"
      top="-210px"
      left={{
        base: "5px",
        md: "10px",
        xl: "50px",
      }}
      borderRadius="8px"
      bg={colors.primary[5]}
      p="10px"
    >
      {renderUploadedDataPreview(
        state.uploadedfile.type,
        state.uploadedfile.url
      )}

      <Text fontSize="12px" color="#555555" m="4px 0" maxW="250px">
        {state.uploadedfile.name.substring(0, 40)}
        {state.uploadedfile.name.length >= 20 && "..."}
      </Text>

      {renderPreveiwAction(
        () => null,
        () => handleStateUpdate({ uploadedfile: initialState.uploadedfile })
      )}
    </Box>
  );

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
      {!!state.uploadedfile.url && renderUploadPreview()}

      {!!state.audioUrl && (
        <Box
          borderRadius="8px"
          bg={colors.primary[5]}
          p="10px"
          maxW="552px"
          w="100%"
          position="absolute"
          top="-70px"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <audio src={state.audioUrl} controls></audio>
            <Box maxW="100px" w="100%">
              {renderPreveiwAction(
                () => null,
                () => handleStateUpdate({ audioUrl: "" })
              )}
            </Box>
          </Flex>
        </Box>
      )}

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
          onClick={() => !isRecording && uploadBtnRef.current?.click()}
          cursor={isRecording ? "not-allowed" : "pointer"}
        />

        <form className={styles.ChatFooter_form} autoComplete="off">
          <InputGroup display="flex">
            <Textarea
              placeholder="Type your message..."
              value={state.message}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                handleStateUpdate({
                  message: e.currentTarget.value,
                  showEmoji: false,
                })
              }
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
            onClick={handleSend}
          >
            <BsSendFill />
          </Circle>
        ) : (
          <Circle
            size="40px"
            as="button"
            aria-label="mic"
            bg={isRecording ? colors.primary[20] : colors.primary[10]}
            onClick={() => (isRecording ? stopRecording() : startRecording())}
            disabled={!!state.audioUrl}
            cursor={!!state.audioUrl ? "not-allowed" : "pointer"}
          >
            <MicIcon />
          </Circle>
        )}
      </Flex>
    </Flex>
  );
};

export default ChatFooter;
