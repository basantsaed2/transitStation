import React, { useEffect, useState ,useRef ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

import { EmployeeDataContext } from '../../Layouts/EditEmployeesLayout';

const EditEmployeesPage = () => {

       const employeeContent = useContext(EmployeeDataContext);

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [positionData ,setPositionData] =useState([])
       const [userName , setUserName]=useState('')
       const [userEmail , setUserEmail]=useState('')
       const [userPassword,setUserPassword]=useState('')
       const [phone,setPhone]=useState('')
       const [userImage, setUserImage] = useState('');

       const [roles,setRoles]=useState([])
   
       const [selectPosition, setSelectPosition] = useState('Select Admin Position');
       const [selectPositionId, setSelectPositionId] = useState([]);
       const [openSelectPosition, setOpenSelectPosition] = useState(false);
       
       const dropdownPositionRef = useRef();
       const userImageRef = useRef();

       useEffect(() => {
              if (employeeContent) {
                     setUserName(employeeContent.name || '');
                     setUserEmail(employeeContent.email || '');
                     setUserPassword(employeeContent.password || '') 
                     setPhone(employeeContent.phone || '')

                     if (employeeContent.admin_position_id) {
                            setSelectPosition(employeeContent.admin_position?.name);
                            setSelectPositionId(employeeContent.admin_position_id);
                     } else {
                            setSelectPosition('Select Admin Position');
                            setSelectPositionId(null);
                     }
              }
       }, [employeeContent]);

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
                            setPositionData(response.data.admin_positions)
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
      
           const handleOpenSelectPosition = () => {
              setOpenSelectPosition(!openSelectPosition);
            };

            const handleSelectPosition = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value : null;
              setSelectPosition(selectedOptionName);
              setSelectPositionId(parseInt(selectedOptionValue));
              setOpenSelectPosition(false);
              // setRoles(e.role); // Set roles for the selected position
              console.log('Selected Position:', selectedOptionName);
              console.log('Position ID:', selectedOptionValue);
              // console.log('Position Roles:', e);
            };
       
            useEffect(() => {
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                document.removeEventListener('mousedown', handleClickOutside);
              };
            }, []);
          
            const handleClickOutside = (event) => {
                     if (dropdownPositionRef.current && !dropdownPositionRef.current.contains(event.target)  
                     ) {
                     setOpenSelectPosition(false);   
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
       
       const handleSubmitEdit = async (employeeId,event) => {
              event.preventDefault();
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
              if (!userName) {
                  auth.toastError('Please Enter Supervisor Name.');
                  return;
              }
              if (!phone) {
                  auth.toastError('Please Enter Supervisor Phone.');
                  return;
              }
              // if (!userPassword) {
              //     auth.toastError('Please Enter Supervisor Password.');
              //     return;
              // }
          if (!emailRegex.test(userEmail)) {
              auth.toastError('Please enter a valid email address.');
              return;
          }        
                // Check if password is less than 6 characters
       if(userPassword){
          if (userPassword.length < 6) {
              auth.toastError('The password field must be at least 6 characters.');
              return;
          }}
          if (!selectPositionId) {
              auth.toastError('Please Select Role Position.');
              return;
          }
       
              const formData = new FormData();
              formData.append('name', userName);
              formData.append('image', userImage);
              formData.append('email', userEmail);
              formData.append('phone', phone);
              formData.append('password', userPassword);
              formData.append('admin_position_id', selectPositionId);
       
              for (let pair of formData.entries()) {
                     console.log(pair[0] + ', ' + pair[1]);
              }        
       
              setIsLoading(true);
              try {
                  const response = await axios.put(`https://transitstation.online/api/admin/updateadmin/${employeeId}`,formData, {
                      headers: {
                          Authorization: `Bearer ${auth.user.token}`,
                          'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                      },
                  });
       
                  if (response.status === 200) {
                      auth.toastSuccess('Supervisor Updated successfully!');
                      handleGoBack();
                  } else {
                      auth.toastError('Failed to Updated Supervisor.');
                  }
              } catch (error) {
                  if(error.response.data.email?.[0] ==="The email has already been taken."){
                      auth.toastError("The email has already been taken.");
                  }
                  else if(error.response.data.phone?.[0] === "The phone has already been taken."){
                      auth.toastError("The phone has already been taken.");
                  }
                  console.log(error)
                  const errorMessages = error?.response?.data.errors;
                  let errorMessageString = 'Error occurred';
       
                  if (errorMessages) {
                      errorMessageString = Object.values(errorMessages).flat().join(' ');
                  }   
                  // auth.toastError('Error', errorMessageString);
              } finally {
                  setIsLoading(false);
              }
          };
       
       return (
              <form onSubmit={(event) => handleSubmitEdit(employeeContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
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
                          required={false}
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
                        <DropDownMenu
                        ref={dropdownPositionRef}
                        handleOpen={handleOpenSelectPosition}
                        handleOpenOption={handleSelectPosition}
                        stateoption={selectPosition}
                        openMenu={openSelectPosition}
                        options={positionData}
                        />
                 </div>

                    {/* Display the roles list */}
      {/* {roles.length > 0 && (
        <div className="w-full flex flex-col items-start justify-start">
          <h3 className="text-xl font-semibold mb-2">Roles:</h3>
          <ul className="list-disc ml-5">
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      )} */}
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

export default EditEmployeesPage
