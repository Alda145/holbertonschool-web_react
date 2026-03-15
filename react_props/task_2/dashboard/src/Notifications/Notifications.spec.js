import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
    it("renders 3 notifications", () => {
        const notifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong>" } },
        ];

        render(<Notifications notifications={notifications} />);

        const items = screen.getAllByRole("listitem");
        expect(items.length).toBe(3);
        expect(items[0].textContent).toBe("New course available");
        expect(items[1].textContent).toBe("New resume available");
        expect(items[2].innerHTML).toContain("<strong>Urgent requirement</strong>");
    });
});