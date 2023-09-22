import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  CreateLessonLayout,
  DashboardLayout,
  GeneralLayout as Layout,
  PrivateRoute,
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
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token == "") {
      navigate("/sign-in");
    }
  }, [user]);
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
            <Route path="/info" element={<AccountInfo />} />

            {/* this should always be the last route */}
          </Route>

          <Route path="/help/mail" element={<MailUs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
