import React, { useState ,useEffect} from "react";

import {
       HomeIcon,LocationIcon,ParkingIcon,SubscriptionsIcon,DriversIcon,FinancialIcon,RevenueIcon,ProfileIcon
       ,ExpensesIcon,PlanIcon,RequestIcon,UserIcon,SettingIcon,AssetIcon,RevenueTypes,ColorIcon,PermissionIcon,
       CustomerIcon,SupervisorIcon
} from "./Icons/All_Icons";
import { useAuth } from "../Context/Auth";
import { Link, useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";

const MenuSide = () => {

       const auth = useAuth();
       const navigate = useNavigate();
       const [Premission] = useState(auth.user.permissions.role)
       const savedState = JSON.parse(localStorage.getItem('sidebarState')) || {};

       const [isActiveHome, setIsActiveHome] =  useState(savedState.isActiveHome ?? true);
       const [isActiveRequest, setIsActiveRequest] = useState(savedState.isActiveRequest ?? false);
       const [isActiveSubscriptions, setIsActiveSubscriptions] = useState(savedState.isActiveSubscriptions ?? false);
       const [isActiveUser, setIsActiveUser] =  useState(savedState.isActiveUser ?? false);
              const [openListUser, setOpenListUser] = useState(savedState.openListUser ?? false);
              const [isActiveEmployee, setIsActiveEmployee] = useState(savedState.isActiveEmployee ?? false);
              const [isActiveDrivers, setIsActiveDrivers] = useState(savedState.isActiveDrivers ?? false);
              const [isActiveAdmins, setIsActiveAdmins] = useState(savedState.isActiveAdmins ?? false);
       const [isActiveRevenue, setIsActiveRevenue] = useState(savedState.isActiveRevenue ?? false);
              const [showRevenueSubMenu, setShowRevenueSubMenu] = useState(savedState.showRevenueSubMenu ?? false);
              const [isActiveRevenueType, setIsActiveRevenueType] = useState(savedState.isActiveRevenueType ?? false);
       const [isActiveExpenses, setIsActiveExpenses] = useState(savedState.isActiveExpenses ?? false);
              const [showExpenseSubMenu, setShowExpenseSubMenu] = useState(savedState.showExpenseSubMenu ?? false);
              const [isActiveExpenseType, setIsActiveExpenseType] = useState(savedState.isActiveExpenseType ?? false);
       const [isActiveParkingList, setIsActiveParkingList] = useState(savedState.isActiveParkingList ?? false);
              const [openListAssets, setOpenListAssets] = useState(savedState.openListAssets ?? false);
              const [isActiveParking, setIsActiveParking] =  useState(savedState.isActiveParking ?? false);
              const [isActiveLocation, setIsActiveLocation] =  useState(savedState.isActiveLocation ?? false);
       const [isActiveSettingsList, setIsActiveSettingsList] = useState(savedState.isActiveSettingsList ?? false);
              const [openListSettings, setOpenListSettings] = useState(savedState.openListSettings ?? false);
              const [isActivePlan, setIsActivePlan] = useState(savedState.isActivePlan ?? false);
              // const [isActivePayment, setIsActivePayment] = useState(savedState.isActivePayment ?? false);
              const [isActiveCarColor, setIsActiveCarColor] = useState(savedState.isActiveCarColor ?? false);
              const [isActivePermission, setIsActivePermission] = useState(savedState.isActivePermission ?? false);
              const [isActivePromoCode, setIsActivePromoCode] = useState(savedState.isActivePromoCode ?? false);
       // const [isActiveFinancial, setIsActiveFinancial] = useState(false);
       const [isActiveProfile, setIsActiveProfile] =  useState(savedState.isActiveProfile ?? true);
       const [isActiveLogout, setIsActiveLogout] =  useState(savedState.isActiveLogout ?? true);
     
       const handleLogout = () => {
              auth.logout();
              // navigate("/", { replace: true });
       }

       useEffect(() => {
           console.log(auth.user.role)
       //     console.log(Premission)
              }
       , [])

       useEffect(() => {
              const sidebarState = {
                     isActiveHome,
                     isActiveRequest,
                     isActiveSubscriptions,
                     isActiveUser,openListUser,isActiveEmployee,isActiveDrivers,isActiveAdmins,
                     isActiveRevenue,showRevenueSubMenu,isActiveRevenueType,
                     isActiveExpenses,showExpenseSubMenu,isActiveExpenseType,
                     isActiveParkingList,openListAssets,isActiveParking,isActiveLocation,
                     isActiveSettingsList,openListSettings,isActivePlan,isActivePermission,
                     // isActivePayment
                     isActiveCarColor,isActivePromoCode,
                     isActiveProfile,
                     isActiveLogout
              };
              localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
       }, [isActiveHome,
           isActiveRequest,
           isActiveSubscriptions,
           isActiveUser,openListUser,isActiveEmployee,isActiveDrivers,isActiveAdmins,
           isActiveRevenue,showRevenueSubMenu,isActiveRevenueType,
           isActiveExpenses,showExpenseSubMenu,isActiveExpenseType,
           isActiveParkingList,openListAssets,isActiveParking,isActiveLocation,
           isActiveSettingsList,openListSettings,isActivePlan,isActivePermission,
           // isActivePayment
           isActiveCarColor,isActivePromoCode,
           isActiveProfile,
           isActiveLogout
             ]);

       const handleClickHome = () => {
              setIsActiveHome(true);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false)
              setIsActiveLocation(false)
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
              setIsActiveProfile(false)
              setIsActiveLogout(false)
       };
       const handleClickRequest = () => {
              setIsActiveHome(false)
              setIsActiveRequest(true)
              setIsActiveSubscriptions(false)
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickSubscriptions = () => {
              setIsActiveHome(false)
              setIsActiveRequest(false)
              setIsActiveSubscriptions(true)
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false)
              setIsActiveLocation(false)
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickUser = () => {
              setIsActiveHome(false)
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false)
              setIsActiveUser(true)
              setOpenListUser(true)
              setIsActiveEmployee(true)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false)
              setIsActiveLocation(false)
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickEmployee = () => {
              setIsActiveHome(false)
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false)
              setIsActiveUser(true)
              setOpenListUser(true)
              setIsActiveEmployee(true)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false)
              setIsActiveLocation(false)
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickDrivers = () => {
              setIsActiveHome(false)
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false)
              setIsActiveUser(true)
              setOpenListUser(true)
              setIsActiveEmployee(false)
              setIsActiveDrivers(true)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false)
              setIsActiveLocation(false)
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickAdmins = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(true)
              setOpenListUser(true)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(true)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickRevenue =() =>{
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(true)
              setShowRevenueSubMenu(true)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       }
       const handleClickRevenueType =() =>{
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(true)
              setIsActiveRevenueType(true)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       }
       const handleClickExpenses =() =>{
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(true)
              setShowExpenseSubMenu(true)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       }
       const handleClickExpensesType =() =>{
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(true)
              setIsActiveExpenseType(true)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       }
       const handleClickParkingList = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(true)
              setOpenListAssets(true)
              setIsActiveParking(true);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickParking = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(true)
              setOpenListAssets(true)
              setIsActiveParking(true);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickLocation = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(true)
              setOpenListAssets(true)
              setIsActiveParking(false);
              setIsActiveLocation(true);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickSettings = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(true)
              setOpenListSettings(true)
              setIsActivePlan(true)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickPlans = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(true)
              setOpenListSettings(true)
              setIsActivePlan(true)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickPermission = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(true)
              setOpenListSettings(true)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(true)
              setIsActivePromoCode(false)
       };
       const handleClickColor = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(true)
              setOpenListSettings(true)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(true)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };
       const handleClickPromoCode = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(true)
              setOpenListSettings(true)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(false)
              setIsActivePermission(false)
              setIsActivePromoCode(true)
       };
       const handleClickProfile = () => {
              setIsActiveHome(false);
              setIsActiveRequest(false)
              setIsActiveSubscriptions(false);
              setIsActiveUser(false)
              setOpenListUser(false)
              setIsActiveEmployee(false)
              setIsActiveDrivers(false)
              setIsActiveAdmins(false)
              setIsActiveRevenue(false)
              setShowRevenueSubMenu(false)
              setIsActiveRevenueType(false)
              setIsActiveExpenses(false)
              setShowExpenseSubMenu(false)
              setIsActiveExpenseType(false)
              setIsActiveParkingList(false)
              setOpenListAssets(false)
              setIsActiveParking(false);
              setIsActiveLocation(false);
              setIsActiveSettingsList(false)
              setOpenListSettings(false)
              setIsActivePlan(false)
              // setIsActivePayment(false)
              setIsActiveCarColor(false)
              setIsActiveProfile(true)
              setIsActivePermission(false)
              setIsActivePromoCode(false)
       };

       return (
              <>
                     <div className="w-full h-full mt-3 flex justify-center mb-10">
                            <div className="MenuSide w-5/6 flex flex-col items-center gap-y-4">
                                   {/* <NavLink to="/dashboard" onClick={handleClickHome} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium ">
                                          <HomeIcon isActive={isActiveHome} />
                                          <span>Home</span>
                                   </NavLink> */}
                                   <Link to="/dashboard" onClick={handleClickHome} className={`${isActiveHome ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <HomeIcon isActive={isActiveHome} />
                                          <span className={`${isActiveHome ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Home</span>
                                   </Link>
                                   {(Premission.includes("requests"))  && (    
                                          <Link to="request" onClick={handleClickRequest} className={`${isActiveRequest ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <RequestIcon isActive={isActiveRequest} />
                                                 <span className={`${isActiveRequest ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Request</span>
                                          </Link>             
                                   )}
                                   {(Premission.includes("subscriptions"))  && (    
                                          <Link to="subscriptions" onClick={handleClickSubscriptions} className={`${isActiveSubscriptions ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <SubscriptionsIcon isActive={isActiveSubscriptions} />
                                                 <span className={`${isActiveSubscriptions ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Subscriptions</span>
                                          </Link>  
                                   )}
                                   {(Premission.includes("users") ||Premission.includes("admins") ||Premission.includes("drivers"))  && ( 
                                          <>
                                          <Link to="user" onClick={handleClickUser} className={`${isActiveUser ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <UserIcon isActive={isActiveUser} />
                                                 <span className={`${isActiveUser ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Users</span>
                                          </Link>
                                          <div className={`${openListUser ? "h-37" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                                 <ul className={`${openListUser ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-10 bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                                 {(Premission.includes("users"))&&(       
                                                        <Link to="user" onClick={handleClickEmployee} className={`${isActiveEmployee ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <CustomerIcon isActive={isActiveEmployee} />
                                                               <span className={`${isActiveEmployee ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Customers</span>
                                                        </Link> 
                                                 )}
                                                 {(Premission.includes("drivers"))&&(       
                                                        <Link to="driver" onClick={handleClickDrivers} className={`${isActiveDrivers ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <DriversIcon isActive={isActiveDrivers} />
                                                               <span className={`${isActiveDrivers ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Drivers</span>
                                                        </Link>
                                                 )}
                                                 {(Premission.includes("admins"))&&( 
                                                        <Link to="supervisors" onClick={handleClickAdmins} className={`${isActiveAdmins ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <SupervisorIcon isActive={isActiveAdmins} />
                                                               <span className={`${isActiveAdmins ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Supervisors</span>
                                                        </Link>
                                                 )}
                                                 </ul>
                                          </div>
                                          </>
                                   )}
                                   {(Premission.includes("revenues")) && ( 
                                          <>
                                          <Link to="revenue" onClick={handleClickRevenue} className={`${isActiveRevenue ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <RevenueIcon isActive={isActiveRevenue} />
                                                 <span className={`${isActiveRevenue ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Revenue</span>
                                          </Link>
                                          <div className={`${ showRevenueSubMenu? "h-15" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                                 <ul className={`${showRevenueSubMenu ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-10 bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                                 {(Premission.includes("revenues"))&&(       
                                                        <Link to="revenue/type" onClick={handleClickRevenueType} className={`${isActiveRevenueType ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <RevenueTypes isActive={isActiveRevenueType} />
                                                               <span className={`${isActiveRevenueType ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Revenue Types</span>
                                                        </Link> 
                                                 )}
                                                
                                                 </ul>
                                          </div>
                                          </>
                                   )}
                                   {(Premission.includes("expences")) && ( 
                                          <>
                                          <Link to="expenses" onClick={handleClickExpenses} className={`${isActiveExpenses ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <ExpensesIcon isActive={isActiveExpenses} />
                                                 <span className={`${isActiveExpenses ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Expences</span>
                                          </Link>
                                          <div className={`${ showExpenseSubMenu? "h-15" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                                 <ul className={`${showExpenseSubMenu ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-10 bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                                 {(Premission.includes("expences"))&&(       
                                                        <Link to="expenses/type" onClick={handleClickExpensesType} className={`${isActiveExpenseType ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <RevenueTypes isActive={isActiveExpenseType} />
                                                               <span className={`${isActiveExpenseType ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Expences Types</span>
                                                        </Link> 
                                                 )}
                                                
                                                 </ul>
                                          </div>
                                          </>
                                   )}
                                   {(Premission.includes("parkings") ||Premission.includes("locations"))  && ( 
                                          <>
                                          <Link to="parking" onClick={handleClickParkingList} className={`${isActiveParkingList ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <AssetIcon isActive={isActiveParkingList} />
                                                 <span className={`${isActiveParkingList ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Assets</span>
                                          </Link>
                                          <div className={`${openListAssets ? "h-15" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                                 <ul className={`${openListAssets ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-10 bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                                 {(Premission.includes("parkings"))&&(       
                                                        <Link to="parking" onClick={handleClickParking} className={`${isActiveParking ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <ParkingIcon isActive={isActiveParking} />
                                                               <span className={`${isActiveParking ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Parkings</span>
                                                        </Link> 
                                                 )}
                                                 {(Premission.includes("locations"))&&(       
                                                        <Link to="pickUp_location" onClick={handleClickLocation} className={`${isActiveLocation ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <LocationIcon isActive={isActiveLocation} />
                                                               <span className={`${isActiveLocation ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Pickup locations </span>
                                                        </Link>
                                                 )}             
                                                 </ul>
                                          </div>
                                          </>
                                   )}
                                   {(Premission.includes("plans") ||Premission.includes("colors")||Premission.includes("promocodes")) && ( 
                                          <>
                                          <Link to="plan" onClick={handleClickSettings} className={`${isActiveSettingsList ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <SettingIcon isActive={isActiveSettingsList} />
                                                 <span className={`${isActiveSettingsList ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Settings</span>
                                          </Link>
                                          <div className={`${openListSettings ? "h-13" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                                 <ul className={`${openListSettings ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-10 bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                                 {(Premission.includes("plans"))&&(       
                                                        <Link to="plan" onClick={handleClickPlans} className={`${isActivePlan ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <PlanIcon isActive={isActivePlan} />
                                                               <span className={`${isActivePlan ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Plans</span>
                                                        </Link> 
                                                 )}
                                                 {/* {(Premission.includes("admins"))&&(        */}
                                                        <Link to="permission" onClick={handleClickPermission} className={`${isActivePermission ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <PermissionIcon isActive={isActivePermission} />
                                                               <span className={`${isActivePermission ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Permissions</span>
                                                        </Link>
                                                 {/* )} */}
                                                 {(Premission.includes("colors"))&&( 
                                                        <Link to="car_color" onClick={handleClickColor} className={`${isActiveCarColor ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               <ColorIcon isActive={isActiveCarColor} />
                                                               <span className={`${isActiveCarColor ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Car Colors</span>
                                                        </Link>
                                                 )}
                                                  {(Premission.includes("promocodes"))&&( 
                                                        <Link to="promo_code" onClick={handleClickPromoCode} className={`${isActivePromoCode ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                               {/* <ColorIcon isActive={isActivePromoCode} /> */}
                                                               <span className={`${isActivePromoCode ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Promo Code</span>
                                                        </Link>
                                                 )}
                                                 </ul>
                                          </div>
                                          </>
                                   )}
                                   {/* {(Premission.includes("requests"))  && (     */}
                                          <Link to="profile" onClick={handleClickProfile} className={`${isActiveProfile ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                                 <ProfileIcon isActive={isActiveProfile} />
                                                 <span className={`${isActiveProfile ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Profile</span>
                                          </Link>             
                                   {/* )} */}
                                   <Link to="/" onClick={handleLogout} className="w-full flex items-center justify-start px-0 py-2 gap-x-5">
                                          <IoIosLogOut size={23} style={{ strokeWidth: 2 }} color="#ffff"/>
                                          <span className="text-secoundColor text-xl font-medium">Log Out</span>
                                   </Link>
                                   {/* 
                                   <NavLink to="financial" onClick={handleClickFinancial} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <FinancialIcon isActive={isActiveFinancial} />
                                          <span>Financial</span>
                                   </NavLink>               
                                  */}
                            </div>
                     </div>
              </>
       );
};

export default MenuSide;
