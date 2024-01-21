import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import {
  CreateLessonLayout,
  DashboardLayout,
  GeneralLayout as Layout,
} from "./components";

import {
  Dashboard,
  StudyChat,
  Drafts,
  CreateLesson,
  Settings,
  SignUp,
  SignIn,
  Otp,
  MailUs,
  ChatBot,
  Help,
  NotificationSettings,
  Notifications,
  Onboarding,
  LessonTemplate,
  FreeStorageView,
  BasicStorageView,
  PremiumStorageView,
  Error,
  AccountInfo,
  CreatedLessons,
} from "./pages";

function App() {
  const location = useLocation();
  return (
    <>
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
              <Route path="/info" element={<AccountInfo />} />

            </Route>

            <Route path="/help/mail" element={<MailUs />} />
            <Route path="/settings" element={<Settings />} />
            {/* this should always be the last route */}

            <Route path="*" element={<Error />} />
          </Route>




        </Routes>
      </AnimatePresence>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>

  );
}

export default App;
