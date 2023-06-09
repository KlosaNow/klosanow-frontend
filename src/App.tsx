import { Route, Routes } from "react-router-dom";

// Auth Pages
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Otp from "./pages/Auth/Otp";

import CreateLessonLayout from "./components/Layout/CreateLessonLayout";

import Onboarding from "./pages/Onboarding";

import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";

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

function App() {
  const location = useLocation()
  return (
    <AnimatePresence  mode="wait">
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

        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/settings/notifications"
          element={<NotificationSettings />}
        />

        {/* Storage view Route */}
        <Route path="/free" element={<FreeStorageView />} />
        <Route path="/basic" element={<BasicStorageView />} />
        <Route path="/premium" element={<PremiumStorageView />} />

        {/* this should always be the last route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
