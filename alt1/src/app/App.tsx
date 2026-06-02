import React from "react";
import "./App.css";
import Bryce from "@public/Bryce Cabeldue1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <h1>Bryce Cabeldue</h1>
            <img 
                src={Bryce} alt="Bryce Cabeldue" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};



