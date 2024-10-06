import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedData/ProtectedRoute";
import App from "./App";
import {DashboardLayout , AdminLayout ,ParkingLayout , PickUP_LocationLayout ,SubscriptionsLayout ,RevenueLayout
  ,ExpensesLayout , FinancialLayout ,PlanLayout ,RequestLayout ,UserLayout ,DriversLayout,
  AddPickUP_LocationLayout,
  EditPickUP_LocationLayout,
  AddParkingLayout,
  EditParkingLayout,ParkingListLayout
} from './Layouts/AllLayouts'
import LoginAdmin from "./Pages/LoginPage/LoginAdmin";

/* Admin Dashboard */
const AppLayoutAdminDashboard = () => (
  <>
    <AdminLayout />
  </>
);

const AppLayoutPickUP_Location =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutParking =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutParkingList =() =>(
  <>
  <Outlet/>
  </>
)

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
              element: <AppLayoutPickUP_Location/>,
              children: [
                {
                  path: '',
                  element: <PickUP_LocationLayout/>,
                }, 
                {
                  path: 'addpickUp_location',
                  element: <AddPickUP_LocationLayout/>,
                }, 
                {
                  path: 'editpickUp_location',
                  element: <EditPickUP_LocationLayout/>,
                }, 
              ]
            },
            {
              path: 'parking',
              element: <AppLayoutParking/>,
              children: [
                {
                  path: '',
                  element: <AppLayoutParkingList/>,
                  children:[
                    {
                      path: '',
                      element: <ParkingLayout/>,
                    },
                    {
                      path:'parkinglist/:parkingId',
                      element:<ParkingListLayout/>
                    }
                  ]
                }, 
                {
                  path: 'addparking',
                  element: <AddParkingLayout/>,
                }, 
                {
                  path: 'editparking',
                  element: <EditParkingLayout/>,
                }, 
              ]
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