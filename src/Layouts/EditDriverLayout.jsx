import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditDriverPage } from '../Pages/AllPages'
import { useNavigate ,useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const DriverDataContext = createContext();

const EditDriversLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allDriversData, setAllDriversData] = useState([]);
       const [driverEdit, setDriverEdit] = useState(null);
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
                                   setAllDriversData(response.data.drivers)
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
                     setDriverEdit(filteredDriver);
              }
       }, [allDriversData, driverId]);
       
       console.log('allDriversData', allDriversData); // Logging the whole array
       console.log('DriverEditData', driverEdit);

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Driver" /> 
              <DriverDataContext.Provider value={driverEdit}>
                     <EditDriverPage/>
              </DriverDataContext.Provider>
              </>
       )
}

export default EditDriversLayout