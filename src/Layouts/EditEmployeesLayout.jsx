import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import {EditEmployeesPage} from '../Pages/AllPages'
import { useNavigate ,useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const EmployeeDataContext = createContext();

const EditEmployeesLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allEmployeeData, setAllEmployeeData] = useState([]);
       const [employeeEdit, setEmployeeEdit] = useState(null);
       const { employeeId } = useParams();

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
                                   setAllEmployeeData(response.data.admins)
                            }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
       fetchData(); }, []);

       useEffect(() => {
              if (allEmployeeData.length > 0 && employeeId) {
                     const filteredEmployee = allEmployeeData.find(
                     (employee) => employee.id === parseInt(employeeId)
                     );
                     setEmployeeEdit(filteredEmployee);
              }
       }, [allEmployeeData, employeeId]);
       
       console.log('allEmployeeData', allEmployeeData); // Logging the whole array
       console.log('EmployeeEditData', employeeEdit);

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Suprvisor" /> 
              <EmployeeDataContext.Provider value={employeeEdit}>
                     <EditEmployeesPage/>
              </EmployeeDataContext.Provider>
              </>
       )
}

export default EditEmployeesLayout
