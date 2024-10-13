import React, { useEffect, useState ,useRef ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';
import { RevenueDataContext } from '../../Layouts/EditRevenueLayout';

const EditRevenuePage = () => {
       const revenueContent = useContext(RevenueDataContext);

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [revenueDate, setRevenueDate] = useState('');
    const [revenueTypeData, setRevenueTypeData] = useState([]);
    const [revenueAmount, setRevenueAmount] = useState('');

    const [selectType, setSelectType] = useState('Select Type');
    const [selectTypeId, setSelectTypeId] = useState([]);
    const [openSelectType, setOpenSelectType] = useState(false);

    const dropdownTypeRef = useRef();

    useEffect(() => {
       if (revenueContent) {
              setRevenueDate(revenueContent.date || '');
              setRevenueAmount(revenueContent.revenue_amount|| ''); 

              if (revenueContent.type_revenue_id) {
                setSelectType(revenueContent.type);
                setSelectTypeId(revenueContent.type_revenue_id);
             } else {
                setSelectType('Select Type');
                setSelectTypeId(null);
          }
       }
}, [revenueContent]);

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
                     setRevenueTypeData(response.data.key)
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
            
          if (!revenueTypeData) {
              return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Revenues data available</div>;
          }

   const handleSubmitEdit = async (revenueId ,event) => {
       event.preventDefault();

       if (!revenueDate) {
           auth.toastError('Please Enter Revenue Date.');
           return;
       }
       if (!revenueAmount) {
           auth.toastError('Please Enter Revenue Amount.');
           return;
       }
       if (!selectTypeId) {
           auth.toastError('Please Select Revenue Type.');
           return;
       }

       const formData = new FormData();
       formData.append('date', revenueDate);
       formData.append('revenue_amount', revenueAmount);
       formData.append('type_revenue_id', selectTypeId);

       for (let pair of formData.entries()) {
              console.log(pair[0] + ', ' + pair[1]);
       }       
       console.log(revenueId) 

       setIsLoading(true);
       try {
           const response = await axios.put(`https://transitstation.online/api/admin/revenue/update/${revenueId}`,formData, {
               headers: {
                   Authorization: `Bearer ${auth.user.token}`,
                   'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
               },
           });

           if (response.status === 200) {
               auth.toastSuccess('Revenue Updated successfully!');
               handleGoBack();
           } else {
               auth.toastError('Failed to Updated Revenue.');
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
              <form onSubmit={(event) => handleSubmitEdit(revenueContent.revenue_id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
                  <div className="w-full flex flex-wrap items-center justify-start gap-10">
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="date"
                              placeholder="Date"
                              borderColor="mainColor"
                              value={revenueDate}
                              onChange={(e) => setRevenueDate(e.target.value)}
                          />
                      </div>

                      <div className="lg:w-[30%] sm:w-full">
                            <DropDownMenu
                            ref={dropdownTypeRef}
                            handleOpen={handleOpenSelectType}
                            handleOpenOption={handleSelectType}
                            stateoption={selectType}
                            openMenu={openSelectType}
                            options={revenueTypeData}
                            />
                     </div>
      
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Amount"
                              borderColor="mainColor"
                              value={revenueAmount}
                              onChange={(e) => setRevenueAmount(e.target.value)}
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

export default EditRevenuePage
