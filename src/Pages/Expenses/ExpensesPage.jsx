// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../Context/Auth';
// import Loading from '../../Components/Loading';
// import axios from 'axios';
// import {ButtonAdd} from '../../Components/Button'
// import { Link } from 'react-router-dom';
// import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

// const ExpensesPage = () => {
//     const auth = useAuth();
//     const [isLoading, setIsLoading] = useState(false);
//     const [expenses, setExpenses] = useState('');
//     const [totalAmount , setTotalAmount] =useState('')
//     const [expenseChanged, setExpenseChanged] = useState(false);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [openDialog, setOpenDialog] = useState(null);

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//                const response = await axios.get('https://transitstation.online/api/admin/expence', {
//                       headers: {
//                              Authorization: `Bearer ${auth.user.token}`,
//                       },
//                });
//                if (response.status === 200) {
//                       console.log(response.data)
//                       setExpenses(response.data.expences)
//                       setTotalAmount(response.data.expenceamount)
//                }
//         } catch (error) {
//                console.error('Error fetching data:', error);
//         } finally {
//                setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData(); 
//     }, [expenseChanged]);

//     const handleOpenDialog = (bundleId) => {
//        setOpenDialog(bundleId);
//        };

//        const handleCloseDialog = () => {
//               setOpenDialog(null);
//        };

//        const handleDelete = async (expenseId) => {
//               setIsDeleting(true);
//               const success = await deleteExpense(expenseId, auth.user.token);
//               setIsDeleting(false);
//               handleCloseDialog();

//               if (success) {
//                      setExpenseChanged(!expenseChanged)
//                      auth.toastSuccess('Expense deleted successfully!');
//                      setExpenses((prevexpense) =>
//                             prevexpense.filter((expense) => expense.id !== expenseId)
//                      );
//               } else {
//                      auth.toastError('Failed to delete Expense.');
//               }
//        };

//        const deleteExpense = async (expenseId, authToken) => {
//               try {
//                      const response = await axios.delete(`https://transitstation.online/api/admin/expence/destroy/${expenseId}`, {
//                             headers: {
//                                    Authorization: `Bearer ${authToken}`,
//                             },
//                      });

//                      if (response.status === 200) {
//                             console.log('Expense deleted successfully');
//                             return true;
//                      } else {
//                             console.error('Failed to delete Expense:', response.status, response.statusText);
//                             return false;
//                      }
//               } catch (error) {
//                      console.error('Error deleting Expense:', error);
//                      return false;
//               }
//        };


//     if (isLoading) {
//         return (
//           <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//             <Loading />
//           </div>
//         );
//     }    
      
//     if (!expenses) {
//         return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No expenses data available</div>;
//     }
  
//        return (
//             <>
//                 <div className="w-full">
//                     <div className="w-full flex flex-wrap items-center justify-start gap-10">
//                      <div className='lg:w-1/6'>
//                      <Link to={'add'}>
//                             <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
//                      </Link>
//                      </div>
//                         <div>
//                           <h1 className='font-semibold text-xl text-mainColor '>Total : {totalAmount}</h1>
//                         </div>
//                     </div>

//                     <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
//                         <table className="w-full sm:min-w-0">
//                             <thead className="w-full">
//                                 <tr className="w-full border-b-2">
//                                     <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
//                                     <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Date</th>
//                                     <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Type</th>
//                                     <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Amount</th>
//                                     <th className="min-w-[100px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="w-full">
//                                     {expenses.map((expense, index) => (

