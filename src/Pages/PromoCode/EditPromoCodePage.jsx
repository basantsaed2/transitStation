import React, { useEffect,useRef, useState ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';
import { PromoCodeContext } from '../../Layouts/EditPromoCodeLayout';

const EditPromoCodePage =()=>{
    const promoCodeContent = useContext(PromoCodeContext);

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [code , setCode]=useState('')
    const [value,setValue]=useState('')
    const [startDate , setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [limit,setLimit]=useState('')

    const [planData ,setPlanData] =useState([])
    const [selectPlan, setSelectPlan] = useState('Select Plan');
    const [selectPlanId, setSelectPlanId] = useState([]);
    const [openSelectPlan, setOpenSelectPlan] = useState(false);

    const [valueType, setValueType] = useState([{ name: 'percentage' }, { name: 'fixed' }]);
    const [selectValueType, setSelectValueType] = useState('Select ValueType');
    const [selectValueTypeName, setSelectValueTypeName] = useState(null);
    const [openSelectValueType, setOpenSelectValueType] = useState(false);
  
    const dropdownValueTypeRef = useRef();
    const dropdownPlanRef =useRef();

    useEffect(() => {
        if (promoCodeContent) {
               setCode(promoCodeContent.code|| '')
               setStartDate(promoCodeContent.valid_from|| '')
               setEndDate(promoCodeContent.valid_to|| '')
               setLimit(promoCodeContent.usage_limit|| '')

               if (promoCodeContent.offer_id) {
                setSelectPlan(promoCodeContent?.offer?.offer_name);
                setSelectPlanId(promoCodeContent.offer_id);
                } else {
                    setSelectPlan('Select Plan');
                    setSelectPlanId(null);
                }

                // if (promoCodeContent.discount_type) {
                // setSelectPlan(promoCodeContent?.offer?.discount_type);
                // setSelectPlanId(promoCodeContent.offer_id);
                // } else {
                //     setSelectPlan('Select ValueType');
                //     setSelectPlanId(null);
                // }
        }
    }, [promoCodeContent]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get('https://transitstation.online/api/admin/plan', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setPlanData(response.data.plans)
               }
        } catch (error) {
               console.error('Error fetching data:', error);
        } finally {
               setIsLoading(false);
        }
    };

    
    useEffect(() => {
        fetchData(); 
    }, []);
 
     const handleOpenSelectPlan = () => {
        setOpenSelectPlan(!openSelectPlan);
        setOpenSelectValueType(false)
      };

    const handleOpenValueType = () => {
        setOpenSelectValueType(!openSelectValueType);
        setOpenSelectPlan(false)
      };
   
 
     const handleSelectPlan = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectPlan(selectedOptionName);
        setSelectPlanId(parseInt(selectedOptionValue));
        setOpenSelectPlan(false);
        console.log('Selected Plan:', selectedOptionName);
        console.log('Plan ID:', selectedOptionValue);
      };

    const handleSelectValueType = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectValueType(selectedOptionName);
        setSelectValueTypeName(selectedOptionValue)
        setOpenSelectValueType(false);
        console.log('Selected ValueType:', selectedOptionName);
      };

 
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      const handleClickOutside = (event) => {
        if (dropdownPlanRef.current && !dropdownPlanRef.current.contains(event.target) &&
            dropdownValueTypeRef.current && !dropdownValueTypeRef.current.contains(event.target)   
        ) {
            setOpenSelectPlan(false); 
            setOpenSelectValueType(false)
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
 
    const handleSubmitEdit = async (codeId , event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!code) {
            auth.toastError('Please Enter Code.');
            return;
        } 
        if (!startDate) {
            auth.toastError('Please Enter Vaild From.');
            return;
        }
        if (!endDate) {
            auth.toastError('Please Enter Vaild To.');
            return;
        }
        if (!limit) {
            auth.toastError('Please Enter Usage Limit.');
            return;
        }
        if (!selectPlanId) {
            auth.toastError('Please Select Plan.');
            return;
        }
        // if (selectValueTypeName) {
        //       auth.toastError('Please Select Value Type.');
        // }
        if (!value) {
            auth.toastError('Please Enter Value.');
            return;
        }
        
      
        const formData = new FormData();
        formData.append('code', code);
        formData.append('discount_type', selectValueType);
        formData.append('discount_amount', value);
        formData.append('valid_from', startDate);
        formData.append('valid_to', endDate);
        formData.append('offer_id', selectPlanId);
        formData.append('usage_limit', limit);


        for (let pair of formData.entries()) {
               console.log(pair[0] + ', ' + pair[1]);
        }        
 
        setIsLoading(true);
        try {
            const response = await axios.put(`https://transitstation.online/api/admin/promocode/update/${codeId}`,formData, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                    'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                },
            });
 
            if (response.status === 200) {
                auth.toastSuccess('PromoCode updated successfully!');
                handleGoBack();
            } else {
                auth.toastError('Failed to updated PromoCode.');
            }
        } catch (error) {    
            console.log(error)
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
    return(
        <>
        <form onSubmit={(event) => handleSubmitEdit(promoCodeContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
                 <div className="w-full flex flex-wrap items-center justify-start gap-10">
                     <div className="lg:w-[30%] sm:w-full">
                         <InputCustom
                             type="text"
                             placeholder="Code"
                             borderColor="mainColor"
                             value={code}
                             onChange={(e) => setCode(e.target.value)}
                         />
                     </div>
                     <div className="lg:w-[30%] sm:w-full">
                         <InputCustom
                             type="Date"
                             placeholder="Vaild From"
                             borderColor="mainColor"
                             value={startDate}
                             onChange={(e) => setStartDate(e.target.value)}
                         />
                     </div>
                     <div className="lg:w-[30%] sm:w-full">
                         <InputCustom
                             type="Date"
                             placeholder="Vaild To"
                             borderColor="mainColor"
                             value={endDate}
                             onChange={(e) => setEndDate(e.target.value)}
                         />
                     </div>
                     <div className="lg:w-[30%] sm:w-full">
                         <InputCustom
                             type="number"
                             placeholder="Usage Limit"
                             borderColor="mainColor"
                             value={limit}
                             onChange={(e) => setLimit(e.target.value)}
                         />
                     </div>
                     <div className="lg:w-[30%] sm:w-full">
                           <DropDownMenu
                           ref={dropdownPlanRef}
                           handleOpen={handleOpenSelectPlan}
                           handleOpenOption={handleSelectPlan}
                           stateoption={selectPlan}
                           openMenu={openSelectPlan}
                           options={planData}
                           />
                    </div>
                     <div className="lg:w-[30%] sm:w-full">
                           <DropDownMenu
                           ref={dropdownValueTypeRef}
                           handleOpen={handleOpenValueType}
                           handleOpenOption={handleSelectValueType}
                           stateoption={selectValueType}
                           openMenu={openSelectValueType}
                           options={valueType}
                           />
                       </div> 
                       {selectValueType === 'fixed' && (
                           <div className="lg:w-[30%] sm:w-full">
                           <InputCustom
                               placeholder="Value"
                               borderColor="mainColor"
                               value={value}
                               onChange={(e) => setValue(e.target.value)}
                           />
                           </div>
                       )}

                       {selectValueType === 'percentage' && (
                           <div className="lg:w-[30%] sm:w-full">
                           <InputCustom
                               placeholder="Percentage Value"
                               borderColor="mainColor"
                               value={value}
                               onChange={(e) => setValue(e.target.value)}
                           />
                           </div>
                       )}
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

export default EditPromoCodePage;