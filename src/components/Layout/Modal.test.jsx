import {  beforeEach, describe, expect, it } from "vitest";
import { render ,screen } from "@testing-library/react";
import Modal from "./Modal";


describe("Trying to test Modal", () => {

    beforeEach(()=>{
        // Create a mock target container element
        const modalContainer = document.createElement("div");
        modalContainer.id = "modal";
        document.body.appendChild(modalContainer);
    })
  
  it("Trying to test dialog with passing text 'No product added' as children", () => {
    render(<Modal>
        No product added
    </Modal>);
    const dialogElement = screen.getByRole("dialog");
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).toHaveTextContent(/No product added/i);
  });

  it("Trying to test dialog with passing text no children", () => {
    render(<Modal></Modal>);
    const dialogElement = screen.getByRole("dialog");
    expect(dialogElement).toBeInTheDocument();
    expect(dialogElement).toHaveTextContent("");
  });

}); 