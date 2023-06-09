import { Route, Routes } from "react-router-dom";

// Auth Pages
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Otp from "./pages/Auth/Otp";
import CreateLessonLayout from "./components/Layout/CreateLessonLayout";
import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";
import Onboarding from "./pages/Onboarding";
import Help from "./components/Help";
import MailUs from "./components/Mail";
import ChatBot from "./components/ChatBot";
import CreateLesson from "./pages/CreateLesson";
import LessonTemplate from "./pages/CreateLesson/LessonTemplate";
import FreeStorageView from "./pages/StorageView/FreeStorageView";
import BasicStorageView from "./pages/StorageView/BasicStorageView";
import PremiumStorageView from "./pages/StorageView/PremiumStorageView";

import { Error } from "./pages/ErrorPage";
import SettingPage from "./pages/SettingsPage/SettingsPage";
import InfoPage from "./pages/InfoPage/InfoPage";

import { ChatPage } from "./pages/StudyChat";


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Onboarding />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<Otp />} />


        <Route path="/create-lesson" element={<CreateLessonLayout />}>
          <Route path="" index element={<CreateLesson />} />
          <Route path="select-template" element={<LessonTemplate />} />
        </Route>

        <Route path="studychat" element={<ChatPage />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/mail" element={<MailUs />} />
        <Route path="/help/chat" element={<ChatBot />} />

        {/* Storage view Route */}
        <Route path="/free" element={<FreeStorageView />} />
        <Route path="/basic" element={<BasicStorageView />} />
        <Route path="/premium" element={<PremiumStorageView />} />

        <Route path="/settings" element={<SettingPage />} />
        <Route path="/info" element={<InfoPage />} />

        {/* this should always be the last route */}
        <Route path="*" element={<Error />} />


      </Routes>


    </>
  );
}

export default App;
