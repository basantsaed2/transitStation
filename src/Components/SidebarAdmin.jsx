import React from "react";
import MenuSide from "./MenuSide.jsx";
const SidebarAdmin =({ isOpen }) => {
       return (
              <>
                     {/* <aside className="w-1/5 fixed h-screen right-0 overflow-hidden flex flex-col items-center bg-mainColor gap-y-6">
                            <div className="h-1/5 mt-2">
                                   <LogoSidebar Width="100%" />
                            </div>
                            <MenuSide />
                                   </aside> */}
              {/* <div className="relative w-4/12 bg-mainColor text-secoundColor lg:w-3/12 xl:w-2/12 border-r-2 overflow-hidden flex items-center justify-center gap-y-6">
                     <aside className="fixed top-0 z-10 h-screen flex flex-col items-center gap-y-2">
                            <div className="w-full flex items-center justify-center border-b-2 py-6 px-4 text-xl font-semibold">
                                   <h1>Transit Station Car Parking</h1>
                            </div>
                            <MenuSide />
                     </aside>
              </div> */}

<aside
  className={`fixed scrollSec xl:3/12 lg:w-[19%] left-0 overflow-y-auto z-10 h-screen flex flex-col items-center bg-mainColor gap-y-3 transition-transform transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0`} // Sidebar always visible on large screens
>
  <div className="w-full lg:mt-0 sm:mt-6 flex text-white items-center justify-center border-b-2 py-6 px-4 text-xl font-semibold">
    <h1>Transit Station Car Parking</h1>
  </div>
  <MenuSide />
</aside>

              
              </>
       );
};

export default SidebarAdmin;
