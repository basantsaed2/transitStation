import React, { useState } from "react";

import {
       HomeIcon,LocationIcon,ParkingIcon,SubscriptionsIcon,DriversIcon,FinancialIcon,RevenueIcon
       ,ExpensesIcon,PlanIcon,RequestIcon,UserIcon
} from "./Icons/All_Icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { Link, useNavigate } from 'react-router-dom'

const MenuSide = () => {
       const [isActiveHome, setIsActiveHome] = useState(true);
       const [isActiveLocation, setIsActiveLocation] = useState(false);
       const [isActiveParking, setIsActiveParking] = useState(false);
       const [isActiveSubscriptions, setIsActiveSubscriptions] = useState(false);
       const [isActiveDrivers, setIsActiveDrivers] = useState(false);
       const [isActiveFinancial, setIsActiveFinancial] = useState(false);
       const [isActiveRevenue, setIsActiveRevenue] = useState(false);
       const [isActiveExpenses, setIsActiveExpenses] = useState(false);
       const [isActivePlan, setIsActivePlan] = useState(false);
       const [isActiveRequest, setIsActiveRequest] = useState(false);
       const [isActiveUser, setIsActiveUser] = useState(false);

       const auth = useAuth();
       const navigate = useNavigate();
    //    const handleLogout = () => {
    //           auth.logout();
    //           navigate("/authentication/login", { replace: true });
    //    }

       const handleClickHome = () => {
              setIsActiveHome(true);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveExpenses(false);
              setIsActiveRevenue(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickLocation = () => {
              setIsActiveHome(false);
              setIsActiveLocation(true);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveExpenses(false);
              setIsActiveRevenue(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickParking = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(true);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickSubscriptions = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(true);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickDrivers = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(true);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickFinancial = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(true);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickRevenue = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(true);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickExpenses = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(true);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickPlan = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(true)
              setIsActiveRequest(false)
              setIsActiveUser(false)
       };
       const handleClickRequest = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(true)
              setIsActiveUser(false)
       };
       const handleClickUser = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(true);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(true)
       };

       return (
              <>
                     <div className="w-full h-full mt-8 flex justify-center">
                            <div className="MenuSide w-5/6 flex flex-col items-center gap-y-4">
                                   <NavLink to="/dashboard" onClick={handleClickHome} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium ">
                                          <HomeIcon isActive={isActiveHome} />
                                          <span>Home</span>
                                   </NavLink>
                                   <NavLink to="pickUp_location" onClick={handleClickLocation} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <LocationIcon isActive={isActiveLocation} />
                                          <span>#Pick_Up Location</span>
                                   </NavLink>
                                   <NavLink to="parking" onClick={handleClickParking} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <ParkingIcon isActive={isActiveParking} />
                                          <span>#Parking</span>
                                   </NavLink>

                                   <NavLink to="subscriptions" onClick={handleClickSubscriptions} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <SubscriptionsIcon isActive={isActiveSubscriptions} />
                                          <span>#Subscriptions</span>
                                   </NavLink>
                                   <NavLink to="drivers" onClick={handleClickDrivers} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <DriversIcon isActive={isActiveDrivers} />
                                          <span>#Drivers</span>
                                   </NavLink>
                                   <NavLink to="financial" onClick={handleClickFinancial} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <FinancialIcon isActive={isActiveFinancial} />
                                          <span>Financial</span>
                                   </NavLink>

                                   <NavLink to="revenue" onClick={handleClickRevenue} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <RevenueIcon isActive={isActiveRevenue} />
                                          <span>Revenue</span>
                                   </NavLink>
                                   <NavLink to="expenses" onClick={handleClickExpenses} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <FinancialIcon isActive={isActiveExpenses} />
                                          <span>Expenses</span>
                                   </NavLink>

                                   <NavLink to="plan" onClick={handleClickPlan} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <PlanIcon isActive={isActivePlan} />
                                          <span>Plan</span>
                                   </NavLink>
                                   <NavLink to="request" onClick={handleClickRequest} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <RequestIcon isActive={isActiveRequest} />
                                          <span>Request</span>
                                   </NavLink>
                                   <NavLink to="user" onClick={handleClickUser} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <UserIcon isActive={isActiveUser} />
                                          <span>User</span>
                                   </NavLink>
                            </div>
                     </div>
              </>
       );
};

export default MenuSide;
