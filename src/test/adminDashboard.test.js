import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TotalUsers } from "../components/dashboardItems/totalUsers";
import { GoalProgress } from "../components/dashboardItems/goalProgress";
import { TotalFoods } from "../components/dashboardItems/totalFoods";
import { TotalMealPlans } from "../components/dashboardItems/totalMealPlans";

describe("Render the Admin dashboard components", () => {
  test("renders the Total Users Component", () => {
    render(<TotalUsers />);
    const elem = screen.getByTestId("total_users");
    expect(elem).toBeInTheDocument();
  });

  test("renders the Goal Progress Component", () => {
    render(<GoalProgress />);
    const elem = screen.getByTestId("goal_progress");
    expect(elem).toBeInTheDocument();
  });

  test("renders the Total Foods Component", () => {
    render(<TotalFoods />);
    const elem = screen.getByTestId("total_foods");
    expect(elem).toBeInTheDocument();
  });
  test("renders the Total Meal Plans Component", () => {
    render(<TotalMealPlans />);
    const elem = screen.getByTestId("total_meal_plans");
    expect(elem).toBeInTheDocument();
  });

  /* it("render 2 input components", () => {
    const { getByLabelText } = render(<LoginPage />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText("LOGIN")).toBeInTheDocument();
  }); */
});

// describe("Form behaviour", () => {
//   it("validate user inputs, and provide error messages", async () => {
//     const { getByTestId, getByText } = render(<LoginPage />);

//     await act(async () => {
//       fireEvent.change(screen.getByLabelText(/email/i), {
//         target: { value: "" },
//       });

//       fireEvent.change(screen.getByLabelText(/password/i), {
//         target: { value: "" },
//       });
//     });

//     await act(async () => {
//       fireEvent.submit(getByTestId("form"));
//     });

//     expect(getByText("Email is required")).toBeInTheDocument();
//     expect(getByText("Password is required")).toBeInTheDocument();
//   });

//   it("should submit when form inputs contain text", async () => {
//     const { getByTestId, queryByText } = render(<LoginPage />);

//     await act(async () => {
//       fireEvent.change(screen.getByLabelText(/email/i), {
//         target: { value: "test" },
//       });

//       fireEvent.change(screen.getByLabelText(/password/i), {
//         target: { value: "testPassword" },
//       });
//     });

//     await act(async () => {
//       fireEvent.submit(getByTestId("form"));
//     });

//     expect(() => getByText("Email is required")).toThrow();
//     expect(() => getByText("Password is required")).toThrow();
//     // expect(queryByText("Email is required")).not.toBeInTheDocument();
//     // expect(queryByText("Password is required")).not.toBeInTheDocument();
//   });
// });
