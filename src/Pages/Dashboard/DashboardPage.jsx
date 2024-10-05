import React, { useEffect, useRef, useState } from 'react';
// import Loading from '../../../../Components/Loading';
import { useAuth } from '../../Context/Auth';
// import CartStudent from '../../../../Components/CartStudent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';


const DashboardPage = () => {
       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [parkingCount , setParkingCount] =useState('')
       const [pickupLocationCount , setPickupLocationCount] =useState('')
       const [subscriptionCount , setSubscriptionCount] =useState('')
       const [revenueAmount , setRevenueAmount] =useState('')
       const [expenceAmount , setExpenceAmount] =useState('')
       const [driverCount , setDriverCount] =useState('')


       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/home', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {
                            console.log(response.data)
                            setParkingCount(response.data[0].parkingCount)
                            setPickupLocationCount(response.data[0].PickupLocationCount)
                            setSubscriptionCount(response.data[0].SubscriptionCount)
                            setRevenueAmount(response.data[0].revenueAmount)
                            setExpenceAmount(response.data[0].expenceAmount)
                            setDriverCount(response.data[0].DriverCount)
                     }
              } catch (error) {
                     console.error('Error fetching student data:', error);
              } finally {
                     setIsLoading(false);
              }
       };

       useEffect(() => {
              fetchData(); // Fetch students initially and whenever studentsChanged changes
       }, []);

       return (
              <>
              <div className="w-full flex flex-wrap gap-5">
                     <Card name={"#Parking"} count={parkingCount} />
                     <Card name={"#Pick-up Location"} count={pickupLocationCount} />
                     <Card name={"#Subscriptions"} count={subscriptionCount} />
                     <Card name={"#Drivers"} count={driverCount} />
                     <Card name={"Revenue"} count={revenueAmount} />
                     <Card name={"Expenses"} count={expenceAmount} />
              </div>
              </>
       )
}

export default DashboardPage