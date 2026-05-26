import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = () => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <main>
                <h1>Ticket Modal</h1>
            </main>
        </React.Fragment>,
        document.getElementById("modal") as HTMLElement
    );
};


