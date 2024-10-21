import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import {EditPermissionPage} from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const PermissionDataContext = createContext();

const EditPermissionLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allpositionsData, setAllPositionsData] = useState([]);
       const [positionEdit, setPositionEdit] = useState(null);
       const { roleId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllPositionsData(response.data.admin_positions)
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
                     if (allpositionsData.length > 0 && roleId) {
                       const filteredRole = allpositionsData.find(
                         (role) => role.id === parseInt(roleId)
                       );
                       setPositionEdit(filteredRole);
                     }
                   }, [allpositionsData, roleId]);
                 
                   console.log('allPositionData', allpositionsData); // Logging the whole array
                   console.log('PositionEditData', positionEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Role" />
              <PermissionDataContext.Provider value={positionEdit}>
                     <EditPermissionPage/>
              </PermissionDataContext.Provider>
              </>
       )
}

export default EditPermissionLayout

