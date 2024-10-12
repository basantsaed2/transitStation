import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { DriverProfilePage } from '../Pages/AllPages'
import { useNavigate ,useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const DriverProfileDataContext = createContext();

const DriverProfileLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allDriversData, setAllDriversData] = useState([]);
       const [driverProfile, setDriverProfile] = useState(null);
       const { driverId } = useParams();

       useEffect(() => {
        const fetchData = async () => {
               setIsLoading(true);
               try {
                      const response = await axios.get('https://transitstation.online/api/admin/drivers', {
                             headers: {
                                    Authorization: `Bearer ${auth.user.token}`,
                             },
                      });
                      if (response.status === 200) {
                             console.log(response.data)
                             setAllDriversData(response.data)
                      }
               } catch (error) {
                      console.error('Error fetching data:', error);
               } finally {
                      setIsLoading(false);
               }
           };
        fetchData(); }, []);

        useEffect(() => {
                if (allDriversData.length > 0 && driverId) {
                    const filteredDriver = allDriversData.find(
                    (driver) => driver.id === parseInt(driverId)
                    );
                    setDriverProfile(filteredDriver);
                }
        }, [allDriversData, driverId]);
        
        console.log('allDriversData', allDriversData);
        console.log('DriverProfileData', driverProfile);

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Profile Driver" /> 
              <DriverProfileDataContext.Provider value={driverProfile}>
                     <DriverProfilePage/>
              </DriverProfileDataContext.Provider>
              </>
       )
}

export default DriverProfileLayout
