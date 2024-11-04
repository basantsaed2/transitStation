// import React, { useEffect, useRef, useState } from 'react'
// import { IoSearch } from 'react-icons/io5'
// import { useAuth } from '../Context/Auth'
// import ProfileIcon from './Icons/ProfileIcon'
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {
//        const auth = useAuth()

//        return (
//            <>
//                      <div className="flex lg:mr-0 sm:ml-12 lg:ml-0 items-center justify-between py-2 px-4 bg-white mb-10">
//                             <div className='w-full flex items-center justify-start gap-5'>
//                                    {/* image profile */}
//                                    <div className='w-2/6 flex items-center gap-5'>
//                                           <img src={`data:image/jpeg;base64,${auth.user.data.image}`} className='w-20 h-20 rounded-full object-cover object-center' alt="Profile" />
//                                           <div>
//                                                  <span className='text-3xl text-mainColor font-bold flex'>Hello, <span className='font-semibold text-[#000]'>{auth.user.data.name}</span></span>
//                                           </div>
//                                    </div>
//                                    {/* Name Admin */}
//                                    <div className='w-3/6 hidden lg:flex relative'>
//                                           <input type="text" name="search" className={`bg-[#DEDEDE] w-full h-full pl-12 py-4 rounded-xl outline-none font-medium text-thirdColor`} placeholder="Search"/>
//                                           <IoSearch className='absolute top-3 left-4 text-mainColor font-bold text-xl' />
//                                    </div>
//                                    <Link to="profile" className='w-2/6 mr-10 hidden lg:flex'>
//                                    <div className='flex justify-end gap-2 w-full items-center relative'>
//                                           <ProfileIcon/>
//                                           <span className={`text-mainColor" text-2xl font-medium`}>Profile</span>
//                                    </div>
//                                    </Link>
//                             </div>
//                     </div>
//               </>
//        )
// }

// export default Navbar


import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useAuth } from '../Context/Auth';
import ProfileIcon from './Icons/ProfileIcon';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [Premission] = useState(auth.user.permissions.role)
    const [searchTerm, setSearchTerm] = useState("");

    // Handler for search functionality
    const handleSearch = () => {
        switch (searchTerm.toLowerCase()) {
            case 'home':
                navigate('/dashboard'); // Replace with actual route
                break;
            case 'profile':
                navigate('profile');
                break;
            case 'request':
                navigate('request');
                break;
            case 'subscriptions':
                navigate('subscriptions');
                break;
            case 'users':
                navigate('user');
                break;
            case 'revenue':
                navigate('revenue');
                break;
            case 'expenses':
                navigate('expenses');
                break;
            // Add more cases as needed
            default:
                auth.toastError('Page not found');
        }
    };

    return (
        <>
            <div className="flex lg:mr-0 sm:ml-12 lg:ml-0 items-center justify-between py-2 px-4 bg-white mb-10">
                <div className='w-full flex items-center justify-start gap-5'>
                    {/* Profile image */}
                    <div className='w-2/6 flex items-center gap-5'>
                        <img src={`data:image/jpeg;base64,${auth.user.data.image}`} className='w-20 h-20 rounded-full object-cover object-center' alt="Profile" />
                        <div>
                            <span className='text-3xl text-mainColor font-bold flex'>Hello, <span className='font-semibold text-[#000]'>{auth.user.data.name}</span></span>
                        </div>
                    </div>
                    {/* Search Input */}
                    <div className='w-3/6 hidden xl:flex items-center relative'>
                        <input 
                            type="text" 
                            name="search" 
                            className="bg-[#DEDEDE] w-full h-full pl-12 py-4 rounded-xl outline-none font-medium text-thirdColor" 
                            placeholder="Search" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Search on Enter key press
                        />
                        <IoSearch 
                            className='absolute left-4 text-mainColor font-bold text-2xl cursor-pointer' 
                            onClick={handleSearch} // Search on icon click
                        />
                    </div>
                    <Link to="profile" className='w-2/6 mr-10 hidden lg:flex'>
                        <div className='flex justify-end gap-2 w-full items-center relative'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6851 7.89474C20.6851 10.598 18.4937 12.7895 15.7904 12.7895V14.7895C19.5983 14.7895 22.6851 11.7026 22.6851 7.89474H20.6851ZM15.7904 12.7895C13.0871 12.7895 10.8957 10.598 10.8957 7.89474H8.89566C8.89566 11.7026 11.9825 14.7895 15.7904 14.7895V12.7895ZM10.8957 7.89474C10.8957 5.19145 13.0871 3 15.7904 3V1C11.9825 1 8.89566 4.08688 8.89566 7.89474H10.8957ZM15.7904 3C18.4937 3 20.6851 5.19145 20.6851 7.89474H22.6851C22.6851 4.08688 19.5983 1 15.7904 1V3ZM11.3693 19.2105H20.2115V17.2105H11.3693V19.2105ZM20.2115 29H11.3693V31H20.2115V29ZM11.3693 29C8.66606 29 6.47461 26.8085 6.47461 24.1053H4.47461C4.47461 27.9131 7.56149 31 11.3693 31V29ZM25.1062 24.1053C25.1062 26.8085 22.9147 29 20.2115 29V31C24.0193 31 27.1062 27.9131 27.1062 24.1053H25.1062ZM20.2115 19.2105C22.9147 19.2105 25.1062 21.402 25.1062 24.1053H27.1062C27.1062 20.2974 24.0193 17.2105 20.2115 17.2105V19.2105ZM11.3693 17.2105C7.56149 17.2105 4.47461 20.2974 4.47461 24.1053H6.47461C6.47461 21.402 8.66606 19.2105 11.3693 19.2105V17.2105Z" fill="#3F4CD0"/>
                        </svg>
                            <span className="text-mainColor text-2xl font-medium">Profile</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
