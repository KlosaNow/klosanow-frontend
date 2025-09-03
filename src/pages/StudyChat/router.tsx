import React from "react";
import { Route, Routes } from "react-router-dom";
import { contactsPageSlug, createStudyChatSlug } from "../../data/pageUrl";

const StudyChat = React.lazy(() => import("./pages/StudyChat"));
const CreateStudyChat = React.lazy(() => import("./pages/CreateStudyChat"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

const StudyChatRouter: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StudyChat />} />
      <Route path={createStudyChatSlug} element={<CreateStudyChat />} />
      <Route path={contactsPageSlug} element={<Contacts />} />
    </Routes>
  );
};

export default StudyChatRouter;
