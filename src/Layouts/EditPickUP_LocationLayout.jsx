import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditPickUP_LocationPage} from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const PickUP_LocationDataContext = createContext();

const EditPickUP_LocationLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allLocationData, setAllLocationData] = useState([]);
       const [locationEdit, setLocationEdit] = useState(null);
       const { locationId } = useParams();

       useEffect(() => {
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
                                   setAllLocationData(response.data.locations)
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
                     if (allLocationData.length > 0 && locationId) {
                       const filteredLocation = allLocationData.find(
                         (location) => location.id === parseInt(locationId)
                       );
                       setLocationEdit(filteredLocation);
                     }
                   }, [allLocationData, locationId]);
                 
                   console.log('allPickUP_LocationData', allLocationData); // Logging the whole array
                   console.log('PickUP_LocationEditData', locationEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Pick-up Location" />
              <PickUP_LocationDataContext.Provider value={locationEdit}>
                     <EditPickUP_LocationPage/>
              </PickUP_LocationDataContext.Provider>
              </>
       )
}

export default EditPickUP_LocationLayout
