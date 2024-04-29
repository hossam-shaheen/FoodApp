import {  describe, expect, it } from "vitest";
import { render ,screen } from "@testing-library/react";
import TotalPrice from "./TotalPrice";


describe("Trying to test Total price component", () => {
  
  it("Trying to test Total with passing total price with 0", () => {
    render(<TotalPrice totalPrice={0} />);
    const cartTotalElement = screen.getByTestId("cart-total");
    expect(cartTotalElement).toBeInTheDocument();
    expect(cartTotalElement).toHaveTextContent(0);
  });

  it("Trying to test Total with passing total price with 8.99", () => {
    render(<TotalPrice totalPrice={8.99} />);
    const cartTotalElement = screen.getByTestId("cart-total");
    expect(cartTotalElement).toBeInTheDocument();
    expect(cartTotalElement).toHaveTextContent(8.99);
  });

}); 