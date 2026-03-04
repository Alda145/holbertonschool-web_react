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
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});
test("renders an button", () => {
    render(<App />);
    const button = screen.getByRole('button').toHaveTextContent(/OK/i);;
    expect(button).toBeInTheDocument();
});