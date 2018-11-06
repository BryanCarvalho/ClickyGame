import React from "react";

export const Jumbotron = ({ children }) => (
    <div
        style={{ height: 100, clear: "both", paddingTop: 25, textAlign: "center", backgroundColor: "lightblue" }}
        className="jumbotron"
    >
        {children}
    </div>
);