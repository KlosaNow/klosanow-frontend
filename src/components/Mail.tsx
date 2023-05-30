import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import Header from "./Header";
import { ImAttachment } from "react-icons/im";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";

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
    file: undefined,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    let newVal = {
      [newKey]: val,
    };
    setMail((state) => ({...state, ...newVal}));
  };

  const clickRedirect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("work")
    if (e.currentTarget.files) {
      let newFile = e.currentTarget.files[0];
      setMail((state) => ({...state, file: newFile}));
    }
  };

  return (
    <Box minH="100vh" bg="#f6f6f6" className="mail-containe">
      <Header pageName="Mail Us" link="/help" />
      <Box p="10px 6%" className="mail">
        <Text mb="20px"  className="heading3">Compose</Text>

        <form className="mail-us">
          <Input variant="outline" borderColor="black.5" bg="nuetral.50" type="text" name="from" placeholder="From" onChange={handleChange} value={mailMessage.from} />
          <Input variant="outline" bg="nuetral.50" borderColor="black.5" type="text" name="to" placeholder="To" onChange={handleChange} value={mailMessage.to} />
          <Input variant="outline" bg="nuetral.50" borderColor="black.5" type="text" name="subject" placeholder="Subject" onChange={handleChange} value={mailMessage.subject} />
          <Textarea name="message" size="md" rows={10} bg="nuetral.50" borderColor="black.5" placeholder="Compose your message" id="" onChange={handleChange} value={mailMessage.message}></Textarea>

          <Flex align="center" justify="space-between" className="file-btn-flex">
            <Button display="flex" alignItems="center" gap="10px" bg="transparent" _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} color="neutral.80" size="sm" className="file-btn" onClick={clickRedirect}>
              <ImAttachment /> 
              {mailMessage.file ? `${mailMessage.file.name}` : "Attach file"}
            </Button>
            <Input type="file" name="file" hidden ref={inputRef} onChange={handleFile} />
            <Button type="submit" bg="primary.50" borderRadius="4px" size="lg" color="neutral.50" className="heading3">Send</Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default MailUs;
