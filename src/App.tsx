import { Route, Routes } from "react-router-dom"
import { SplashScreen } from './pages/SplashScreen';
import { Error } from "./pages/ErrorPage";
import SettingPage from "./pages/SettingsPage/SettingsPage";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<Error />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>

    </>
  );
}

export default App;