//                                         <tr className="w-full border-b-2" key={expense.id}>
//                                                 <td
//                                                         className="min-w-[80px] sm:min-w-[50px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
//                                                 >
//                                                         {index + 1}
//                                                 </td>
//                                                 <td
//                                                         className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
//                                                 >
//                                                         {expense?.date || 'Null'}
//                                                 </td>
//                                                 <td
//                                                         className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
//                                                 >
//                                                         {expense?.type || 'Null'}
//                                                 </td>      
//                                                 <td
//                                                         className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
//                                                 >
//                                                         {expense?.expence_amount || 'Null'}
//                                                 </td>
//                                                  <td
//                                                         className="min-w-[100px] sm:min-w-[80px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
//                                                 >
//                                                         <div className="flex items-center justify-center gap-x-3">
//                                                         <Link to={`edit/${expense.id}`} state={expense.id} type="button">
//                                                                 <EditIcon />
//                                                         </Link>
//                                                         <button type="button" onClick={() => handleOpenDialog(expense.id)}>
//                                                                 <DeleteIcon />
//                                                         </button>
//                                                         {openDialog === expense.id && (
//                                                                 <Dialog open={true} onClose={handleCloseDialog} className="relative z-10">
//                                                                         <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                                                                         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                                                                                 <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                                                                                         <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
//                                                                                         <div className="flex flex-col items-center justify-center bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                                                                                                 <Wroning Width='28' Height='28' aria-hidden="true" />
//                                                                                                 <div className="flex items-center">
//                                                                                                         <div className="mt-2 text-center">
//                                                                                                                 <DialogTitle as="h3" className="text-xl font-semibold leading-10 text-gray-900">
//                                                                                                                         You will delete expense {index + 1|| "null"}
//                                                                                                                 </DialogTitle>
//                                                                                                         </div>
//                                                                                                 </div>
//                                                                                         </div>
//                                                                                         <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                                                                                                 <button
//                                                                                                         type="button"
//                                                                                                         onClick={() => handleDelete(expense.id)}
//                                                                                                         disabled={isDeleting}
//                                                                                                         className="inline-flex w-full justify-center rounded-md bg-mainColor px-6 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
//                                                                                                 >
//                                                                                                         {isDeleting ? <div className="flex w-10 h-5"><Loading /></div> : 'Delete'}
//                                                                                                 </button>
//                                                                                                 <button
//                                                                                                         type="button"
//                                                                                                         data-autofocus
//                                                                                                         onClick={handleCloseDialog}
//                                                                                                         className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
//                                                                                                 >
//                                                                                                         Cancel
//                                                                                                 </button>
//                                                                                         </div>
//                                                                                         </DialogPanel>
//                                                                                 </div>
//                                                                         </div>
//                                                                 </Dialog>
//                                                         )}
//                                                         </div>
//                                                 </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>


//                 </div>  
//             </>
//        )
// }

// export default ExpensesPage


