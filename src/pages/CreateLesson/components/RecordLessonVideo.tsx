import { useState } from "react";
import { Stack, Button, Text, Center, Alert, AlertIcon } from "@chakra-ui/react";
import {
  useReactMediaRecorder,
} from "react-media-recorder";
import { RiPlayCircleFill, RiStopCircleFill, RiDeleteBinFill, RiSendPlane2Fill } from 'react-icons/ri';
import LessonReadyForRecord from "./LessonReadyForRecord";
import Overlay from "./OverlayHighlighter";

// interface CustomReactMediaRecorderRenderProps
//   extends ReactMediaRecorderRenderProps {
//   mediaBlobUrl: Blob | null;
// }

export const RecordLessonVideo = () => {
    const [base64Video, setBase64Video] = useState<string | null>(null);
    const [expanded, setExpanded] = useState<boolean>(false);
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
    // blob,
  } = useReactMediaRecorder({ screen: true });

  const sendRecording = async () => {
    // if (!base64Video) {
    //   console.error("No recording available.");
    //   return;
    // }

    // try {
    //   const response = await fetch("YOUR_API_ENDPOINT", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ video: base64Video }),
    //   });

    //   if (response.ok) {
    //     alert("Video sent successfully!");
    //   } else {
    //     alert("Failed to send video.");
    //   }
    // } catch (error) {
    //   console.error("Error sending video:", error);
      // }
      
    //   console.log("jkjk", mediaBlobUrl, base64Video)
};

const handleBlobChange = async () => {
    if (mediaBlobUrl) {
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
    
        
          console.log("jkjk", mediaBlobUrl, response.url)

    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result?.toString().split(",")[1];
      setBase64Video(base64data || null);
    };
  }
};

    
const handleExpandVideo = () => {
    setExpanded(true);
  };

  return (
      <Stack spacing={4} position="relative">
           <Alert status='success' variant='left-accent' maxW="400px">
    <AlertIcon />
    <Text textTransform={'capitalize'} fontWeight={'600'}>{status == 'idle' ? "Ready to start recording?" : status + "..."}</Text>
  </Alert>
            
            {
                mediaBlobUrl ?
                <video src={mediaBlobUrl} controls loop autoPlay style={{ borderRadius: '20px', width: expanded ? '100vw' : 'auto' }} onClick={handleExpandVideo} /> :
                <LessonReadyForRecord />
            }
            <Center gap={6} mt="20px">
                {status !== "recording" && (
                    <Button _hover={{background:''}} fontSize={'14px'} color={'#FFFFFF'} borderRadius= '10px' background= '#7B58F4' width= '166px' padding= '6px 18px' onClick={startRecording} leftIcon={<RiPlayCircleFill fontSize={23} />}> Start Recording</Button>
                )}
                {status === "recording" && (
                    <Button _hover={{background:''}} fontSize={'14px'} color={'#FFFFFF'} borderRadius= '10px' background= '#7B58F4' width= '166px' padding= '6px 18px'  onClick={stopRecording} leftIcon={<RiStopCircleFill fontSize={23} />}> Stop Recording</Button>
                )}
                {status !== "idle" && status === "stopped" && (
                    <Button _hover={{background:''}} fontSize={'14px'} color={'#FF6666'} borderRadius= '10px' background= 'transparent' border="1px solid #FF6666" width= '166px' padding= '6px 18px'  onClick={() => { clearBlobUrl(); setBase64Video(null); }} leftIcon={<RiDeleteBinFill />}>
                    Delete Recording
                    </Button>
                )}
                {status === "stopped" && (
                    <Button _hover={{background:''}} fontSize={'14px'} color={'#FFFFFF'} borderRadius= '10px' background= '#121212' width= '166px' padding= '6px 18px'  onClick={() => { handleBlobChange(); sendRecording(); }} leftIcon={<RiSendPlane2Fill />}>
                    Send Recording
                    </Button>
                )}
        </Center>
        
          {mediaBlobUrl ? null : <Overlay />}
    </Stack>
  );
};


export default RecordLessonVideo