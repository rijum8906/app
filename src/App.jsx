import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Impotrting Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

// Importing Components
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

// Importing Pages
const HomePage = lazy(() => import("./pages/Home"));
const SignInPage = lazy(() => import("./pages/Signin"));

const App = () => {
  return (
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          {/* Suspense wraps Navbar for lazy loading */}
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>

          {/* Suspense wraps Routes for lazy-loaded pages */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          </Suspense>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  );
};

export default App;
