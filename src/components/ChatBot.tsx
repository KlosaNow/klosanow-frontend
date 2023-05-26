import Header from "./Header";
import { BsSend } from "react-icons/bs";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";

interface Text {
  id: number;
  text: string;
  owner: string;
}

const ChatBot = () => {
  const [ messages, setMessage ] = useState<Text[]>([]);
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

      <section className="chat">
        <div className="chats">
          <div className="scroll">
            <div className="chat-flex">
              <div className="scrollable" ref={scroll}>
                { messages.map((message) => (
                  <Message owner={message.owner} text={message.text} key={message.id} />
                ))}
              </div>
            </div>
          </div>
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
