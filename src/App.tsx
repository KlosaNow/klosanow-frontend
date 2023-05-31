import { Route, Routes } from "react-router-dom";

// Auth Pages
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Otp from "./pages/Auth/Otp";

import CreateLessonLayout from "./components/Layout/CreateLessonLayout";

import Onboarding from "./pages/Onboarding";

import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";

import { SplashScreen } from "./pages/SplashScreen";
import Onboarding from "./pages/Onboarding";

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

        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/settings/notifications"
          element={<NotificationSettings />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
