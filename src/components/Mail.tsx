import { ChangeEvent, useRef, useState } from "react";
import Heading from "./Heading";
import { ImAttachment } from "react-icons/im";

interface Mail {
  from: string;
  to: string;
  subject: string;
  message: string;
  file?: File;
}

const MailUs = () => {
  const [ mailMessage, setMail ] = useState<Mail>({
    from: "",
    to: "",
    subject: "",
    message: "",
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    let newVal = {
      [newKey]: val,
    };
    setMail((state) => ({...state, ...newVal}));
  }

  return (
    <section className="mail-container">
      <Heading pageName="Mail Us" />
      <div className="mail">
        <h2 className="heading3 page-heading">Compose</h2>

        <form className="mail-us">
          <input type="text" name="from" placeholder="From" onChange={handleChange} value={mailMessage.from} />
          <input type="text" name="to" placeholder="To" onChange={handleChange} value={mailMessage.to} />
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={mailMessage.subject} />
          <textarea name="message" placeholder="Compose your message" id="" cols={30} rows={30} onChange={handleChange} value={mailMessage.message}></textarea>

          <div className="file-btn-flex">
            <button className="file-btn p">
              <ImAttachment /> 
              {mailMessage.file ? `${mailMessage.file.name}` : "Attach file"}
            </button>
            <input type="file" name="file" ref={inputRef} />
            <button type="submit" className="btn heading3">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MailUs;
