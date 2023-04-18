import { Route, Routes } from "react-router-dom"
import { SplashScreen } from './pages/SplashScreen';
import { Error } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
