import {useState, useRef,useEffect} from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { ChatInput, ChatHeader, ChatArea } from '../Components';
import { messageTemplate } from '../Components/MessageData';

interface chatState {
    from: string;
    chatId: string;
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
    const [ messages, setMessages] = useState<chatState[]>([]);
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

    }

    useEffect(() =>{
        const message = messageTemplate.filter((message) => message.key === chatkey)
        setMessageObj(message[0])
    }, [messageObj])


    return (
        <Flex flexDir="column">
            <ChatHeader chatname={messageObj.chatname}/>
            <ChatArea />
            <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
        </Flex>
    )
}

export default MessagesPage;