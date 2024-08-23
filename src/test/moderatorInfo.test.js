import React from "react";
import { render, screen } from "@testing-library/react";
import ModeratorCard from "../components/ModeratorCard";

describe("Render the Moderator Information page", () => {
  test("renders the Moderator card", () => {
    render(<ModeratorCard />);
    const elem = screen.getByTestId("moderator_card");
    expect(elem).toBeInTheDocument();
  });
});
