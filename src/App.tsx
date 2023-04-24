import { Route, Routes } from "react-router-dom"
import { Error } from "./pages/ErrorPage";

import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";

import { SplashScreen } from './pages/SplashScreen';
import Onboarding from "./pages/Onboarding";
import Help from "./components/Help";
import MailUs from "./components/Mail";
import ChatBot from "./components/ChatBot";


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<SplashScreen />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/mail" element={<MailUs />} />
        <Route path="/help/chat" element={<ChatBot />} />

        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
