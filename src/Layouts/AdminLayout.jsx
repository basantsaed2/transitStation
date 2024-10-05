import React, { useEffect } from 'react'
import SidebarAdmin from '../Components/SidebarAdmin'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
       // useEffect(() => {
       //        const disableRightClick = (e) => e.preventDefault();

       //        // Disable right-click
       //        document.addEventListener('contextmenu', disableRightClick);

       //        return () => {
       //               document.removeEventListener('contextmenu', disableRightClick);
       //        };
       // }, []);
       return (
              <>
                     <div className="w-full flex justify-between">
                            <SidebarAdmin width="w-2/12" />
                            <div className="w-10/12  min-h-screen overflow-hidden">
                                   <Navbar />
                                   <div className="bg-thirdBgColor w-full h-full">
                                          <div className="w-[95%] mx-auto h-full">
                                                 <Outlet />
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default AdminLayout