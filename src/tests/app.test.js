import React from "react";
import App from "../components/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("app page", () => {
  it("renders app component", async () => {
    render(<App />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getAllByText("Landing")).toHaveLength(2);

    expect(screen.getAllByRole("link")).toHaveLength(5);
    expect(screen.getByRole("heading")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("home"));
    expect(await screen.findAllByText("Home")).toHaveLength(2);

    await userEvent.click(screen.getByTestId("account"));
    expect(await screen.findAllByText("Account")).toHaveLength(2);
    await userEvent.click(screen.getByTestId("admin"));
    expect(await screen.findAllByText("Admin")).toHaveLength(2);
    await userEvent.click(screen.getByTestId("signin"));
    expect(await screen.findAllByText("SignIn")).toHaveLength(1);
  });
});
