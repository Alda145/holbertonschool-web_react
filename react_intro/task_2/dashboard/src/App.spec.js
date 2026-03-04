import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1 with School Dashboard text", () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i);
})

test("renders correct text in body and footer paragraphs", () => {
    render(<App />)
    expect(screen.getByText(/Login to access the full dashboard/i));
    expect(screen.getByText(/Copyright/i));
})
test("renders an image", () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
});
test("renders 2 labels Email and Password", () => {
    render(<App />);
    const labelEmail = screen.getByText(/email/i);
    const labelPassword = screen.getByText(/password/i);

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
});

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