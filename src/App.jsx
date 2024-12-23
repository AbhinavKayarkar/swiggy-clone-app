import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact";
import { RouterProvider } from "react-router-dom";
import RoutesErrorPage from "./pages/RoutesErrorPage";
import { lazy, Suspense } from "react";

const Body = lazy(() => import("./components/Body/Body"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<RoutesErrorPage />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading ...</div>}>
            <Body />
          </Suspense>
        }
        errorElement={<RoutesErrorPage />}
      ></Route>
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading ...</div>}>
            <AboutUs />
          </Suspense>
        }
        errorElement={<RoutesErrorPage />}
      ></Route>
      <Route
        path="/contact"
        element={<Contact />}
        errorElement={<RoutesErrorPage />}
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
