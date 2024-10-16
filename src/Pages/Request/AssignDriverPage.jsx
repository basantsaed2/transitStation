import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import {Button} from '../../Components/Button'
import {ButtonAdd} from '../../Components/Button'
import { Link ,useNavigate} from 'react-router-dom';

const AssignDriverPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [drivers, setDrivers] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get('https://transitstation.online/api/admin/parkingdrivers', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setDrivers(response.data.drivers)
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
      
    if (!drivers) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Drivers data available</div>;
    }

       return (
              <>
                 <div className='w-full flex flex-wrap gap-10'>
                  {/* Location list */}
                  {drivers.map((driver) => (
                    <div key={driver.id} className='w-full lg:w-[45%] h-full lg:h-[200px]  p-4 pr-0 flex lg:flex-row sm:flex-col bg-gray-300 rounded-lg shadow-lg mb-4'>
                      <div className='w-1/6 sm:w-full p-2'>
                        <img src={driver.image} alt="" className='w-full h-full object-contain rounded-md'/>
                      </div>
                      <div className='w-5/6 sm:w-full p-4 text-black flex justify-between'>
                      <div>
                        <h1 className='text-xl font-semibold mb-1'> Name :{driver.name}</h1>
                        <h1 className='text-xl font-semibold mb-1'> Phone :{driver.phone}</h1>
                        <h1 className='text-xl font-semibold mb-1'> Email :{driver.email}</h1>
                        <h1 className='text-xl font-semibold mb-1'> Salary :{driver.salary}</h1>
                        {/* <p className='text-lg'>{location.address_in_detail}</p> */}
                      </div>
                      </div>
                    </div>
                  ))}
                 </div>  
              </>
       )
    }

export default AssignDriverPage
