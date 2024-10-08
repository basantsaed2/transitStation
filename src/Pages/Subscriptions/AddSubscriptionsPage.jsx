import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AddSubscriptionsPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data,setData] =useState('');
    const [userData, setrUserData] = useState('');
    const [offerData, setOfferData] = useState([]);

    const [startDate , setStartDate] =useState('')
    const [endDate , setEndDate] =useState('')
    const [amount , setAmount] =useState('')

    const [selectUser, setSelectUser] = useState('Select User');
    const [selectUserId, setSelectUserId] = useState([]);
    const [openSelectUser, setOpenSelectUser] = useState(false);

    const [selectOffer, setSelectOffer] = useState('Select Plan');
    const [selectOfferId, setSelectOfferId] = useState([]);
    const [openSelectOffer, setOpenSelectOffer] = useState(false);

    const dropdownUserRef = useRef();
    const dropdownOfferRef = useRef();

    const fetchData = async () => {
       setIsLoading(true);
       try {
              const response = await axios.get('https://transitstation.online/api/admin/offer/dropdown', {
                     headers: {
                            Authorization: `Bearer ${auth.user.token}`,
                     },
              });
              if (response.status === 200) {                           
                     console.log(response.data)
                     setData(response.data)
                     setOfferData(response.data.offers)
                     setrUserData(response.data.users)
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

    const handleOpenSelectOffer = () => {
       setOpenSelectUser(false);
       setOpenSelectOffer(!openSelectOffer)
     };

     const handleOpenSelectUser = () => {
       setOpenSelectUser(!openSelectUser);
       setOpenSelectOffer(false)
     };

    const handleSelectOffer = (e) => {
       const inputElement = e.currentTarget.querySelector('.inputVal');
       const selectedOptionName = e.currentTarget.textContent.trim();
       const selectedOptionValue = inputElement ? inputElement.value : null;
       setSelectOffer(selectedOptionName);
       setSelectOfferId(parseInt(selectedOptionValue));
       setOpenSelectOffer(false);
       console.log('Selected Offer:', selectedOptionName);
       console.log('Offer ID:', selectedOptionValue);
     };

     const handleSelectUser = (e) => {
       const inputElement = e.currentTarget.querySelector('.inputVal');
       const selectedOptionName = e.currentTarget.textContent.trim();
       const selectedOptionValue = inputElement ? inputElement.value : null;
       setSelectUser(selectedOptionName);
       setSelectUserId(parseInt(selectedOptionValue));
       setOpenSelectUser(false);
       console.log('Selected User:', selectedOptionName);
       console.log('User ID:', selectedOptionValue);
     };

     useEffect(() => {
       document.addEventListener('mousedown', handleClickOutside);
       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };
     }, []);
   
     const handleClickOutside = (event) => {
       if (dropdownOfferRef.current && !dropdownOfferRef.current.contains(event.target) &&
           dropdownUserRef.current && !dropdownUserRef.current.contains(event.target))
        {
          setOpenSelectOffer(false);   
          setOpenSelectUser(false);   
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
            
          if (!data) {
              return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Revenues data available</div>;
          }

   const handleSubmitAdd = async (event) => {
       event.preventDefault();

       if (!startDate) {
           auth.toastError('Please Enter Start Date.');
           return;
       }
       if (!endDate) {
           auth.toastError('Please Enter End Date.');
           return;
       }
       if (!amount) {
           auth.toastError('Please Enter Amount.');
           return;
       }
       if (!selectUserId) {
              auth.toastError('Please Select User.');
              return;
       }
       if (!selectOfferId) {
       auth.toastError('Please Select Offer.');
       return;
       }

       const formData = new FormData();
       formData.append('user_id', selectUserId);
       formData.append('offer_id', selectOfferId);
       formData.append('amount', amount);
       formData.append('start_date', startDate);
       formData.append('end_date', endDate);

       for (let pair of formData.entries()) {
              console.log(pair[0] + ', ' + pair[1]);
       }        

       setIsLoading(true);
       try {
           const response = await axios.post('https://transitstation.online/api/admin/subscription/add',formData, {
               headers: {
                   Authorization: `Bearer ${auth.user.token}`,
                   'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
               },
           });

           if (response.status === 200) {
               auth.toastSuccess('Subscriptionnue added successfully!');
               handleGoBack();
           } else {
               auth.toastError('Failed to add Subscription.');
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
                            <DropDownMenu
                            ref={dropdownUserRef}
                            handleOpen={handleOpenSelectUser}
                            handleOpenOption={handleSelectUser}
                            stateoption={selectUser}
                            openMenu={openSelectUser}
                            options={userData}
                            />
                     </div>
                     <div className="lg:w-[35%] sm:w-full">
                            <DropDownMenu
                            ref={dropdownOfferRef}
                            handleOpen={handleOpenSelectOffer}
                            handleOpenOption={handleSelectOffer}
                            stateoption={selectOffer}
                            openMenu={openSelectOffer}
                            options={offerData}
                            />
                     </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="date"
                              placeholder="Start_Date"
                              borderColor="mainColor"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="date"
                              placeholder="End_Date"
                              borderColor="mainColor"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Amount"
                              borderColor="mainColor"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
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

export default AddSubscriptionsPage
