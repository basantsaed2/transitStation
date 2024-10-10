import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate,useParams } from 'react-router-dom';
import { EditUserPage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const UserDataContext = createContext();

const EditUserLayout = () => {
       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allUsersData, setAllUsersData] = useState([]);
       const [userEdit, setUserEdit] = useState(null);
       const { userId } = useParams();

       useEffect(() => {
       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/users', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {
                            console.log(response.data)
                            setAllUsersData(response.data.users)
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
              if (allUsersData.length > 0 && userId) {
                const filteredUser = allUsersData.find(
                  (user) => user.id === parseInt(userId)
                );
                setUserEdit(filteredUser);
              }
            }, [allUsersData, userId]);
          
            console.log('allUsersData', allUsersData); // Logging the whole array
            console.log('UserEditData', userEdit);

       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit User" />
              <UserDataContext.Provider value={userEdit}>
                     <EditUserPage/>
              </UserDataContext.Provider>
              </>
       )
}

export default EditUserLayout

