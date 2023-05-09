import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/ErrorPage";

import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";

import { MainPage } from "./pages/StudyChat";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/settings/notifications"
          element={<NotificationSettings />}
        />
        <Route path="*" element={<Error />} />
        <Route path="/studychat" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
