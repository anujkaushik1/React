const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Header from "../src/Components/Header";
import appSore from "../utils/redux/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

test("should render header comp with login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appSore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button", { name: "Login" });
  expect(btn).toBeInTheDocument();
});

test("should render header comp with login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appSore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const loginBtnChangedToLogout = screen.getByRole("button", {
    name: "Logout",
  });

  expect(loginBtnChangedToLogout).toBeInTheDocument();
});
