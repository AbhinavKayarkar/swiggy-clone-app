import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Body from "./components/Body/Body";
import { RouterProvider } from "react-router-dom";
import RoutesErrorPage from "./pages/RoutesErrorPage";

const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<RoutesErrorPage />}>
      <Route
        path="/"
        element={<Body />}
        errorElement={<RoutesErrorPage />}
      ></Route>
      <Route
        path="/about"
        element={<AboutUs />}
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
