import React from "react";
import "./App.css";
import Strike from "@public/CBStrike13.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <h1>C.B. Strike</h1>
            <img 
                src={Strike} alt="C.B. Strike" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};



