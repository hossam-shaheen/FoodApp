import { beforeEach, describe, expect, it } from "vitest";
import Header from "./Header";
import { render ,screen } from "@testing-library/react";


describe("Trying to test header", () => {
    beforeEach(()=>{
        // Create a mock target container element
        const modalContainer = document.createElement("div");
        modalContainer.id = "modal";
        document.body.appendChild(modalContainer);

        render(<Header />);
    });

  it("Trying to test logo is visible", () => { 
    const logoElement = screen.getByRole("img");
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toBeVisible();
  });


  it("Trying to test logo title", () => { 
    const logoTitleElement = screen.getByRole("heading", { level: 1, name: /Food App\./i });
    expect(logoTitleElement).toBeInTheDocument();
    expect(logoTitleElement).toBeVisible();
  });

  it("Trying to test count button", () => { 
    const countButtonElement = screen.getByRole("button", { name: /count/i });
    expect(countButtonElement).toHaveTextContent("Count 0");
    expect(countButtonElement).toBeVisible();
  });

}); 