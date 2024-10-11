import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import {ButtonAdd} from '../../Components/Button'
import { Link } from 'react-router-dom';

const PickUP_LocationPage = () => {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [pickUp_Locations, setPickUp_Locations] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get('https://transitstation.online/api/admin/locations', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setPickUp_Locations(response.data.locations)
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
      
    if (!pickUp_Locations) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No PiclUp Location data available</div>;
    }

       return (
            <>
            <div className='w-full flex flex-col gap-5'>
                <Link to="addpickUp_location">
                    <div className='w-2/6 lg:w-1/6'>
                        <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
                    </div>
                </Link>
            <div className='w-full flex justify-center flex-wrap gap-10'>
                {pickUp_Locations.map((location) => (
                    <div key={location.id} className='w-full lg:w-[45%] p-4 flex bg-[#FFF979] rounded-lg shadow-lg mb-4'>
                    <div className='w-1/3 p-2'>
                        <img src={location.location_image} alt="" className='w-full h-auto rounded-md'/>
                    </div>
                    <div className='w-2/3 p-2 text-black'>
                        <h1 className='text-xl font-semibold mb-1'>{location.address}</h1>
                        <p className='text-sm'>{location.address_in_detail}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </>
       )
}

export default PickUP_LocationPage
