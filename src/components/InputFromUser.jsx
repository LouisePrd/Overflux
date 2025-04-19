import React from "react";
import "../styles/InputFromUser.css";

export default function InputFromUser() {
    return (
        <div className="input-from-user">
            <input
                type="text"
                className="input-from-user__input"
                placeholder="Type your message here..."
            />
            <button className="input-from-user__button">Send</button>
            <button className="input-from-user__button">Clear</button>
        </div>
    );
    }