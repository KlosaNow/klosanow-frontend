import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra.config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "./hooks/useScrollToTop";
import PageLoader from "./components/PageLoader";
import "./styles/main.scss";

const queryClient = new QueryClient();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <QueryClientProvider client={queryClient}>
                <ScrollToTop />

                <App />
              </QueryClientProvider>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </React.Suspense>
    </ChakraProvider>
  </React.StrictMode>
);
