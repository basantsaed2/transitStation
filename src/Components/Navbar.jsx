import React, { useEffect, useRef, useState } from 'react'

import { useAuth } from '../Context/Auth'
// import { CiGlobe } from "react-icons/ci";
// import { IoNotifications } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import SearchBar from './SearchBar';
// import DropDownMenu from './DropDownMenu';
// import { Link } from 'react-router-dom';
// import { Button } from './Button';

const Navbar = () => {
       const auth = useAuth()

       return (
           <>
                     <div className="flex items-center justify-between py-2 px-4 bg-white mb-5">
                            <div className='w-4/12 flex items-center justify-start'>
                                   {/* image profile */}
                                   <div className="w-3/12">
                                          <img src={auth.user.data.image} className='w-14 h-14 rounded-full object-cover object-center' alt="Profile" />
                                   </div>
                                   {/* Name Admin */}
                                   <div className="w-7/12">
                                          <span className='text-2xl text-mainColor font-bold'>Hello, <span className='font-semibold text-[#000]'>{auth.user.data.name}</span></span>
                                   </div>
                            </div>
                    </div>
              </>
       )
}

export default Navbar