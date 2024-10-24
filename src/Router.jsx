import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedData/ProtectedRoute";
import App from "./App";
import {DashboardLayout , AdminLayout ,ParkingLayout , PickUP_LocationLayout ,SubscriptionsLayout ,RevenueLayout
  ,ExpensesLayout , FinancialLayout ,PlanLayout ,RequestLayout ,UserLayout ,DriverLayout,
  AddPickUP_LocationLayout,
  EditPickUP_LocationLayout,
  AddParkingLayout,
  EditParkingLayout,ParkingListLayout,
  EditRevenueLayout,
  AddRevenueLayout,
  EditExpensesLayout,
  AddExpensesLayout,
  AddSubscriptionsLayout,
  EditSubscriptionsLayout,
  AddUserLayout,
  EditUserLayout,
  AddPlanLayout,
  EditPlanLayout,
  EditRequestLayout,
  AddRequestLayout,
  EditDriverLayout,
  AddDriverLayout,DriverProfileLayout,
  AssignDriverLayout,
  ReturnRequestLayout,EmployeesLayout,AddEmployeesLayout,EditEmployeesLayout,
  PermissionLayout,
  AddPermissionLayout,
  EditPermissionLayout,
  CarColorLayout,
  AddCarColorLayout,
  EditCarColorLayout,
  ProfileLayout
} from './Layouts/AllLayouts'
import LoginAdmin from "./Pages/LoginPage/LoginAdmin";
import RevenueTypeLayout from "./Layouts/RevenueTypeLayout";
import AddRevenueTypeLayout from "./Layouts/AddRevenueTypeLayout";
import EditRevenueTypeLayout from "./Layouts/EditRevenueTypeLayout";
import ExpensesTypeLayout from "./Layouts/ExpensesTypeLayout";
import AddExpensesTypeLayout from "./Layouts/AddExpensesTypeLayout";
import EditExpensesTypeLayout from "./Layouts/EditExpensesTypeLayout";

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

const AppLayoutSubscriptions =() =>(
  <>
  <Outlet/>
  </>
)
const AppLayoutDriver =() =>(
  <>
  <Outlet/>
  </>
)
const AppLayoutRevenue =() =>(
  <>
  <Outlet/>
  </>
)
const AppLayoutRevenueType =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutExpenses =() =>(
  <>
  <Outlet/>
  </>
)
const AppLayoutExpensesType =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutPlan =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutRequest =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutRequestDriver =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutUser =() =>(
  <>
  <Outlet/>
  </>
)

const AppLayoutEmployees =()=>(
  <>
  <Outlet/>
  </>
)

