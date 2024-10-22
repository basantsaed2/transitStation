import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import {EditCarColorPage} from '../Pages/AllPages'
import { useNavigate ,useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const ColorDataContext = createContext();

const EditCarColorLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allColorData, setAllColorData] = useState([]);
       const [colorEdit, setColorEdit] = useState(null);
       const { colorId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/colors', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllColorData(response.data.colors)
                            }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
       fetchData(); }, []);

       useEffect(() => {
              if (allColorData.length > 0 && colorId) {
                     const filteredColor = allColorData.find(
                     (color) => color.id === parseInt(colorId)
                     );
                     setColorEdit(filteredColor);
              }
       }, [allColorData, colorId]);
       
       console.log('allColorData', allColorData); // Logging the whole array
       console.log('ColorEditData', colorEdit);

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Color" /> 
              <ColorDataContext.Provider value={colorEdit}>
                     <EditCarColorPage/>
              </ColorDataContext.Provider>
              </>
       )
}

export default EditCarColorLayout