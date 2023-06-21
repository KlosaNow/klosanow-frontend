import {useState, useRef,useEffect} from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { ChatInput, ChatHeader, ChatArea } from '../Components';
import { messageTemplate } from '../Components/MessageData';

interface Messages {
    from: string;
    chatId: number;
    message: string;

}

interface MessageObject {
    chatname: string;
    key: string;
    lastmsg: string;
    lastmsg_time: string;
    unread_messages: number;
}



const MessagesPage = () => {
    const {chatkey} = useParams()
    const [inputMessage, setInputMessage] = useState<string>("");
    const [messages, setMessages] = useState<Messages[]>([]);
    const scroll = useRef<HTMLDivElement | null>(null)
    const [messageObj,setMessageObj] = useState<MessageObject>(
        {
            chatname: '',
            key: '',
            lastmsg: '',
            lastmsg_time: '',
            unread_messages: 0,
          }
    )

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage: Messages = {
              chatId: Date.now(),
              message: inputMessage,
              from: 'Me',
            };
            setMessages([...messages, newMessage]);
            console.log(newMessage)
            setInputMessage('');
          }
    }

    useEffect(() =>{
        const message = messageTemplate.filter((message) => message.key === chatkey)
        setMessageObj(message[0])
    }, [messageObj])

    useEffect(() => {
        scroll.current?.scrollTo(0, scroll.current?.scrollHeight);
      });

    return (
        <Flex flexDir="column">
            <ChatHeader chatname={messageObj.chatname}/>
                <Flex flexDir="column" mt={"74px"} px={"10px"} pt={4}
                 align={"flex-end"} ref={scroll} width={"100%"}>
                    {
                        messages.map((msg) => 
                            (
                                <Flex key={msg.chatId} width={"fit-content"} maxW={"240px"}
                                    bottom={"0px"}
                                    flexDir={"column"}
                                    gap={"8px"}>
                                    <Box border={"none"} borderRadius={"6px"}
                                        color="#fff"
                                        background={"#7B58F4"} p={"8px"} 
                                        alignItems={"flex-end"}>
                                            {msg.message}
                                    </Box>
                                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                                        <Text color="#7B58F4" fontWeight={"400"} fontSize={"12px"}>{msg.from}</Text>
                                        <Text color="#2A2A2A" fontWeight={"400"} fontSize={"10px"}>10:00 am</Text>
                                    </Flex>
                                </Flex>
                            )
                        )
                    }
                </Flex>
            <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
        </Flex>
    )
}

export default MessagesPage;