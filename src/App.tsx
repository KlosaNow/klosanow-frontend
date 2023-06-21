import { Route, Routes } from "react-router-dom";

// Auth Pages
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Otp from "./pages/Authentication/Otp";
import CreateLessonLayout from "./components/Layout/CreateLessonLayout";
import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";
import Onboarding from "./pages/Onboarding";
import Help from "./pages/Help/Help";
import MailUs from "./pages/Mail/Mail";
import ChatBot from "./pages/ChatBot/ChatBot";
import CreateLesson from "./pages/CreateLesson";
import LessonTemplate from "./pages/CreateLesson/LessonTemplate";
import FreeStorageView from "./pages/StorageView/FreeStorageView";
import BasicStorageView from "./pages/StorageView/BasicStorageView";
import PremiumStorageView from "./pages/StorageView/PremiumStorageView";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import HomeLayout from "./components/Layout/HomeLayout";
import { AnimatePresence } from "framer-motion";
import { Error } from "./pages/ErrorPage";
import SettingPage from "./pages/SettingsPage/SettingsPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import { ChatPage, MessagesPage } from "./pages/StudyChat";
import { GeneralLayout as Layout } from "./components/Layout/GenralLayout";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Onboarding />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<Otp />} />

        <Route path="/home" element={<HomeLayout />}>
          <Route path="" index element={<HomePage />} />
        </Route>

        <Route path="/create-lesson" element={<CreateLessonLayout />}>
          <Route path="" index element={<CreateLesson />} />
          <Route path="select-template" element={<LessonTemplate />} />
        </Route>

        <Route path="/help/mail" element={<MailUs />} />
        <Route path="/settings" element={<SettingPage />} />

        <Route path="" element={<Layout />}>
          <Route path="/studychat" element={<ChatPage />} />
          <Route path={`/studychat/:chatkey`} element={<MessagesPage />} />

          <Route path="/notifications" element={<Notifications />} />
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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
