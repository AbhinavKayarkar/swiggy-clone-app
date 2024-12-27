import { render } from "@testing-library/react";
import Header from "../Header/Header";
import { StaticRouter } from "react-router-dom/server"; // fro createBrowserRouter as jest dont have browser.
test("checked for app logo", () => {
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("https://static.timesprime.com/2x/swiggyfree-logo-box.png?v=3")
});
