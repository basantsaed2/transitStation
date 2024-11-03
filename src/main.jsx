import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useAuth } from "./Context/Auth";
import { useState ,useEffect} from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx"
import { ContextProvider } from './Context/Auth.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ContextProvider>
//       <RouterProvider router={router} />
//     </ContextProvider>
//   </React.StrictMode>,
// )

// Wrapper Component to use hooks properly
const AppRouterWrapper = () => {
  const auth = useAuth();
  const Permission = auth?.user?.permissions?.role;

  return <RouterProvider router={router(Permission)} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <AppRouterWrapper />
    </ContextProvider>
  </React.StrictMode>
);
