import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AddExpensesPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseTypeData, setExpenseTypeData] = useState([]);
    const [expenseAmount, setExpenseAmount] = useState('');

    const [selectType, setSelectType] = useState('Select Type');
    const [selectTypeId, setSelectTypeId] = useState([]);
    const [openSelectType, setOpenSelectType] = useState(false);

    const dropdownTypeRef = useRef();

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
                     setExpenseTypeData(response.data.key)
              }
       } catch (error) {
              console.error('Error fetching data:', error);
       } finally {
              setIsLoading(false);
       }
       };
    useEffect(()=>{
       fetchData()
    },[])

    const handleOpenSelectType = () => {
       setOpenSelectType(!openSelectType);
     };

    const handleSelectType = (e) => {
       const inputElement = e.currentTarget.querySelector('.inputVal');
       const selectedOptionName = e.currentTarget.textContent.trim();
       const selectedOptionValue = inputElement ? inputElement.value : null;
       setSelectType(selectedOptionName);
       setSelectTypeId(parseInt(selectedOptionValue));
       setOpenSelectType(false);
       console.log('Selected Type:', selectedOptionName);
       console.log('Type ID:', selectedOptionValue);
     };

     useEffect(() => {
       document.addEventListener('mousedown', handleClickOutside);
       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };
     }, []);
   
     const handleClickOutside = (event) => {
       if (dropdownTypeRef.current && !dropdownTypeRef.current.contains(event.target)  
       ) {
          setOpenSelectType(false);   
       }
     };

       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };

       if (isLoading) {
              return (
                <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                  <Loading />
                </div>
              );
          }    
            
          if (!expenseTypeData) {
              return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No expenses data available</div>;
          }

   const handleSubmitAdd = async (event) => {
       event.preventDefault();

       if (!expenseDate) {
           auth.toastError('Please Enter Expense Date.');
           return;
       }
       if (!expenseAmount) {
           auth.toastError('Please Enter Expense Amount.');
           return;
       }
       if (!selectTypeId) {
           auth.toastError('Please Select Expense Type.');
           return;
       }

       const formData = new FormData();
       formData.append('date', expenseDate);
       formData.append('expence_amount', expenseAmount);
       formData.append('type_expence_id', selectTypeId);

       for (let pair of formData.entries()) {
              console.log(pair[0] + ', ' + pair[1]);
       }        

       setIsLoading(true);
       try {
           const response = await axios.post('https://transitstation.online/api/admin/expence/add',formData, {
               headers: {
                   Authorization: `Bearer ${auth.user.token}`,
                   'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
               },
           });

           if (response.status === 200) {
               auth.toastSuccess('Expence added successfully!');
               handleGoBack();
           } else {
               auth.toastError('Failed to add Expence.');
           }
       } catch (error) {
           const errorMessages = error?.response?.data.errors;
           let errorMessageString = 'Error occurred';

           if (errorMessages) {
               errorMessageString = Object.values(errorMessages).flat().join(' ');
           }
           auth.toastError('Error', errorMessageString);
       } finally {
           setIsLoading(false);
       }
   };

       return (
              <>
              <form onSubmit={handleSubmitAdd} className="w-full flex flex-col items-center justify-center gap-y-10">
                  <div className="w-full flex flex-wrap items-center justify-start gap-10">
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="date"
                              placeholder="Date"
                              borderColor="mainColor"
                              value={expenseDate}
                              onChange={(e) => setExpenseDate(e.target.value)}
                          />
                      </div>

                      <div className="lg:w-[35%] sm:w-full">
                            <DropDownMenu
                            ref={dropdownTypeRef}
                            handleOpen={handleOpenSelectType}
                            handleOpenOption={handleSelectType}
                            stateoption={selectType}
                            openMenu={openSelectType}
                            options={expenseTypeData}
                            />
                     </div>
      
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Amount"
                              borderColor="mainColor"
                              value={expenseAmount}
                              onChange={(e) => setExpenseAmount(e.target.value)}
                          />
                      </div>
                  </div>
      
                  <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">
                      <div className="flex items-center justify-center w-72">
                          <Button
                              type="submit"
                              Text="Done"
                              BgColor="bg-mainColor"
                              Color="text-white"
                              Width="full"
                              Size="text-2xl"
                              px="px-28"
                              rounded="rounded-2xl"
                              stateLoding={isLoading}
                          />
                      </div>
                      <button onClick={handleGoBack} className="text-2xl text-mainColor">Cancel</button>
                  </div>
              </form>
              </>
       )
}

export default AddExpensesPage
