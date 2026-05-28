import React from "react";
import "./Home.css";
import { Link } from "react-router";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

export const Home = () => {
    return (
        <React.Fragment>
            <main>
                <section className="heading">
                    <h1>What do you need help with?</h1>
                    <p>Please choose from an option below</p>
                </section>

                <Link 
                    to={"/new"}
                    className="btn btn__reverse btn__block"
                >
                    <FaQuestionCircle />Create New Ticket
                </Link>
                <Link
                    to={"/tickets"}
                    className="btn btn__block"
                >
                    <FaTicketAlt />View My Tickets
                </Link>
            </main>
        </React.Fragment>
    );
};


