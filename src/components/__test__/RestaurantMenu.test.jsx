import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { store } from "../../store/store";
import { Menu_Data } from "../../__mocks__/data";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import Header from "../Header/Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Menu_Data),
  });
});

test("Cart functionality should be working", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getAllByTestId("menu-card")));
  const menucard = body.getAllByTestId("menu-card");
  const menu = body.getByTestId("menu");
  const cart = body.getByTestId("cart");
  const title = body.getAllByTestId("title");
  fireEvent.click(title[0]);

  const detail = body.getAllByTestId("detail");
  expect(detail[0]).toBeInTheDocument();

  const addbtn = body.getAllByTestId("addbtn");
  fireEvent.click(addbtn[0]);
  fireEvent.click(addbtn[1]);
  expect(menu.children.length).toBe(14);
  expect(cart.innerHTML).toBe("Cart- 2 items");
  expect(detail[0]).toBeInTheDocument();

  const online = body.getByTestId("isOnline");
  fireEvent.offline(window);
    expect(online.innerHTML).toBe("🔴");
    fireEvent.online(window);
    expect(online.innerHTML).toBe("🟢");
});

