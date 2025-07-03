import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@features/dashboard/pages/HomePage";
import LoginPage from "@features/auth/pages/LoginPage";
import {ProtectedRoute} from "@features/auth/components/ProtectedRoute.tsx";
import CallbackPage from "@features/auth/pages/CallbackPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <ProtectedRoute component={<HomePage/>}/>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "callback",
                element: <CallbackPage/>,
            },
            // Add more routes as needed
        ],
    },
]);
