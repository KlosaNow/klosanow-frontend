import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import { DashboardLayout } from "./components";

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
import ProtectedRoute from "./utils/ProtectedRoute";
import RecordLessonVideo from "./pages/CreateLesson/components/RecordLessonVideo";

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

          <Route element={<ProtectedRoute />}>

          <Route path="" element={<DashboardLayout />}>
              {/* dashboard routes */}
              <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="/create-lesson" index element={<CreateLesson />} />
              <Route path="/drafts" index element={<Drafts />} />
              <Route path="/create-lesson/select-template" element={<LessonTemplate />} />
              <Route path="/create-lesson/record-video" element={<RecordLessonVideo />} />
              <Route path="/studychat" element={<StudyChat />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/created-lessons" element={<CreatedLessons />} />
              <Route path="/settings/notifications" element={<NotificationSettings />} />
              <Route path="/help" element={<Help />} />

              {/* Storage view Route */}
              <Route path="/free" element={<FreeStorageView />} />
              <Route path="/basic" element={<BasicStorageView />} />
              <Route path="/premium" element={<PremiumStorageView />} />
              <Route path="/info" element={<AccountInfo />} />

              <Route path="/help/mail" element={<MailUs />} />
              <Route path="/settings" element={<Settings />} />

            </Route>
          </Route>
          {/* this should always be the last route */}
          <Route path="*" element={<Error />} />
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

