import { render, screen } from "@testing-library/react";
import App from "./App";


test("2 labels email e password",  () => {
    render(<App/>)
    const labelEmail = screen.getByRole('label').toHaveTextContent(/Email/i);
    const labelPassword = screen.getByRole('label').toHaveTextContent(/Password/i);
    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
})

test("renders 2 input elements (email and password)", () => {
    render(<App />);

    // Merr input-in e email
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "text");

    // Merr input-in e password
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
});
test("renders an button", () => {
    render(<App />);
    const button = screen.getByRole('button').toHaveTextContent(/OK/i);;
    expect(button).toBeInTheDocument();
});