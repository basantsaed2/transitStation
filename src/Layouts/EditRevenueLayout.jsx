import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditRevenuePage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const RevenueDataContext = createContext();

const EditRevenueLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allRevenueData, setAllRevenueData] = useState([]);
       const [revenueEdit, setRevenueEdit] = useState(null);
       const { revenueId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/revenue', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllRevenueData(response.data.revenues)
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
                     console.log(revenueId)
                     if (allRevenueData.length > 0 && revenueId) {
                       const filteredRevenue = allRevenueData.find(
                         (revenue) => revenue.revenue_id === parseInt(revenueId)
                       );
                       setRevenueEdit(filteredRevenue);
                     }
                   }, [allRevenueData, revenueId]);
                 
                   console.log('allRevenueData', allRevenueData); // Logging the whole array
                   console.log('RevenueEditData', revenueEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Revenue" />
              <RevenueDataContext.Provider value={revenueEdit}>
                     <EditRevenuePage/>
              </RevenueDataContext.Provider>
              </>
       )
}

export default EditRevenueLayout
