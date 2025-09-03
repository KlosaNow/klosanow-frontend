import React from "react";

export default React.lazy(
  () => import(/* webpackChunkName: "StudyChat" */ "./router")
);
