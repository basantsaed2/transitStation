import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate ,useParams} from 'react-router-dom';
import { EditRequestPage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const RequestDataContext = createContext();

const EditRequestLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allRequestsData, setAllRequestsData] = useState([]);
       const [requestEdit, setRequestEdit] = useState(null);
       const { requestId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/request', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllRequestsData(response.data)
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
       if (allRequestsData.length > 0 && requestId) {
              const filteredRequest = allRequestsData.find(
              (request) => request.id === parseInt(requestId)
              );
              setRequestEdit(filteredRequest);
       }
       }, [allRequestsData, requestId]);
       
       console.log('allRequestData', allRequestsData); // Logging the whole array
       console.log('RequestEditData', requestEdit);

       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Request" />
              <RequestDataContext.Provider value={requestEdit}>
                     <EditRequestPage/>
              </RequestDataContext.Provider>
              </>
       )
}

export default EditRequestLayout



