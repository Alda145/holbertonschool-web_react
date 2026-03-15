import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    test("renders 2 labels, 2 inputs and 1 button", () => {
        const { container } = render(<Login />);

        const labels = container.querySelectorAll("label");
        const inputs = container.querySelectorAll("input");
        const button = container.querySelector("button");

        expect(labels.length).toBe(2);
        expect(inputs.length).toBe(2);
        expect(button).not.toBeNull();
    });

    test("inputs get focus when label is clicked", () => {
        const { container } = render(<Login />);

        const emailLabel = container.querySelector('label[for="email"]');
        const emailInput = container.querySelector("#email");

        fireEvent.click(emailLabel);

        expect(document.activeElement).toBe(emailInput);
    });

});