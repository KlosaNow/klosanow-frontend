import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  allLessonsPageSlug,
  createLessonFormPageSlug,
  draftsPageSlug,
} from "src/data/pageUrl";
import { Error } from "..";

const CreateLesson = React.lazy(() => import("./pages/CreateLesson"));
const CreateLessonForm = React.lazy(() => import("./pages/CreateLessonForm"));
const AllLessons = React.lazy(() => import("./pages/AllLessons"));
const Drafts = React.lazy(() => import("./pages/Drafts"));

const CreateLessonRouter = () => {
  return (
    <Routes>
      <Route index element={<CreateLesson />} />
      <Route
        path={`${createLessonFormPageSlug}`}
        element={<CreateLessonForm />}
      />
      <Route path={`${allLessonsPageSlug}`} element={<AllLessons />} />
      <Route path={`${draftsPageSlug}`} element={<Drafts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default CreateLessonRouter;
