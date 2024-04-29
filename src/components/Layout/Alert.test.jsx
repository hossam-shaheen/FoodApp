import {  describe, expect, it } from "vitest";
import { render ,screen } from "@testing-library/react";
import Alert from "./Alert";


describe("Trying to test Alert", () => {
  
  it("Trying to test Alert with passing text 'Order created' as children", () => {
    render(<Alert>
        Order created
    </Alert>);
    const alertElement = screen.getByTestId("alert");
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(/Order created/i);
  });

  it("Trying to test Alert with passing className 'alert-success' as props", () => {
    render(<Alert className="alert-success">
        Order created
    </Alert>);
    const alertElement = screen.getByTestId("alert");
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass(/alert-success/i);
  });

}); 