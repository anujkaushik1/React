const { render, screen } = require("@testing-library/react");
const { default: Body } = require("../src/Components/Body");
import MOCK_DATA from "../mocks/restaurantMockData.json";
import { act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});
test("Should test search functionality in body", async () => {
  await act(async () => render(<Body />));

  const searchInput = screen.getByTestId("search_test");
  const filterBtn = screen.getByRole("button", {name: "Filter Data"});


  fireEvent.change(searchInput, {target: {value: "pizza"}});

  fireEvent.click(filterBtn);

  const card = screen.getAllByTestId("rescard");

  expect(card.length).toBe(1);


});
