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
  ForgotPassword,
  ResetPassword,
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
  VerifyOtp,
  VerifySplash,
  ResetSplash,
} from "./pages";
import ProtectedRoute from "./utils/ProtectedRoute";
import {
  createLessonPagePath,
  dashboardPageSlug,
  studyChatPagePath,
} from "./data/pageUrl";
import useChatWebSocket from "./hooks/useChatWebSocket";
// import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  clearIncompleteStorageFile,
  getStorageItem,
  removeStorageItem,
} from "./utils/generics";
import { CHAT_CONTACT_KEY } from "./data/constants";
import { useToast } from "@chakra-ui/react";

function App() {
  const location = useLocation();
  useChatWebSocket();
  const storageContact = getStorageItem(CHAT_CONTACT_KEY);
  const toast = useToast();

  // Remove chat from storage after 30 seconds
  useEffect(() => {
    if (!storageContact) return;
    const timeout = setTimeout(() => {
      removeStorageItem(CHAT_CONTACT_KEY);
    }, 30000);

    return () => clearInterval(timeout);
  }, [storageContact]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearIncompleteStorageFile("chat-audio", (errMsg) => {
        toast({
          title: "Unable to delete file",
          description: errMsg || "Failed to delete",
        });
      });

      clearIncompleteStorageFile("chat-file", (errMsg) => {
        toast({
          title: "Unable to delete file",
          description: errMsg || "Failed to delete",
        });
      });

      clearIncompleteStorageFile("study_chat", (errMsg) => {
        toast({
          title: "Unable to delete file",
          description: errMsg || "Failed to delete",
        });
      });
    }, 60000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Onboarding />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/please-verify" element={<VerifySplash />} />
          <Route
            path="/api/v1/auth/verify-email/:token"
            element={<VerifyOtp />}
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-verify" element={<ResetSplash />} />

          <Route
            path="/api/v1/auth/reset-password/:token"
            element={<ResetPassword />}
          />
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
