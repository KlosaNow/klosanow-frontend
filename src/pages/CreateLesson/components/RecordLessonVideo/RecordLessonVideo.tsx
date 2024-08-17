import React from "react";

import { CreateLessonFormContext } from "../../context/CreateLessonFormContext";

import LessonPreview from "./LessonPreview";
import PreviewVideo from "./PreviewVideo";

const RecordLessonVideo: React.FC = () => {
  const { videoUrl, showPreviewVideo } = React.useContext(
    CreateLessonFormContext
  );

  return (
    <>{showPreviewVideo && !!videoUrl ? <PreviewVideo /> : <LessonPreview />}</>
  );
};

export default RecordLessonVideo;
