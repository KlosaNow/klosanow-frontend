import React from "react";
import { Route, Routes } from "react-router-dom";
import StudyChat from "./pages/StudyChat";
import { contactsPageSlug, createStudyChatSlug } from "../../data/pageUrl";
import Contacts from "./pages/Contacts";

const CreateStudyChat = React.lazy(() => import("./pages/CreateStudyChat"));

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
