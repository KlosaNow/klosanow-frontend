import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { DashboardLayout } from "./components";

import {
  Dashboard,
  StudyChat,
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
  FreeStorageView,
  BasicStorageView,
  PremiumStorageView,
  Error,
  AccountInfo,
} from "./pages";
import ProtectedRoute from "./utils/ProtectedRoute";
import {
  createLessonPagePath,
  dashboardPageSlug,
  studyChatPagePath,
} from "./data/pageUrl";
import useChatWebSocket from "./hooks/useChatWebSocket";
import { useQuery } from "@tanstack/react-query";

function App() {
  const location = useLocation();
  const { connectWebSocket, cleanUpChatWebSocket } = useChatWebSocket();

  useQuery({
    queryKey: ["chat-socket"],
    queryFn: ({ signal }) => {
      connectWebSocket();
      signal?.addEventListener("abort", () => cleanUpChatWebSocket());
    },
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Onboarding />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/otp" element={<Otp />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              {/* dashboard routes */}
              <Route path={dashboardPageSlug} index element={<Dashboard />} />
              <Route
                path={`${createLessonPagePath}/*`}
                index
                element={<CreateLesson />}
              />

              <Route path={`${studyChatPagePath}/*`} element={<StudyChat />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route
                path="/settings/notifications"
                element={<NotificationSettings />}
              />
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

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
