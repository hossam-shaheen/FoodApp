import { describe, expect, it,vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";


describe("Trying to test Cart component", () => {
  it("Trying to test Cart component", () => {

    render(<Cart />);

    const cartHeadingElement = screen.getByRole("heading",{level:2});
    const cartAlertElement = screen.getByTestId("alert")

    expect(cartHeadingElement).toBeInTheDocument();
    expect(cartHeadingElement).toBeVisible();
    expect(cartHeadingElement).toHaveTextContent(/Cart/i); 
    expect(cartAlertElement).toBeVisible();


  });




});
