import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import MealPlanComponent from "../components/MealPlanComponent";

describe("Render the Home Page", () => {
  test("renders the footer", () => {
    render(<Footer />);
    const elem = screen.getByTestId("footer");
    expect(elem).toBeInTheDocument();
  });

  test("renders the Meal Plan Component", () => {
    render(<MealPlanComponent />);
    const elem = screen.getByTestId("meal_plan_component");
    expect(elem).toBeInTheDocument();
  });
});
