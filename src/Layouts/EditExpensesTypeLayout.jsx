import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditExpensesTypePage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const ExpensesTypeDataContext = createContext();

const  EditExpensesTypeLayout = () => {

    const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allExpensesTypeData, setAllExpensesTypeData] = useState([]);
       const [expensesTypeEdit, setExpensesTypeEdit] = useState(null);
       const { typeId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/expence/types', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllExpensesTypeData(response.data.key)
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
                     if (allExpensesTypeData.length > 0 && typeId) {
                       const filteredTypeExpenses = allExpensesTypeData.find(
                         (type) => type.id === parseInt(typeId)
                       );
                       setExpensesTypeEdit(filteredTypeExpenses);
                     }
                   }, [allExpensesTypeData, typeId]);
                 
                   console.log('allExpensesTypeData', allExpensesTypeData); // Logging the whole array
                   console.log('ExpensesTypeEditData', expensesTypeEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };
       
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Expenses Type" />
              <ExpensesTypeDataContext.Provider value={expensesTypeEdit}>
                     <EditExpensesTypePage/>
              </ExpensesTypeDataContext.Provider>
              </>
       )
}

export default EditExpensesTypeLayout
