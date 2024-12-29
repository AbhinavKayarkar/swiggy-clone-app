import { render } from "@testing-library/react";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server"; // fro createBrowserRouter as jest dont have browser.
import { store } from "../../store/store";
test("checked for app logo", () => {
  const header = render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(
    "https://static.timesprime.com/2x/swiggyfree-logo-box.png?v=3"
  );
});
