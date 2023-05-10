import Heading from "./Heading";
import { BsSend } from "react-icons/bs";
import Message from "./Message";
import { useEffect, useState } from "react";

interface Text {
  id: number;
  text: string;
  owner: string;
}

const ChatBot = () => {
  const [ messages, setMessage ] = useState<Text[]>([]);
  const [ userInput, setUserInput ] = useState<string>("");

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
  }, []);

    return (<>
      <Heading pageName="Chat with Bot" />

      <section className="chat">
        <div className="chats">
          { messages.map((message) => (
            <Message owner={message.owner} text={message.text} key={message.id} />
          ))}
        </div>

        <div className="chat-field">
          <input type="text" placeholder="Type your message" onChange={handleInput} value={userInput} required />
          <button className="icon" onClick={sendMessage}>
            <BsSend />
          </button>
        </div>
      </section>
    </>
  );
};

export default ChatBot;
