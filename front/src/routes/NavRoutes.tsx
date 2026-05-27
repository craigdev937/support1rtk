import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { Register } from "../pages/reg/Register";
import { Login } from "../pages/log/Login";
import { Tickets } from "../pages/tic/Tickets";
import { New } from "../pages/new/New";
import { Modal } from "../pages/modal/Modal";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            // Protected Routes
            {
                path: "/new",
                element: <New />
            },
            {
                path: "/tickets",
                element: <Tickets />
            },
            {
                path: "/modal/:ticketId",
                element: <Modal />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};


