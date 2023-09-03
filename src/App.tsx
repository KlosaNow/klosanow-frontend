import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Auth Pages
import SignIn from "./pages/Authentication/SignIn/SignIn";
import SignUp from "./pages/Authentication/SignUp/SignUp";
import Otp from "./pages/Authentication/Otp/Otp";
import CreateLessonLayout from "./components/Layout/CreateLessonLayout/CreateLessonLayout";
import Notifications from "./pages/Notifications";
import NotificationSettings from "./pages/NotificationSettings";
import Onboarding from "./pages/Onboarding/Onboarding";
import Help from "./pages/Help/Help";
import MailUs from "./pages/Mail/Mail";
import ChatBot from "./pages/ChatBot/ChatBot";

import LessonTemplate from "./pages/CreateLesson/components/LessonTemplate";
import FreeStorageView from "./pages/StorageView/FreeStorageView";
import BasicStorageView from "./pages/StorageView/BasicStorageView";
import PremiumStorageView from "./pages/StorageView/PremiumStorageView";
import Error from "./pages/Error";
import SettingPage from "./pages/Settings/Settings";
import InfoPage from "./pages/Info/Info";
import  CreatedLessons from "./pages/CreatedLessons"

import { GeneralLayout as Layout } from "./components/Layout/GeneralLayout/GenralLayout";

import { DashboardLayout } from "./components";
import { Dashboard, StudyChat, Drafts, CreateLesson } from "./pages";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Onboarding />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<Otp />} />

        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" index element={<Dashboard />} />

          <Route path="" element={<CreateLessonLayout />}>
            <Route path="/create-lesson" index element={<CreateLesson />} />
            <Route path="/drafts" index element={<Drafts />} />
            <Route
              path="/create-lesson/select-template"
              element={<LessonTemplate />}
            />
          </Route>
          <Route path="" element={<Layout />}>
            <Route path="/studychat" element={<StudyChat />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/created-lessons" element={<CreatedLessons />} />
            <Route
              path="/settings/notifications"
              element={<NotificationSettings />}
            />
            <Route path="/help" element={<Help />} />
            <Route path="/help/chat" element={<ChatBot />} />
            {/* Storage view Route */}
            <Route path="/free" element={<FreeStorageView />} />
            <Route path="/basic" element={<BasicStorageView />} />
            <Route path="/premium" element={<PremiumStorageView />} />
            <Route path="/info" element={<InfoPage />} />

            {/* this should always be the last route */}
          </Route>

          <Route path="/help/mail" element={<MailUs />} />
          <Route path="/settings" element={<SettingPage />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
