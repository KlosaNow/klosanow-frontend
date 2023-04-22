import { Route, Routes } from "react-router-dom"
import { Error } from "./pages/ErrorPage";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
