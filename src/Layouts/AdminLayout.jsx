// import React, { useEffect } from 'react'
// import SidebarAdmin from '../Components/SidebarAdmin'
// import Navbar from '../Components/Navbar'
// import { Outlet } from 'react-router-dom'

// const AdminLayout = () => {
//        // useEffect(() => {
//        //        const disableRightClick = (e) => e.preventDefault();

//        //        // Disable right-click
//        //        document.addEventListener('contextmenu', disableRightClick);

//        //        return () => {
//        //               document.removeEventListener('contextmenu', disableRightClick);
//        //        };
//        // }, []);
//        return (
//               <>
//                      <div className="w-full flex justify-between">
//                             <SidebarAdmin width="w-2/12" />
//                             <div className="w-10/12  min-h-screen overflow-hidden">
//                                    <Navbar />
//                                    <div className="bg-thirdBgColor w-full h-full">
//                                           <div className="w-[95%] mx-auto h-full">
//                                                  <Outlet />
//                                           </div>
//                                    </div>
//                             </div>
//                      </div>
//               </>
//        )
// }

// export default AdminLayout


import { useState } from 'react';
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri'; // Import the icons
import SidebarAdmin from '../Components/SidebarAdmin'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
       const [isSidebarOpen, setIsSidebarOpen] = useState(false);

       const toggleSidebar = () => {
           setIsSidebarOpen(!isSidebarOpen);
       };

  return (
    <div className="relative flex gap-x-4">
      {/* Fixed Menu Icon for Small Screens */}
      <div className="relative top-0 z-20 lg:hidden bg-[#fff]">
        <button onClick={toggleSidebar} className="text-black p-2 focus:outline-none">
          {isSidebarOpen ? (
            <RiCloseFill className="w-8 h-8 ml-auto z-10" color="black" />
          ) : (
            <RiMenu2Fill className="w-8 h-8" color="black" />
          )}
        </button>
      </div>

      {/* Sidebar that overlays the content on small screens */}
      <SidebarAdmin isOpen={isSidebarOpen} />

      {/* Main Content Section */}
      <div className={`contentSection md:w-full sm:w-full lg:w-4/5 min-h-screen transition-opacity ${isSidebarOpen ? 'opacity-50' : 'opacity-100'}`}>
                    {/* <HeaderStudent /> */}
                    <Navbar />
                    <div className="pl-5">
                        <Outlet />
                    </div>
                </div>
    </div>
  );
};

export default AdminLayout;
