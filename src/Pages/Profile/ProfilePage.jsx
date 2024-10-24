// import React from 'react'

// const ProfilePage = () => {
//        return (
//               <>
//               <h1>ProfilePage</h1>
//               </>
//        )
// }

// export default ProfilePage
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth'; // Assuming you're using useAuth for auth context
import InputCustom from '../../Components/InputCustom';
import { useNavigate ,Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md'; // Edit icon
import { Button } from '../../Components/Button';

const ProfilePage = () => {
  // State for storing the specific user's data
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = useAuth();

  // Function to fetch admin data
  const fetchData = async () => {
    setIsLoading(true);
    try {
           const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
                  headers: {
                         Authorization: `Bearer ${auth.user.token}`,
                  },
           });
           console.log(response)

           if (response.status === 200) {
              const allUsers = response.data.admins;
              // Search for the logged-in user's data
              const currentUserData = allUsers.find(u => u.id === auth.user.data.id);
              if (currentUserData) {
                setUserData(currentUserData);
              } else {
                setError("User data not found");
              }
           }
    } catch (error) {
           console.error('Error fetching data:', error);
    } finally {
           setIsLoading(false);
    }
    };

    useEffect(() => {
        fetchData(); 
    }, []);


  if (isLoading) {
    return (
      <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
        <Loading />
      </div>
    );
}    
  
if (!userData) {
    return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Admin data available</div>;
}
  return (
    <form className="w-full flex flex-col items-center justify-center gap-y-10 p-4">
        {/* <div className="w-full flex justify-center"> */}
        <div className='w-72 h-72 flex justify-center relative rounded-full border-4 border-mainColor'>
            <img
                src={`data:image/jpeg;base64,${userData.image}`}// Use a real image URL or state
                alt="ProfileImage"
                className="w-full rounded-full"
                />
            <Link to={`/dashboard/supervisors/edit/${userData.id}`} state={userData.id} type="button">
                <button className="bg-mainColor p-2 rounded-full absolute flex items-center bottom-6 right-3 hover:bg-gray-300">
                    <MdModeEdit size={25} />
                </button>
            </Link>
            </div>
        {/* </div>   */}
        <div className="w-full flex flex-wrap items-center justify-start gap-10">
            <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 sm:w-full">
                    <InputCustom
                        type="text"
                        placeholder="Name"
                        borderColor="mainColor"
                        value={userData.name}
                        readonly="true"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full">
                    <InputCustom
                        type="email"
                        placeholder="Email"
                        borderColor="mainColor"
                        value={userData.email}
                        readonly="true"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 sm:w-full">
                <InputCustom
                        type="text"
                        placeholder="Phone"
                        borderColor="mainColor"
                        value={userData.phone}
                        readonly="true"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full">
                    <InputCustom
                        type="text"
                        placeholder="Position"
                        borderColor="mainColor"
                        value={userData.admin_position.name}
                        readonly="true"
                    />
                </div>
            </div>
             <div className="w-full flex items-center justify-center">
             <Link to={`/dashboard/supervisors/edit/${userData.id}`} state={userData.id} type="button">
                      <div className="flex items-center justify-center w-full lg:w-96 md:w-96 ">
                          <Button
                              Text="Edit Profile"
                              BgColor="bg-mainColor"
                              Color="text-white"
                              Width="full"
                              Size="text-2xl"
                              px="px-14"
                              rounded="rounded-2xl"
                              stateLoding={isLoading}
                          />
                      </div>
                </Link>
                </div>
        </div>
    </form>
  );
};

export default ProfilePage;
