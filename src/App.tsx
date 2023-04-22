import { Route, Routes } from "react-router-dom"
import { SplashScreen } from './pages/SplashScreen';
import { Error } from "./pages/ErrorPage";
import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
