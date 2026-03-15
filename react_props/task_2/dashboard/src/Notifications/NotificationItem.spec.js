import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
    it("renders default notification in blue", () => {
        const { container } = render(<NotificationItem type="default" value="Test default" />);
        const li = container.querySelector("li");

        expect(li).toHaveAttribute("data-notification-type", "default");
        expect(li).toHaveStyle({ color: "blue" });
        expect(li.textContent).toBe("Test default");
    });

    it("renders urgent notification in red", () => {
        const { container } = render(<NotificationItem type="urgent" value="Test urgent" />);
        const li = container.querySelector("li");

        expect(li).toHaveAttribute("data-notification-type", "urgent");
        expect(li).toHaveStyle({ color: "red" });
        expect(li.textContent).toBe("Test urgent");
    });
});