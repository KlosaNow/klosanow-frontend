import React from "react";

export default React.lazy(
  () => import(/* webpackChunkName: "CreateLesson" */ "./router")
);

export { default as WatchLessonModal } from "./modals/WatchLessonModal";
