import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Matches from "./pages/Matches/Matches";
import TeamPage from "./pages/Team/TeamPage";
import CompPage from "./pages/Competition/CompPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Matches />,
            },
            {
                path: "team/:teamId",
                element: <TeamPage />,
            },
            {
                path: "competition/:competitionId",
                element: <CompPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
