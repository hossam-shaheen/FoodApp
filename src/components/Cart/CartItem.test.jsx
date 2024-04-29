import { describe, it, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";


describe("Trying to test CartItems component by passing mocked meal props", () => {
  it("Trying to test meal component by passing meal props to it", () => {
    const mockedMeal = {
      id: "m1",
      name: "Mac & Cheese",
      price: "8.99",
      description:
        "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
      image: "images/mac-and-cheese.jpg",
      count: 1,
    };
    render(<CartItem meal={mockedMeal} />);

    const cartItemParagraph = screen.getByText(/Mac & Cheese/i);
    const mealsActionsButtons = screen.getAllByRole("button");

    expect(cartItemParagraph).toBeInTheDocument();
    expect(cartItemParagraph).toBeVisible();
    expect(mealsActionsButtons).toHaveLength(2);
  });

});
