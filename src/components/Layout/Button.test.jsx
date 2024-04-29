import { beforeEach, describe, expect, it } from "vitest";
import { render ,screen } from "@testing-library/react";
import Button from "./Button";


describe("Trying to test Button ", () => {
  
  it("Trying to test button with passing text 'Add product' as children", () => {
    render(<Button>
        Add product
    </Button>);
    const buttonElement = screen.getByRole("button");    
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Add product/i);
  });

  it("Trying to test button with passing className 'btn-primary' as props", () => {
    render(<Button className="btn-primary">
        Add product
    </Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn-primary");
  });

}); 