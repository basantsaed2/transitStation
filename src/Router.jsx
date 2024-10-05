import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedData/ProtectedRoute";
import App from "./App";
import {DashboardLayout , AdminLayout ,ParkingLayout , PickUpLocationLayout ,SubscriptionsLayout ,RevenueLayout
  ,ExpensesLayout , FinancialLayout ,PlanLayout ,RequestLayout ,UserLayout ,DriversLayout
} from './Layouts/AllLayouts'
import LoginAdmin from "./Pages/LoginPage/LoginAdmin";

/* Admin Dashboard */
const AppLayoutAdminDashboard = () => (
  <>
    <AdminLayout />
  </>
);

export const router = createBrowserRouter([

    {
        path: "/",
        element: <LoginAdmin />,
    },
    {
      element: <ProtectedRoute allowedRoles={['admin']} />,
      path: '/dashboard',
      children: [
        {
          path: '',
          element: <AppLayoutAdminDashboard />,
          children: [
            {
              path: '',
              element: <DashboardLayout/>,
            },  
            {
              path: 'pickUp_location',
              element: <PickUpLocationLayout/>,
            },
            {
              path: 'parking',
              element: <ParkingLayout/>,
            },  
            {
              path: 'subscriptions',
              element: <SubscriptionsLayout/>,
            },
            {
              path: 'subscriptions',
              element: <SubscriptionsLayout/>,
            },
            {
              path: 'drivers',
              element: <DriversLayout/>,
            },
            {
              path: 'revenue',
              element: <RevenueLayout/>,
            },
            {
              path: 'expenses',
              element: <ExpensesLayout/>,
            },
            {
              path: 'financial',
              element: <FinancialLayout/>,
            },
            {
              path: 'plan',
              element: <PlanLayout/>,
            },
            {
              path: 'request',
              element: <RequestLayout/>,
            },
            {
              path: 'user',
              element: <UserLayout/>,
            },

          ],
        },
      ],
    },

])