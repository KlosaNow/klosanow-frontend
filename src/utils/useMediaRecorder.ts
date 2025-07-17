import React from "react";
import { useToast } from "@chakra-ui/react";
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

interface MediaRecorderState {
  blob: Blob | null;
  status: RecordRTC.State;
  stream: MediaStream | null;
}

const useMediaRecorder = () => {
  const recorderRef = React.useRef<RecordRTCPromisesHandler | null>(null);
  const toast = useToast();

  const [state, setState] = React.useState<MediaRecorderState>({
    blob: null,
    status: "inactive",
    stream: null,
  });

  const handleStateUpdate = (newState: Partial<MediaRecorderState>) =>
    setState((prev) => ({ ...prev, ...newState }));

  const startRecording = async () => {
    try {
      // Get screen video
      const screenStream: MediaStream = await (
        navigator.mediaDevices as any
      ).getDisplayMedia({
        video: true,
        audio: true,
        preferCurrentTab: true,
      });

      // Try getting audio
      let audioStream: MediaStream | undefined;
      try {
        audioStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            noiseSuppression: true,
            echoCancellation: true,
          },
        });
        console.log(
          "🎤 Microphone stream tracks:",
          audioStream.getAudioTracks()
        );
      } catch (err) {
        console.warn(
          "Microphone access denied or not available. Proceeding with screen only.",
          err
        );
      }

      // Combine screen and audio tracks

      const combinedStream = new MediaStream();

      screenStream
        .getVideoTracks()
        .forEach((track) => combinedStream.addTrack(track));

      if (audioStream) {
        audioStream
          .getAudioTracks()
          .forEach((track) => combinedStream.addTrack(track));
      } else {
        toast({
          title: "Microphone not available",
          description: "Recording will proceed without audio",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
      }
      // const combinedStream = new MediaStream([
      //   ...screenStream.getTracks(),
      //   ...(audioStream?.getTracks() || []),
      // ]);
      console.log("Screen tracks", screenStream.getTracks());
      console.log("Audio tracks", audioStream?.getTracks());

      // Create recorder instance
      recorderRef.current = new RecordRTCPromisesHandler(combinedStream, {
        type: "video",
      });

      await recorderRef.current.startRecording();
      const status = await recorderRef.current.getState();

      handleStateUpdate({
        stream: combinedStream,
        status,
      });
    } catch (err) {
      console.error("Screen recording failed:", err);
      toast({
        title: "Permission Denied",
        description: "Please allow screen sharing to start recording.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const pauseRecording = async () => {
    if (!recorderRef.current) return;
    await recorderRef.current.pauseRecording();
    handleStateUpdate({ status: "paused" });
  };

  const resumeRecording = async () => {
    if (!recorderRef.current) return;
    await recorderRef.current.resumeRecording();
    handleStateUpdate({ status: "recording" });
  };

  const stopRecording = async () => {
    if (!recorderRef.current) return;

    await recorderRef.current.stopRecording();

    if (state.stream) {
      state.stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
    // state.stream?.getTracks().forEach((track) => track.stop());

    const blob = await recorderRef.current.getBlob();

    handleStateUpdate({
      blob,
      status: "stopped",
      stream: null,
    });

    toast({
      title: "Recording stopped",
      description: "Screen and audio recording has ended.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    blob: state.blob,
    mediaStatus: state.status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
  };
};

export default useMediaRecorder;
