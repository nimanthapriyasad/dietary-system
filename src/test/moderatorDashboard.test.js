import React from "react";
import { render, screen } from "@testing-library/react";
import FoodRequestCard from "../components/FoodRequestCard";
import MarkedFoodCard from "../components/MarkedFoodCard";

describe("Render the Moderator Dashboard", () => {
  test("renders the Food request card", () => {
    render(<FoodRequestCard />);
    const elem = screen.getByTestId("food_request_card");
    expect(elem).toBeInTheDocument();
  });

  test("renders the Marked Food", () => {
    render(<MarkedFoodCard />);
    const elem = screen.getByTestId("marked_food_card");
    expect(elem).toBeInTheDocument();
  });
});
