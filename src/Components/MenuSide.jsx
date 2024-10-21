import React, { useState ,useEffect} from "react";

import {
       HomeIcon,LocationIcon,ParkingIcon,SubscriptionsIcon,DriversIcon,FinancialIcon,RevenueIcon
       ,ExpensesIcon,PlanIcon,RequestIcon,UserIcon
} from "./Icons/All_Icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { Link, useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";

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
       const [isActiveEmployee, setIsActiveEmployee] = useState(false);

       const [showExpensesSubMenu, setShowExpensesSubMenu] = useState(false);
       const [showRevenueSubMenu, setShowRevenueSubMenu] = useState(false);
       const [showUsersSubMenu, setShowUsersSubMenu] = useState(false);

       const auth = useAuth();
       const navigate = useNavigate();
       const [Premission] = useState(auth.user.permissions.role)
       const handleLogout = () => {
              auth.logout();
              // navigate("/", { replace: true });
       }

       useEffect(() => {
           console.log(auth.user.role)
           console.log(Premission)
              }
       , [])

       const handleClickHome = () => {
              setIsActiveHome(true);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveExpenses(false);
              setIsActiveRevenue(false);
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(true)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(true)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(prevState => !prevState)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(prevState => !prevState)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(true)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
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
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(true)
              setIsActiveUser(false)
              setIsActiveEmployee(false)
       };
       const handleClickUser = () => {
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(true)
              setShowUsersSubMenu(prevState => !prevState)
              setIsActiveEmployee(false)
       };
       const handleClickEmployee =() =>{
              setIsActiveHome(false);
              setIsActiveLocation(false);
              setIsActiveParking(false);
              setIsActiveSubscriptions(false);
              setIsActiveDrivers(false);
              setIsActiveFinancial(false);
              setIsActiveRevenue(false);
              setIsActiveExpenses(false);
              setShowRevenueSubMenu(false)
              setShowExpensesSubMenu(false)
              setShowUsersSubMenu(false)
              setIsActivePlan(false)
              setIsActiveRequest(false)
              setIsActiveUser(false)
              setIsActiveEmployee(true)
       }

// "parkings"
// "locations"
// "drivers"
// "subscriptions"
// "requests"
// "plans"
// "users"
// "revenues"
// "expences"

       return (
              <>
                     <div className="w-full h-full mt-3 flex justify-center">
                            <div className="MenuSide w-5/6 flex flex-col items-center gap-y-4">
                                   <NavLink to="/dashboard" onClick={handleClickHome} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium ">
                                          <HomeIcon isActive={isActiveHome} />
                                          <span>Home</span>
                                   </NavLink>
                                   {(Premission.includes("requests"))  && (    
                                          <NavLink to="request" onClick={handleClickRequest} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                 <RequestIcon isActive={isActiveRequest} />
                                                 <span>Request</span>
                                          </NavLink>
                                          
                                   )}

                                   {(Premission.includes("subscriptions"))  && (    
                                          <NavLink to="subscriptions" onClick={handleClickSubscriptions} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                 <SubscriptionsIcon isActive={isActiveSubscriptions} />
                                                 <span>#Subscriptions</span>
                                          </NavLink>
                                   )}

                                   {(Premission.includes("users") ||Premission.includes("admins") ||Premission.includes("drivers"))  && (  
                                          <>
                                          <NavLink to="user" onClick={handleClickUser} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                 <UserIcon isActive={isActiveUser} />
                                                 <span>Users</span>
                                          </NavLink>
                                          {showUsersSubMenu && (
                                          <ul className="ml-5 flex flex-col list-disc list-inside">
                                                  {(Premission.includes("users"))&&(       
                                                        <NavLink to="user" onClick={()=>setIsActiveUser(true) & setIsActiveDrivers(false)} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                               <UserIcon isActive={isActiveUser} />
                                                               <span>User</span>
                                                        </NavLink>
                                                  )}
                                                  {(Premission.includes("drivers"))&&(       
                                                        <NavLink to="driver" onClick={()=>setIsActiveUser(false) & setIsActiveDrivers(true) & setIsActiveEmployee(false) } className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                               <DriversIcon isActive={isActiveDrivers} />
                                                               <span>Drivers</span>
                                                        </NavLink>
                                                  )}
                                                  {/* {(Premission.includes("admins"))&&(  */}
                                                 <NavLink to="supervisors" onClick={()=>setIsActiveUser(false) & setIsActiveEmployee(true) & setIsActiveDrivers(false)} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                                        <UserIcon isActive={isActiveEmployee} />
                                                        <span>Supervisors</span>
                                                 </NavLink>
                                                  {/* )} */}
                                                 </ul>
                                          )}
                                          </>
                                   )}



                                   <NavLink to="financial" onClick={handleClickFinancial} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <FinancialIcon isActive={isActiveFinancial} />
                                          <span>Financial</span>
                                   </NavLink>
                                   <NavLink to="pickUp_location" onClick={handleClickLocation} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <LocationIcon isActive={isActiveLocation} />
                                          <span>#Pick_Up Location</span>
                                   </NavLink>
                                   <NavLink to="parking" onClick={handleClickParking} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <ParkingIcon isActive={isActiveParking} />
                                          <span>#Parking</span>
                                   </NavLink>

                                   <NavLink to="revenue" onClick={handleClickRevenue} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <RevenueIcon isActive={isActiveRevenue} />
                                          <span>Revenue</span>
                                   </NavLink>
                                   {showRevenueSubMenu && (
                                          <ul className="ml-5 flex flex-col list-disc list-inside">
                                          <NavLink 
                                                 to="revenue/type" 
                                                 className="w-full flex pl-3 pr-3 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium"
                                          >
                                                 <li className={({ isActive }) =>
                                                 `w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-lg font-medium 
                                                 ${isActive ? 'pl-3 pr-3 bg-white rounded-lg text-mainColor' : 'text-secoundColor'}`
                                                 }>
                                                 Revenue Types
                                                 </li>
                                          </NavLink>
                                          </ul>
                                   )}
                                   <NavLink to="expenses" onClick={handleClickExpenses} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <ExpensesIcon isActive={isActiveExpenses} />
                                          <span>Expenses</span>
                                   </NavLink>
                                   {showExpensesSubMenu && (
                                          <ul className="ml-5 flex flex-col list-disc list-inside">
                                          <NavLink 
                                                 to="expenses/type" 
                                                className="w-full flex pl-3 pr-3 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium"
                                          >
                                                 <li className={({ isActive }) =>
                                                 `w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-lg font-medium 
                                                 ${isActive ? 'pl-3 pr-3 bg-white rounded-lg text-mainColor' : 'text-secoundColor'}`
                                                 }>
                                                 Expenses Types
                                                 </li>
                                          </NavLink>
                                          </ul>
                                   )}
                                   <NavLink to="plan" onClick={handleClickPlan} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <PlanIcon isActive={isActivePlan} />
                                          <span>Plan</span>
                                   </NavLink>
                                   <NavLink isActive={false} onClick={handleLogout } className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <IoIosLogOut size={23} style={{ strokeWidth: 2 }} />
                                          <span>Log Out</span>
                                   </NavLink>
                            </div>
                     </div>
              </>
       );
};

export default MenuSide;
