import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditParkingPage} from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const ParkingDataContext = createContext();

const EditParkingLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allParkingData, setAllParkingData] = useState([]);
       const [parkingEdit, setParkingEdit] = useState(null);
       const { parkingId } = useParams();

       useEffect(() => {
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
                                   setAllParkingData(response.data.data)
                            }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
                     fetchData(); 
                 }, []);
       
                 useEffect(() => {
                     if (allParkingData.length > 0 && parkingId) {
                       const filteredParking = allParkingData.find(
                         (parking) => parking.id === parseInt(parkingId)
                       );
                       setParkingEdit(filteredParking);
                     }
                   }, [allParkingData, parkingId]);
                 
                   console.log('allParkingData', allParkingData); // Logging the whole array
                   console.log('ParkingEditData', parkingEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };
       
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Parking" />
              <ParkingDataContext.Provider value={parkingEdit}>
                     <EditParkingPage/>
              </ParkingDataContext.Provider>
              </>
       )
}

export default EditParkingLayout
