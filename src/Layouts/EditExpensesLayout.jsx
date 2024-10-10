import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditExpensesPage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const ExpensesDataContext = createContext();

const EditExpensesLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allExpensesData, setAllExpensesData] = useState([]);
       const [expensesEdit, setExpensesEdit] = useState(null);
       const { expenseId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/expence', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllExpensesData(response.data.expences)
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
                     if (allExpensesData.length > 0 && expenseId) {
                       const filteredExpenses = allExpensesData.find(
                         (expence) => expence.id === parseInt(expenseId)
                       );
                       setExpensesEdit(filteredExpenses);
                     }
                   }, [allExpensesData, expenseId]);
                 
                   console.log('allExpensesData', allExpensesData); // Logging the whole array
                   console.log('ExpensesEditData', expensesEdit);

                   const navigate = useNavigate();
                   const handleGoBack = () => {
                   navigate(-1, { replace: true });
                   };
       
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Expenses" />
              <ExpensesDataContext.Provider value={expensesEdit}>
                     <EditExpensesPage/>
              </ExpensesDataContext.Provider>
              </>
       )
}

export default EditExpensesLayout