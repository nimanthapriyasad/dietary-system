import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilePage from "../components/UserInfoComponent";

describe("Renders the User Profile page ", () => {
  test("renders the user info", () => {
    render(<ProfilePage />);
    const elem = screen.getByTestId("user_info_page");
    expect(elem).toBeInTheDocument();
  });
});
