import { Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";
import FreeStorageView from "./pages/StorageView/FreeStorageView";
import BasicStorageView from "./pages/StorageView/BasicStorageView";
import PremiumStorageView from "./pages/StorageView/PremiumStorageView";
import Subscription from "./pages/SubscriptionPage/Subscription";
import { Error } from "./pages/ErrorPage";

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
        {/* Storage view Route */}
        <Route path="/free" element={<FreeStorageView />} />
        <Route path="/basic" element={<BasicStorageView />} />
        <Route path="/premium" element={<PremiumStorageView />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  );
}

export default App;
