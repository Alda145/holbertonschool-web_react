import React from "react";
import closeIcon from "./assets/close-button.png";
import "./Notifications.css";

function Notifications() {
    return (
        <div className="Notifications">
            <button
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
                style={{ position: "absolute", right: 0 }}
            >
                <img src={closeIcon} alt="close" />
            </button>

            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">
                    Urgent requirement - complete by EOD
                </li>
            </ul>
        </div>
    );
}

export default Notifications;