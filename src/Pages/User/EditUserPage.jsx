import React, { useEffect, useState ,useRef ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';
import { UserDataContext } from '../../Layouts/EditUserLayout';

const EditUserPage = () => {

       const userContent = useContext(UserDataContext);

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [planData ,setPlanData] =useState([])
       // const [users, setUsers] = useState('');
       const [userName , setUserName]=useState('')
       const [userEmail , setUserEmail]=useState('')
       const [userPassword,setUserPassword]=useState('')
       const [phone,setPhone]=useState('')
       const [startDate,setStartDate]=useState('')
       const [endDate,setEndDate]=useState('')
       const [amount,setAmount]=useState('')
       const [userImage, setUserImage] = useState('');

       const [selectPlan, setSelectPlan] = useState('Select Plan');
       const [selectPlanId, setSelectPlanId] = useState([]);
       const [openSelectPlan, setOpenSelectPlan] = useState(false);
       
       const dropdownPlanRef = useRef();
       const userImageRef = useRef();

       useEffect(() => {
              if (userContent) {
                     setUserName(userContent.user_name || '');
                     setUserEmail(userContent.user_email || '');
                     setPhone(userContent.phone || '')
                     setStartDate(userContent.start_date || '')
                     setEndDate(userContent.end_date || '')
                     setAmount(userContent.amount || '') 

                     // if (userContent.offer_id) {
                     //        setSelectPlan(userContent.offer.name);
                     //        setSelectPlanId(userContent.offer.id);
                     // } else {
                     //        setSelectPlan('Select Plan');
                     //        setSelectPlanId(null);
                     // }
              }
       }, [userContent]);

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
                            setPlanData(response.data.offers)
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

           const handleImageClick = () => {
              if (userImageRef.current) {
                  userImageRef.current.click(); // Trigger a click on the hidden file input
              }
          };
      
          const handleImageChange = (e) => {
              const file = e.target.files[0];
              if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                      setUserImage(reader.result); // Set the Base64 string of the image
                  };
                  reader.readAsDataURL(file); // Read the file as a data URL (Base64)
              }
          };          

       const handleOpenSelectPlan = () => {
              setOpenSelectPlan(!openSelectPlan);
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
       
            useEffect(() => {
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                document.removeEventListener('mousedown', handleClickOutside);
              };
            }, []);
          
            const handleClickOutside = (event) => {
              if (dropdownPlanRef.current && !dropdownPlanRef.current.contains(event.target)  
              ) {
                 setOpenSelectPlan(false);   
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
              
       
          const handleSubmitEdit = async (userId,event) => {
              event.preventDefault();
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
              if (!userName) {
                  auth.toastError('Please Enter User Name.');
                  return;
              }
              if (!phone) {
                  auth.toastError('Please Enter User Phone.');
                  return;
              }
              if (!userPassword) {
                  auth.toastError('Please Enter User Password.');
                  return;
              }
          if (!emailRegex.test(userEmail)) {
              auth.toastError('Please enter a valid email address.');
              return;
          }        
                // Check if password is less than 6 characters
          if (userPassword.length < 6) {
              auth.toastError('The password field must be at least 6 characters.');
              return;
          }
              if (!startDate) {
                  auth.toastError('Please Enter User Start Date.');
                  return;
              }
              if (!endDate) {
                  auth.toastError('Please Enter User End Date.');
                  return;
              }
              if (!amount) {
                  auth.toastError('Please Enter Amount.');
                  return;
              }
              if (!selectPlanId) {
                  auth.toastError('Please Select Plan.');
                  return;
              }
       
              const formData = new FormData();
              formData.append('name', userName);
              formData.append('image', userImage);
              formData.append('email', userEmail);
              formData.append('phone', phone);
              formData.append('password', userPassword);
              formData.append('offer_id', selectPlanId);
              formData.append('amount', amount);
              formData.append('start_date', startDate);
              formData.append('end_date', endDate);
       
              for (let pair of formData.entries()) {
                     console.log(pair[0] + ', ' + pair[1]);
              }        
       
              setIsLoading(true);
              try {
                  const response = await axios.put(`https://transitstation.online/api/admin/users/update/${userId}`,formData, {
                      headers: {
                          Authorization: `Bearer ${auth.user.token}`,
                          'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                      },
                  });
       
                  if (response.status === 200) {
                      auth.toastSuccess('User Updated successfully!');
                      handleGoBack();
                  } else {
                      auth.toastError('Failed to Updated User.');
                  }
              } catch (error) {
                  const errorMessages = error?.response?.data.errors;
                  let errorMessageString = 'Error occurred';
       
                  if (errorMessages) {
                      errorMessageString = Object.values(errorMessages).flat().join(' ');
                  }
              //     auth.toastError('Error', errorMessageString);
              } finally {
                  setIsLoading(false);
              }
          };

       return (
              <form onSubmit={(event) => handleSubmitEdit(userContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
              <div className="w-full flex flex-wrap items-center justify-start gap-10">
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="text"
                          placeholder="Name"
                          borderColor="mainColor"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                            <InputCustom
                            type="text"
                            placeholder="Image"
                            bgColor="bg-[#EEEEEE]"
                            upload="true"
                            placeholderColor="mainColor"
                            value={userImage}
                            readonly={true}
                            onClick={handleImageClick}
                            />
                            <input
                            type="file"
                            className="hidden"
                            accept="image/*" // Optional: to restrict file selection to images only
                            onChange={handleImageChange}
                            ref={userImageRef}
                            />
                     </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="text"
                          placeholder="Email"
                          borderColor="mainColor"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="password"
                          placeholder="Password"
                          borderColor="mainColor"
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="text"
                          placeholder="Phone"
                          borderColor="mainColor"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="date"
                          placeholder="start Date"
                          borderColor="mainColor"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="date"
                          placeholder="End Date"
                          borderColor="mainColor"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="text"
                          placeholder="Amount"
                          borderColor="mainColor"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
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
                          // stateLoding={isLoading}
                      />
                  </div>
                  <button onClick={handleGoBack} className="text-2xl text-mainColor">Cancel</button>
              </div>
             </form>
       )
}

export default EditUserPage
