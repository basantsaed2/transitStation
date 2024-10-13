import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
// import CartStudent from '../../../../Components/CartStudent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import {ButtonAdd} from '../../Components/Button'

const ParkingPage = () => {
       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [parking , setParking] =useState('')

       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/parking', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {
                            console.log(response.data)
                            setParking(response.data.data)
                     }
              } catch (error) {
                     console.error('Error fetching data:', error);
              } finally {
                     setIsLoading(false);
              }
       };

       useEffect(() => {
              fetchData(); // Fetch students initially and whenever studentsChanged changes
       }, []);

       if (isLoading) {
              return (
                <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                  <Loading />
                </div>
              );
            } 

        if (!parking) {
            return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No PiclUp Location data available</div>;
        }         

       return (
              <>
            <div className='w-full flex flex-col gap-5'>
                <Link to="add">
                    <div className='w-1/6'>
                        <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
                    </div>
                </Link>
                <div className="w-full flex flex-wrap gap-10 ml-5 mt-5">
                {parking.map((park) => (
                    <>
                    <Link to={`parkinglist/${park.id}`} state={park.id}>
                        <Card name={park.name} count={park.capacity} />
                    </Link>
                    </>
                ))}           
                </div>
            </div>
              </>
       )
}
export default ParkingPage