import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import { ButtonAdd } from '../../Components/Button';
import { Link } from 'react-router-dom';
import { Wroning, DeleteIcon, EditIcon } from '../../Components/Icons/All_Icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const ExpensesPage = () => {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [expenseChanged, setExpenseChanged] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [openDialog, setOpenDialog] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://transitstation.online/api/admin/expence', {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });
            if (response.status === 200) {
                console.log(response.data);
                setExpenses(response.data.expences);
                setTotalAmount(response.data.expenceamount);
                setFilteredExpenses(response.data.expences); // Initialize filtered expenses
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [expenseChanged]);

    const handleFilter = () => {
        if (startDate && endDate) {
            const filtered = expenses.filter(expense => {
                const expenseDate = new Date(expense.date);
                return expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate);
            });
            setFilteredExpenses(filtered);
            const total = filtered.reduce((acc, expense) => acc + expense.expence_amount, 0);
            setTotalAmount(total);
        } else {
            // If no filter is set, show all revenues and calculate the total
            setFilteredExpenses(expenses);
            const total = expenses.reduce((acc, expense) => acc + expense.expence_amount, 0);
            setTotalAmount(total);
        }
    };

    const handleOpenDialog = (expenseId) => {
        setOpenDialog(expenseId);
    };

    const handleCloseDialog = () => {
        setOpenDialog(null);
    };

    const handleDelete = async (expenseId) => {
        setIsDeleting(true);
        const success = await deleteExpense(expenseId, auth.user.token);
        setIsDeleting(false);
        handleCloseDialog();

        if (success) {
            setExpenseChanged(!expenseChanged);
            auth.toastSuccess('Expense deleted successfully!');
            setExpenses((prevexpense) =>
                prevexpense.filter((expense) => expense.id !== expenseId)
            );
            setFilteredExpenses((prevexpense) =>
                prevexpense.filter((expense) => expense.id !== expenseId)
            );
        } else {
            auth.toastError('Failed to delete Expense.');
        }
    };

    const deleteExpense = async (expenseId, authToken) => {
        try {
            const response = await axios.delete(`https://transitstation.online/api/admin/expence/destroy/${expenseId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (response.status === 200) {
                console.log('Expense deleted successfully');
                return true;
            } else {
                console.error('Failed to delete Expense:', response.status, response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Error deleting Expense:', error);
            return false;
        }
    };

    if (isLoading) {
        return (
            <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                <Loading />
            </div>
        );
    }

    if (!filteredExpenses.length) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No expenses data available</div>;
    }

    return (
        <>
            <div className="w-full">
                <div className="w-full flex flex-wrap items-center justify-start gap-10">
                    <div className='lg:w-1/6'>
                        <Link to={'add'}>
                            <ButtonAdd isWidth="true" BgColor="mainColor" Color="white" iconColor="white" />
                        </Link>
                    </div>
                     {/* Date Filter Inputs */}
                <div className="flex items-center gap-4 mt-4">
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        className="border border-gray-300 rounded p-2"
                    />
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        className="border border-gray-300 rounded p-2"
                    />
                    <button 
                        onClick={handleFilter} 
                        className="bg-mainColor text-white px-4 py-2 rounded"
                    >
                        Filter
                    </button>
                    <div>
                        <h1 className='font-semibold text-xl text-mainColor'>Total: {totalAmount}</h1>
                    </div>
                </div>
                </div>

                <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
                    <table className="w-full sm:min-w-0">
                        <thead className="w-full">
                            <tr className="w-full border-b-2">
                                <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
                                <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Date</th>
                                <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Type</th>
                                <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Amount</th>
                                <th className="min-w-[100px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {filteredExpenses.map((expense, index) => (
                                <tr className="w-full border-b-2" key={expense.id}>
                                    <td className="min-w-[80px] sm:min-w-[50px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden">
                                        {index + 1}
                                    </td>
                                    <td className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden">
                                        {expense?.date || 'Null'}
                                    </td>
                                    <td className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden">
                                        {expense?.type || 'Null'}
                                    </td>
                                    <td className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden">
                                        {expense?.expence_amount || 'Null'}
                                    </td>
                                    <td className="min-w-[100px] sm:min-w-[80px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden">
                                        <div className="flex items-center justify-center gap-x-3">
                                            <Link to={`edit/${expense.id}`} state={expense.id} type="button">
                                                <EditIcon />
                                            </Link>
                                            <button type="button" onClick={() => handleOpenDialog(expense.id)}>
                                                <DeleteIcon />
                                            </button>
                                            {openDialog === expense.id && (
                                            <Dialog open={true} onClose={handleCloseDialog} className="relative z-10">
                                                    <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                                                                    <div className="flex flex-col items-center justify-center bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                                            <Wroning Width='28' Height='28' aria-hidden="true" />
                                                                            <div className="flex items-center">
                                                                                    <div className="mt-2 text-center">
                                                                                            <DialogTitle as="h3" className="text-xl font-semibold leading-10 text-gray-900">
                                                                                                    You will delete expense type {expense.type|| "null"}
                                                                                            </DialogTitle>
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                    <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                            <button
                                                                                    type="button"
                                                                                    onClick={() => handleDelete(expense.id)}
                                                                                    disabled={isDeleting}
                                                                                    className="inline-flex w-full justify-center rounded-md bg-mainColor px-6 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                                                                            >
                                                                                    {isDeleting ? <div className="flex w-10 h-5"><Loading /></div> : 'Delete'}
                                                                            </button>
                                                                            <button
                                                                                    type="button"
                                                                                    data-autofocus
                                                                                    onClick={handleCloseDialog}
                                                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                                                                            >
                                                                                    Cancel
                                                                            </button>
                                                                    </div>
                                                                    </DialogPanel>
                                                            </div>
                                                    </div>
                                            </Dialog>
                                             )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ExpensesPage;
