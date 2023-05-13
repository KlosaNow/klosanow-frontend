import { Route, Routes } from "react-router-dom";

import CreateLessonLayout from "./components/Layout/CreateLessonLayout";


import Onboarding from "./pages/Onboarding";

import { Notifications } from "./pages/Notifications";
import { NotificationSettings } from "./pages/NotificationSettings";


import CreateLesson from "./pages/CreateLesson";
import LessonTemplate from "./pages/CreateLesson/LessonTemplate";


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
        <Route path="/subscription" element={<Subscription />} />
        {/* this should always be the last route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
