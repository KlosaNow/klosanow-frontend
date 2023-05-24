import { FaRobot } from "react-icons/fa";

interface MessageOwner {
  owner: string;
  text: string;
}

const Message = (props:MessageOwner) => {
  const { owner, text } = props;
  const bot = (owner == "bot");

  return (
    <article className={`message ${owner}`}>
      <p className="p">{text}</p>

      <div className="name-title">
        {bot && <>
          <div className="bot-icon">
            <FaRobot />
          </div>
          <p>Klosanow</p>
          </>
          }

          {
            !bot && <p>You</p>
          }
      </div>
    </article>
  )
};

export default Message;
