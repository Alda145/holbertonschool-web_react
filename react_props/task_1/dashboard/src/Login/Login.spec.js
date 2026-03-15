import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    it("renders 2 labels, 2 inputs and 1 button", () => {
        const { container } = render(<Login />);

        const labels = container.querySelectorAll("label");
        const inputs = container.querySelectorAll("input");
        const button = container.querySelectorAll("button");

        expect(labels.length).toBe(2);
        expect(inputs.length).toBe(2);
        expect(button.length).toBe(1);
    });

    it("focuses input when label is clicked", () => {
        const { container } = render(<Login />);

        const emailLabel = container.querySelector('label[for="email"]');
        const emailInput = container.querySelector('#email');

        fireEvent.click(emailLabel);

        expect(emailInput).toBe(document.activeElement);
    });

});