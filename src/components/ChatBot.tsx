import Header from "./Header";
import { BsSend } from "react-icons/bs";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";

interface messageInterface {
  id: number;
  text: string;
  owner: string;
}

const ChatBot = () => {
  const [ messages, setMessage ] = useState<messageInterface[]>([]);
  const [ userInput, setUserInput ] = useState<string>("");
  const scroll = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    setMessage((mes) => ([...mes, {
      id: mes.length + 1,
      text: userInput,
      owner: "user",
    }]));

    setUserInput("");
    const reply = setTimeout(() => {
      setMessage((mes) => ([...mes, {
        id: mes.length + 1,
        text: "Hello User, how may I help you",
        owner: "bot",
      }]));
    }, 1000);

    return () => (clearTimeout(reply));
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  }

  useEffect(() => {
    const reply = setTimeout(() => {
      if (messages.length < 1) {
        setMessage((mes) => ([...mes, {
          id: mes.length + 1,
          text: "Hello User, how may I help you",
          owner: "bot",
        }]));
      }
    }, 300);

    return () => (clearTimeout(reply));
  }, [messages]);

  useEffect(() => {
    scroll.current?.scrollTo(0, scroll.current?.scrollHeight);
  });


    return (<>
      <Header pageName="Chat with Bot" link="/help" />

      <Flex direction="column" align="stretch" justify="flex-end" gap="20px" p="10px 6%" h="calc(100vh - 58px)">
        <Box flex="calc(100% - 41px)" position="relative" overflowY="auto">
          <Box position="absolute" top="0" left="0" right="0" bottom="0">
            <Flex direction="column" align="stretch" justify="flex-end" gap="5px" w="100%" h="100%">
              <Flex direction="column" gap="5px" align="stretch" w="100%" overflowY="auto" justify="flex-start" ref={scroll}>
                { messages.map((message) => (
                  <Message owner={message.owner} text={message.text} key={message.id} />
                ))}
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Flex align="center" justify="space-between" border="0.5px" borderColor="black.10" borderRadius="4px" borderStyle="solid" p="10px">
          <Input variant="unstyled" w="90%" h="100%" type="text" placeholder="Type your message" onChange={handleInput} value={userInput} required />
          <button className="icon" onClick={sendMessage}>
            <BsSend />
          </button>
        </Flex>
      </Flex>
    </>
  );
};

export default ChatBot;
