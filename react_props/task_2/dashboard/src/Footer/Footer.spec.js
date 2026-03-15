import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {

    test("renders correct copyright text", () => {
        const year = new Date().getFullYear();

        render(<Footer />);

        const text = screen.getByText(
            `Copyright ${year} - Holberton School`
        );

        expect(text).toBeInTheDocument();
    });

});