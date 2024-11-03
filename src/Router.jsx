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
  ProfileLayout,
  PromoCodeLayout,
  AddPromoCodeLayout,
  EditPromoCodeLayout
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
const AppLayoutPromoCode =()=>(
  <>
  <Outlet/>
  </>
)

export const router = (Permission) => 
  createBrowserRouter([

    {
        path: "/",
        element: <LoginAdmin />,
    },
    {
      element: <ProtectedRoute allowedRoles={['admin']} Permission={Permission}/>,
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
                // ...(Permission?.includes('locations') ? [
                  {
                    path: '',
                    element: <PickUP_LocationLayout/>,
                  }, 
                // ] : []),
                ...(Permission?.includes('add location') ? [
                  {
                    path: 'add',
                    element: <AddPickUP_LocationLayout/>,
                  },
                ] : []), 
                ...(Permission?.includes('edit location') ? [
                  {
                    path: 'edit/:locationId',
                    element: <EditPickUP_LocationLayout/>,
                  }, 
                ] : []), 
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
                  //  ...(Permission?.includes('parkings') ? [
                      {
                        path: '',
                        element: <ParkingLayout/>,
                      },
                      {
                        path:'parkinglist/:parkingId',
                        element:<ParkingListLayout/>
                      }
                  // ] : []),
                  ]
                }, 
                ...(Permission?.includes('add parking') ? [
                  {
                    path: 'add',
                    element: <AddParkingLayout/>,
                  }, 
                ] : []),
                ...(Permission?.includes('edit parking') ? [
                  {
                    path: 'edit/:parkingId',
                    element: <EditParkingLayout/>,
                  }, 
                ] : []),
              ]
            }, 
            {
              path: 'subscriptions',
              element: <AppLayoutSubscriptions/>,
              children: [
                // ...(Permission?.includes('subscriptions') ? [
                  {
                    path: '',
                    element: <SubscriptionsLayout/>,
                  }, 
                // ] : []),
                ...(Permission?.includes('add subscription') ? [
                  {
                    path: 'add',
                    element: <AddSubscriptionsLayout/>,
                  },
                ] : []),
                ...(Permission?.includes('edit subscription') ? [
                  {
                    path: 'edit/:subscriptionId',
                    element: <EditSubscriptionsLayout/>,
                  },
                ] : []), 
              ]
            },
            {
              path: 'driver',
              element: <AppLayoutDriver/>,
              children :[
                // ...(Permission?.includes('drivers') ? [
                  {
                    path: '',
                    element: <DriverLayout/>,
                  },
                // ] : []),
                ...(Permission?.includes('add driver') ? [
                  {
                    path: 'add',
                    element: <AddDriverLayout/>,
                  },
                ] : []),
                ...(Permission?.includes('edit driver') ? [
                  {
                    path: 'edit/:driverId',
                    element: <EditDriverLayout/>,
                  },
                ] : []),
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
                // ...(Permission?.includes('revenues') ? [
                  {
                    path: '',
                    element: <RevenueLayout/>,
                  },
                // ] : []),
                ...(Permission?.includes('add revenue') ? [
                  {
                    path: 'add',
                    element: <AddRevenueLayout/>,
                  }, 
                ] : []),
                ...(Permission?.includes('edit revenue') ? [
                  {
                    path: 'edit/:revenueId',
                    element: <EditRevenueLayout/>,
                  }, 
                ] : []),
                {
                  path: 'type',
                  element: <AppLayoutRevenueType/>,
                  children:[
                    {
                      path:'',
                      element: <RevenueTypeLayout/>,
                    },
                    ...(Permission?.includes('add revenue_type') ? [
                    {
                      path:'add',
                      element: <AddRevenueTypeLayout/>,
                    },
                  ] : []),
                    ...(Permission?.includes('edit revenue_type') ? [
                    {
                      path:'edit/:typeId',
                      element: <EditRevenueTypeLayout/>,
                    },
                  ] : []),

                  ]
                }, 
              ]
            },
            {
              path: 'expenses',
              element: <AppLayoutExpenses/>,
              children: [
                // ...(Permission?.includes('expences') ? [
                  {
                    path: '',
                    element: <ExpensesLayout/>,
                  }, 
                // ] : []),
                ...(Permission?.includes('add expence') ? [
                  {
                    path: 'add',
                    element: <AddExpensesLayout/>,
                  }, 
                ] : []),
                ...(Permission?.includes('edit expence') ? [
                  {
                    path: 'edit/:expenseId',
                    element: <EditExpensesLayout/>,
                  },
                ] : []),
                {
                  path: 'type',
                  element: <AppLayoutExpensesType/>,
                  children:[
                    {
                      path:'',
                      element: <ExpensesTypeLayout/>,
                    },
                    ...(Permission?.includes('add expence_type') ? [
                    {
                      path:'add',
                      element: <AddExpensesTypeLayout/>,
                    },
                  ] : []),
                  ...(Permission?.includes('edit expence_type') ? [
                    {
                      path:'edit/:typeId',
                      element: <EditExpensesTypeLayout/>,
                    },
                  ] : []),
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
                // ...(Permission?.includes('plans') ? [
                  {
                    path:'',
                    element :<PlanLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add plan') ? [
                  {
                    path:'add',
                    element :<AddPlanLayout/>
                  },
                ] : []),
                ...(Permission?.includes('edit plan') ? [
                  {
                    path:'edit/:planId',
                    element :<EditPlanLayout/>
                  },
                ] : []),
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
                  // ...(Permission?.includes('requests') ? [
                    {
                    path: '',
                    element: <RequestLayout/>,
                    },
                  // ] : []),
                    {
                      path: 'all_drivers',
                      element: <AssignDriverLayout/>,
                    }
                    ]
                  },
                  ...(Permission?.includes('add request') ? [
                      {
                        path: 'add',
                        element: <AddRequestLayout/>,
                      },
                      {
                        path: 'add_return',
                        element: <ReturnRequestLayout/>,
                      },
                  ] : []),
                  ...(Permission?.includes('edit request') ? [
                    {
                      path: 'edit/:requestId',
                      element: <EditRequestLayout/>,
                    },
                  ] : []),
              ]
            },
            {
              path: 'user',
              element: <AppLayoutUser/>,
              children:[
                // ...(Permission?.includes('user') ? [
                  {
                    path:'',
                    element: <UserLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add user') ? [
                  {
                    path:'add',
                    element: <AddUserLayout/>
                  }
                ] : []),
                ...(Permission?.includes('edit user') ? [
                  {
                    path:'edit/:userId',
                    element: <EditUserLayout/>
                  }
                ] : []),
              ]
            },
            {
              path: 'supervisors',
              element: <AppLayoutEmployees/>,
              children:[
                // ...(Permission?.includes('admins') ? [
                  {
                    path:'',
                    element: <EmployeesLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add admin') ? [
                  {
                    path:'add',
                    element: <AddEmployeesLayout/>
                  }
                ] : []),
                ...(Permission?.includes('edit admin') ? [
                  {
                    path:'edit/:employeeId',
                    element: <EditEmployeesLayout/>
                  }
                ] : []),
              ]
            },
            {
              path: 'permission',
              element: <AppLayoutPermission/>,
              children:[
                // ...(Permission?.includes('roles') ? [
                  {
                    path:'',
                    element: <PermissionLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add role') ? [
                  {
                    path:'add',
                    element: <AddPermissionLayout/>
                  }
                ] : []),
                ...(Permission?.includes('edit role') ? [
                  {
                    path:'edit/:roleId',
                    element: <EditPermissionLayout/>
                  }
                ] : []),
              ]
            },
            {
              path: 'car_color',
              element: <AppLayoutCarColor/>,
              children:[
                // ...(Permission?.includes('colors') ? [
                  {
                    path:'',
                    element: <CarColorLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add color') ? [
                  {
                    path:'add',
                    element: <AddCarColorLayout/>
                  }
                ] : []),
                ...(Permission?.includes('edit color') ? [
                  {
                    path:'edit/:colorId',
                    element: <EditCarColorLayout/>
                  }
                ] : []),
              ]
            },
            {
              path:'profile',
              element: <ProfileLayout/>
            },
            {
              path: 'promo_code',
              element: <AppLayoutPromoCode/>,
              children:[
                // ...(Permission?.includes('promocodes') ? [
                  {
                    path:'',
                    element: <PromoCodeLayout/>
                  },
                // ] : []),
                ...(Permission?.includes('add promocode') ? [
                  {
                    path:'add',
                    element: <AddPromoCodeLayout/>
                  }
                ] : []),
                ...(Permission?.includes('edit promocode') ? [
                  {
                    path:'edit/:promoId',
                    element: <EditPromoCodeLayout/>
                  }
                ] : []),
              ]
            },

          ],
        },
      ],
    },

])
