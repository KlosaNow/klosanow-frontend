import  { FC, useState } from 'react'
import {  Box, Text, Image, Button } from '@chakra-ui/react';
import { BsRecordCircleFill, BsPenFill, BsCursorFill } from "react-icons/bs";
import { FaPauseCircle} from 'react-icons/fa'
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

const RecordLesson:FC = () => {
  const [recorder, setRecorder] =
    useState<RecordRTC.RecordRTCPromisesHandler | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [stream, setStream] = useState<boolean>(false)
  const [timestamp, setTimeStamp] = useState<string>("")
  const [isPaused, setIsPuased] = useState<boolean>(false)

 const startRecording = async () => {

       const mediaDevices = navigator.mediaDevices;
       const stream: MediaStream = await mediaDevices.getDisplayMedia({
         video: {
           displaySurface: "monitor"
         },
         audio: true
       });
       const recorder: RecordRTC.RecordRTCPromisesHandler =
         new RecordRTCPromisesHandler(stream, {
           type: "video",
         });
       await recorder.startRecording();
       setRecorder(recorder);
       setStream(true)
 };

 const stopRecording = async () => {
     if(recorder){
       await recorder.stopRecording()
       const blob:Blob = await recorder.getBlob()
       setVideoBlob(blob)
       setRecorder(null)
       setStream(false);
       setIsPuased(false);
     }
     
     
 }


 const handleRecording = () => {
  if(recorder){
    stopRecording()
  } else {
    startRecording()
  }
  
 }

 const pauseRecording = async () => {
    if(recorder){
      await recorder.pauseRecording()
      setIsPuased(true);
    }

 }

 const resumeRecord = async () => {
  if(recorder){
    await recorder.resumeRecording();
    setIsPuased(false);
  }
  }


 const handlePauseRecord = () =>{
  if(isPaused){
    resumeRecord()
  } else {
    pauseRecording()
  }
 }



  return (
    <Box>
      {!videoBlob ? (
        <Box px="3" bg="#F8F7FE" mb="5">
          <Box py={["0", "3"]}>
            <Text fontSize="32px" textColor="#DFA491">
              Chemical Compound
            </Text>
            <Text fontSize="16px" textColor="#AAAAAA">
              Lesson 1
            </Text>
          </Box>
          <Box>
            <Image
              src="https://picsum.photos/200/300"
              alt="Lesson thumbnail"
              width="full"
              height={["181px", "250px"]}
            />

            <Text py="3">
              A compound is a thing composed of two or more separate elements; a
              mixture. The air smelled like a compound of diesel and petrol
              fumes.The word "compound" also refers to any substance formed from
              two or more elements chemically united in fixed proportions. A
              compound is a mixture of two or more separate elements. A chemical
              compound is a substance formed from two or more elements
              chemically united in fixed proportions. The word "compound" also
              refers to any substance formed from two or more elements
              chemically united in fixed proportions. A compound is a mixture of
              two or more separate elements.
              <br /> A chemical compound is a substance formed from two or more
              elements chemically united in fixed proportions. A compound is a
              mixture of two or more separate elements. A chemical compound is a
              substance formed from two or more elements chemically united in
              fixed proportions. A compound is a mixture of two or more separate
              elements. <br />A chemical compound is a substance formed from two
              or more elements chemically united in fixed proportions.A compound
              is a mixture of two or more separate elements. A chemical compound
              is a substance formed from two or more elements chemically united
              in fixed proportions.A compound is a mixture of two or more
              separate elements. A chemical compound is a substance formed from
              two or more elements chemically united in fixed proportions.
            </Text>
          </Box>
        </Box>
      ) : (
        <video
          style={{ marginBottom: "20px" }}
          controls
          src={window.URL.createObjectURL(videoBlob)}
        ></video>
      )}
      <Box
        width={["full", "60%"]}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py="2"
        bg="white"
        shadow="md"
        borderRadius="md"
        border="1px"
        borderColor="gray.200"
        gap="5"
      >
        <Text color="black" fontSize="16px">
          0hrs:0mins:11secs
        </Text>
        <Button
          display="flex"
          flexDirection="column"
          bg="none"
          gap="2"
          py="1"
          onClick={handleRecording}
        >
          <BsRecordCircleFill color="red" width="2rem" height="2rem" />
          <Text fontSize="10px" textColor="#AAAAAA" textAlign="center">
            {recorder === null ? "Record" : "Stop Recording"}
          </Text>
        </Button>
        <Button
          display="flex"
          flexDirection="column"
          bg="none"
          gap="2"
          py="1"
          onClick={handlePauseRecord}
          disabled={!!stream}
        >
          <FaPauseCircle color="yellow" />
          <Text fontSize="10px" textColor="#AAAAAA">
            {isPaused ? "Resume" : "pause"}
          </Text>
        </Button>
        <Button display="flex" flexDirection="column" bg="none" gap="2" py="1">
          <BsPenFill color="#7B58F4" />
          <Text fontSize="10px" textColor="#AAAAAA">
            Pen Tool
          </Text>
        </Button>
        <Button display="flex" flexDirection="column" bg="none" gap="2" py="1">
          <BsCursorFill color="#7B58F4" />
          <Text fontSize="10px" textColor="#AAAAAA">
            Move Tool
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

export default RecordLesson;