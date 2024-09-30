import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {DashboardLayout} from './Layouts/AllLayouts'
import LoginAdmin from "./Pages/LoginPage/LoginAdmin";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LoginAdmin />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
    },

])