import Heading from "./Heading";
import { BsSend } from "react-icons/bs";

const ChatBot = () => (
  <>
    <Heading pageName="Chat with Bot" />

    <section className="chat">
      <div>

      </div>

      <div className="chat-field">
        <input type="text" placeholder="Type your message" required />
        <button className="icon">
          <BsSend />
        </button>
      </div>
    </section>
  </>
);

export default ChatBot;
