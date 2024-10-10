import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

const ProtectedRoute = ({ allowedRoles }) => {

       const location = useLocation();
       const auth = useAuth();

       console.log('Auth userRoute:', auth.user);

       if (!auth.user) {
              return <Navigate to="/" state={{ from: location }} replace />;
       }

       const userRoles = (auth.user.roles || []).map(role => role.toLowerCase());
       const hasPermission = allowedRoles
              .map(role => role.toLowerCase())
              .some(role => userRoles.includes(role));
       console.log("auth.user", auth.user.role)
       console.log("userRoles", userRoles)
       console.log("hasPermission", hasPermission)

       if (!hasPermission) {
              if (auth.user.role === "admin") {
                     return <Navigate to={'/dashboard'} />;
                     // return window.location.href = "https://login.elmanhag.shop/dashboard_admin";
              } 
            else {
                     console.log('5')
                     return <Navigate to={'/'} />;
              }
       }
       // if (location.pathname == 'login.elmanhag.shop') {
       //        return window.location.href = "https://elmanhag.com";
       // }

       return <Outlet />;
};

export default ProtectedRoute;