const AppLayoutPermission =()=>(
  <>
  <Outlet/>
  </>
)
const AppLayoutCarColor =()=>(
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
                  path: 'add',
                  element: <AddPickUP_LocationLayout/>,
                }, 
                {
                  path: 'edit/:locationId',
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
                  path: 'add',
                  element: <AddParkingLayout/>,
                }, 
                {
                  path: 'edit/:parkingId',
                  element: <EditParkingLayout/>,
                }, 
              ]
            }, 
            {
              path: 'subscriptions',
              element: <AppLayoutSubscriptions/>,
              children: [
                {
                  path: '',
                  element: <SubscriptionsLayout/>,
                }, 
                {
                  path: 'add',
                  element: <AddSubscriptionsLayout/>,
                }, 
                {
                  path: 'edit/:subscriptionId',
                  element: <EditSubscriptionsLayout/>,
                }, 
              ]
            },
            {
              path: 'driver',
              element: <AppLayoutDriver/>,
              children :[
                {
                  path: '',
                  element: <DriverLayout/>,
                },
                {
                  path: 'add',
                  element: <AddDriverLayout/>,
                },
                {
                  path: 'edit/:driverId',
                  element: <EditDriverLayout/>,
                },
                {
                  path: 'profile/:driverId',
                  element: <DriverProfileLayout/>,
                },
              ]
            },
            {
              path: 'revenue',
              element: <AppLayoutRevenue/>,
              children: [
                {
                  path: '',
                  element: <RevenueLayout/>,
                }, 
                {
                  path: 'add',
                  element: <AddRevenueLayout/>,
                }, 
                {
                  path: 'edit/:revenueId',
                  element: <EditRevenueLayout/>,
                }, 
                {
                  path: 'type',
                  element: <AppLayoutRevenueType/>,
                  children:[
                    {
                      path:'',
                      element: <RevenueTypeLayout/>,
                    },
                    {
                      path:'add',
                      element: <AddRevenueTypeLayout/>,
                    },
                    {
                      path:'edit/:typeId',
                      element: <EditRevenueTypeLayout/>,
                    },
                  ]
                }, 
              ]
            },
            {
              path: 'expenses',
              element: <AppLayoutExpenses/>,
              children: [
                {
                  path: '',
                  element: <ExpensesLayout/>,
                }, 
                {
                  path: 'add',
                  element: <AddExpensesLayout/>,
                }, 
                {
                  path: 'edit/:expenseId',
                  element: <EditExpensesLayout/>,
                },
                {
                  path: 'type',
                  element: <AppLayoutExpensesType/>,
                  children:[
                    {
                      path:'',
                      element: <ExpensesTypeLayout/>,
                    },
                    {
                      path:'add',
                      element: <AddExpensesTypeLayout/>,
                    },
                    {
                      path:'edit/:typeId',
                      element: <EditExpensesTypeLayout/>,
                    },
                  ]
                }, 
              ]
            },
            {
              path: 'financial',
              element: <FinancialLayout/>,
            },
            {
              path: 'plan',
              element: <AppLayoutPlan/>,
              children : [
                {
                  path:'',
                  element :<PlanLayout/>
                },
                {
                  path:'add',
                  element :<AddPlanLayout/>
                },
                {
                  path:'edit/:planId',
                  element :<EditPlanLayout/>
                },
              ]
            },
            {
              path: 'request',
              element: <AppLayoutRequest/>,
              children :[
                {
                  path: '',
                  element: <AppLayoutRequestDriver/>,
                  children:[
                    {
                      path: '',
                      element: <RequestLayout/>,
                    },
                    {
                      path: 'all_drivers',
                      element: <AssignDriverLayout/>,
                    }
                  ]
                },
                {
                  path: 'add',
                  element: <AddRequestLayout/>,
                },
                {
                  path: 'add_return',
                  element: <ReturnRequestLayout/>,
                },
                {
                  path: 'edit/:requestId',
                  element: <EditRequestLayout/>,
                },
              ]
            },
            {
              path: 'user',
              element: <AppLayoutUser/>,
              children:[
                {
                  path:'',
                  element: <UserLayout/>
                },{
                  path:'add',
                  element: <AddUserLayout/>
                },{
                  path:'edit/:userId',
                  element: <EditUserLayout/>
                }
              ]
            },
            {
              path: 'supervisors',
              element: <AppLayoutEmployees/>,
              children:[
                {
                  path:'',
                  element: <EmployeesLayout/>
                },{
                  path:'add',
                  element: <AddEmployeesLayout/>
                },{
                  path:'edit/:employeeId',
                  element: <EditEmployeesLayout/>
                }
              ]
            },
            {
              path: 'permission',
              element: <AppLayoutPermission/>,
              children:[
                {
                  path:'',
                  element: <PermissionLayout/>
                },{
                  path:'add',
                  element: <AddPermissionLayout/>
                },{
                  path:'edit/:roleId',
                  element: <EditPermissionLayout/>
                }
              ]
            },
            {
              path: 'car_color',
              element: <AppLayoutCarColor/>,
              children:[
                {
                  path:'',
                  element: <CarColorLayout/>
                },{
                  path:'add',
                  element: <AddCarColorLayout/>
                },{
                  path:'edit/:colorId',
                  element: <EditCarColorLayout/>
                }
              ]
            },
            {
              path:'profile',
              element: <ProfileLayout/>
            }

          ],
        },
      ],
    },

])