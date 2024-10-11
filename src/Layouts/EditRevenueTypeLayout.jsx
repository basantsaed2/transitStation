import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditRevenueTypePage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const RevenueTypeDataContext = createContext();

const  EditRevenueTypeLayout = () => {

    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [allRevenueTypeData, setAllRevenueTypeData] = useState([]);
    const [revenueTypeEdit, setRevenueTypeEdit] = useState(null);
    const { typeId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
               setIsLoading(true);
               try {
                      const response = await axios.get('https://transitstation.online/api/admin/revenue/types', {
                             headers: {
                                    Authorization: `Bearer ${auth.user.token}`,
                             },
                      });
                      if (response.status === 200) {
                             console.log(response.data)
                             setAllRevenueTypeData(response.data.key)
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
               if (allRevenueTypeData.length > 0 && typeId) {
                 const filteredRevenueType = allRevenueTypeData.find(
                   (type) => type.id === parseInt(typeId)
                 );
                 setRevenueTypeEdit(filteredRevenueType);
               }
             }, [allRevenueTypeData, typeId]);
           
             console.log('allRevenueTypeData', allRevenueTypeData); // Logging the whole array
             console.log('RevenueTypeEdit', revenueTypeEdit);

             const navigate = useNavigate();
             const handleGoBack = () => {
             navigate(-1, { replace: true });
             };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Revenue Type" />
              <RevenueTypeDataContext.Provider value={revenueTypeEdit}>
                     <EditRevenueTypePage/>
              </RevenueTypeDataContext.Provider>
              </>
       )
}

export default EditRevenueTypeLayout
