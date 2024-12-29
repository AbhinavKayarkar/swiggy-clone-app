import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body/Body";
import { store } from "../../store/store";
import { Restaurant_Data } from "../../__mocks__/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Restaurant_Data),
  });
});

test("shimmer should be rendered", () => {
  const search = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const btn = search.getByTestId("shimmer");
  expect(btn.children.length).toBe(8);
  //expect(btn).toBeInTheDocument();  // -- toBeInTheDocument () from jest-dom package
});

test("Restaurant Cards should be rendered", async () => {
  const card = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() =>
    expect(card.getByTestId("res-card").children.length).toBe(8)
  );

  //expect(btn).toBeInTheDocument();
});

test("search functionality should be working", async () => {
  const search = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(search.getByTestId("search-btn")));

  const btn = search.getByTestId("search-btn");
  const input = search.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  fireEvent.click(btn)

  expect(search.getByTestId("res-card").children.length).toBe(0)

  //expect(btn).toBeInTheDocument();
});
