import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    test("renders 2 labels, 2 inputs and 1 button", () => {
        render(<Login />);

        const labels = screen.getAllByLabelText(/email|password/i);
        const inputs = screen.getAllByRole("textbox");
        const button = screen.getByRole("button");

        expect(labels.length).toBe(2);
        expect(inputs.length).toBe(2);
        expect(button).toBeInTheDocument();
    });

    test("inputs get focus when label is clicked", () => {
        render(<Login />);

        const emailLabel = screen.getByText(/email/i);
        const emailInput = screen.getByLabelText(/email/i);

        fireEvent.click(emailLabel);

        expect(emailInput).toHaveFocus();
    });

});