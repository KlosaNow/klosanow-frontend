import React from "react";

import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

interface MediaRecorderState {
  blob: Blob | null;
  status: RecordRTC.State;
  stream: MediaStream | null;
}

const useMediaRecorder = () => {
  const recorderRef = React.useRef<RecordRTCPromisesHandler | null>(null);

  const initialState: MediaRecorderState = {
    blob: null,
    status: "inactive",
    stream: null,
  };

  const [state, setState] = React.useState(initialState);
  const handleStateUpdate = (newState: Partial<MediaRecorderState>) =>
    setState((state) => ({ ...state, ...newState }));

  const startRecording = async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      preferCurrentTab: true,
    });

    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        noiseSuppression: true,
        echoCancellation: true,
        sampleRate: 4400,
      },
    });

    const stream = new MediaStream([
      ...screenStream.getTracks(),
      ...audioStream.getTracks(),
    ]);

    recorderRef.current = new RecordRTCPromisesHandler(stream, {
      type: "video",
    });

    await recorderRef.current.startRecording();
    const status = await recorderRef.current.getState();

    handleStateUpdate({ status, stream });
  };

  const stopRecording = async () => {
    if (!recorderRef.current) return;

    await recorderRef.current?.stopRecording();
    state.stream?.getTracks().forEach((track) => track.stop());

    handleStateUpdate({
      blob: await recorderRef.current.getBlob(),
      status: "stopped",
    });
  };

  return {
    blob: state.blob,
    mediaStatus: state.status,
    startRecording,
    stopRecording,
  };
};

export default useMediaRecorder;
