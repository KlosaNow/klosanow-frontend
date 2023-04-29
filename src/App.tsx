import { Route, Routes } from "react-router-dom"
import { SplashScreen } from './pages/SplashScreen';
import { Error } from "./pages/ErrorPage";
import SettingPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<Error />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>

    </>
  );
}

export default App;
