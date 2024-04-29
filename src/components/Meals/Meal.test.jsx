import { describe, expect, it } from "vitest";
import { render ,screen } from "@testing-library/react";
import Meal from "./Meal";


describe("Trying to test Meal component by passing mocked meal props", () => {
  
  it("Trying to test meal component by passing meal props to it", () => {
        
        const mockedMeal = {
            "id": "m1",
            "name": "Mac & Cheese",
            "price": "8.99",
            "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
            "image": "images/mac-and-cheese.jpg"
        }
        render(<Meal  meal={mockedMeal} />)

        const mealImageElement = screen.getByRole("img");
        const mealHeadingElement = screen.getByRole("heading",{level:3});
        const mealPriceElement = screen.getByTestId("meal-price")
        const mealDescriptionElement = screen.getByRole("paragraph");
        const mealButtonElement = screen.getByRole("button");

        expect(mealImageElement).toBeInTheDocument();
        expect(mealImageElement).toHaveAttribute("alt", "Mac & Cheese");
        expect(mealImageElement).toBeVisible();

        expect(mealHeadingElement).toBeInTheDocument();
        expect(mealHeadingElement).toHaveTextContent(/Mac & Cheese/i);
        expect(mealHeadingElement).toBeVisible();

        expect(mealPriceElement).toBeInTheDocument();
        expect(mealPriceElement).toHaveTextContent(/8.99/i);
        expect(mealPriceElement).toBeVisible();
        

        expect(mealDescriptionElement).toBeInTheDocument();
        expect(mealDescriptionElement).toHaveTextContent(/Creamy cheddar cheese mixed with perfectly cooked macaroni/i);
        expect(mealDescriptionElement).toBeVisible();

        expect(mealButtonElement).toBeInTheDocument();
        expect(mealButtonElement).toBeVisible();        
  });

}); 