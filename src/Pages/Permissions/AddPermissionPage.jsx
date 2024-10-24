import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';
import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const AddPermissionPage = () => {
       const premissionRoleRef = useRef();

       const auth = useAuth();
       const navigate = useNavigate();
       const [isLoading, setIsLoading] = useState(false);

       const [roleName, setRoleName] = useState('');

       const [premissionRoleData, setPremissionRoleData] = useState([]);
       const [premissionRoleState, setPremissionRoleState] = useState('Select Premission');
       const [premissionRole, setPremissionRole] = useState([]);

       const [openPremissionRole, setOpenPremissionRole] = useState(false);

       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {                           
                            console.log('response Role', response.data.roles);
                            const premissiones = response.data.roles;
                            setPremissionRoleData(premissiones.map((name) => ({ name })));
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


       const handleOpenPremissionRole = () => {
              setOpenPremissionRole(!openPremissionRole)
       };

       const handlePremissionRole = (e) => {
              const inputElement = e.currentTarget.querySelector('.inputVal');
              const selectedOptionName = e.currentTarget.textContent.trim();
              const selectedOptionValue = inputElement ? inputElement.value.toLowerCase() : '';

              const Premission = selectedOptionValue;
              if (premissionRole.includes(Premission)) {
                     auth.toastError('This Premission Already Selected')
                     return [...premissionRole];
              } else {
                     setPremissionRoleState('Select Premission');
                     setPremissionRole((prev) => [...prev, Premission]);
              }

              console.log('premissionRole', premissionRole)
              setOpenPremissionRole(false);
       };

       useEffect(() => {
              console.log('premissionRole', premissionRole)
              document.addEventListener('mousedown', handleClickOutside);
              return () => {
                     document.removeEventListener('mousedown', handleClickOutside);
              };
       }, [premissionRole]);

       const handleClickOutside = (event) => {

              if (premissionRoleRef.current && !premissionRoleRef.current.contains(event.target)
              ) {
                     setOpenPremissionRole(false);
              }
       };



       const handleDelete = (indexToDelete) => {
              const updatedPremissionRole = premissionRole.filter((_, index) => index !== indexToDelete);
              setPremissionRole(updatedPremissionRole);
       };

       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };


       const handleSubmitAdd = async (e) => {
              e.preventDefault();

              if (!roleName) {
                     auth.toastError('Please Enter Role Name.');
                     return;
              }

              if (!premissionRole || premissionRole.length === 0) {
                     auth.toastError('Please Select Permission Role.');
                     return;
              }

              setIsLoading(true);

              try {
                     const formData = new FormData();
                     formData.append('name', roleName);
        
                     // Append each role in the array separately
                     premissionRole.forEach((role) => {
                            formData.append('role_name[]', role); // Use 'role_name[]' to send it as an array
                     });

                     for (let pair of formData.entries()) {
                            console.log(pair[0] + ', ' + pair[1]);
                          }
  
                     const response = await axios.post('https://transitstation.online/api/admin/addadminposition', formData, {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                                   'Content-Type': 'multipart/form-data',
                            },
                     });

                     if (response.status === 200) {
                            handleGoBack();
                            auth.toastSuccess("Role added successfully!");
                     }
              } catch (error) {
                     console.log(error)
                     if(error.response.status === 422 && error.response.data.message===("The name has already been taken.")){
                            auth.toastError(`"The role name has already been taken."`);
                     }else{
                     auth.toastError(`Error: ${error}`);
                     }
              } finally {
                     setIsLoading(false);
              }
       };

       return (
              <>
                     {isLoading ? <>
                            <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                                   <Loading />
                            </div>
                     </> :
                           <form onSubmit={handleSubmitAdd} className="w-full flex flex-col items-center justify-center gap-y-10">
                                   <div className="w-full flex flex-wrap items-center justify-start gap-10">
                                          <div className="lg:w-[30%] sm:w-full">
                                                 <InputCustom
                                                        type="text"
                                                        placeholder="Name"
                                                        value={roleName}
                                                        required={false}
                                                        onChange={(e) => setRoleName(e.target.value)}
                                                 />
                                          </div>
                                          <div className="lg:w-[30%] sm:w-full">
                                                 <DropDownMenu
                                                        ref={premissionRoleRef}
                                                        handleOpen={handleOpenPremissionRole}
                                                        handleOpenOption={handlePremissionRole}
                                                        stateoption={premissionRoleState}
                                                        openMenu={openPremissionRole}
                                                        options={premissionRoleData}
                                                 />
                                          </div>
                                   </div>
                                   <div className="w-full flex flex-wrap items-center justify-start gap-4">
                                          {premissionRole.map((premission, index) => {
                                                 const displayIndex = index + 1; // Create a separate variable for the display index
                                                 return (
                                                        <div className="sm:w-full lg:w-5/12 xl:w-2/12 flex items-center justify-between shadow-md hover:shadow-none duration-300 py-3 px-4 rounded-xl" key={index}>
                                                               <span className='text-mainColor text-xl font-semibold capitalize'>{displayIndex}. {premission}</span>

                                                               <span className='hover:cursor-pointer' onClick={() => handleDelete(index)}>
                                                                      <DeleteIcon />
                                                               </span>
                                                        </div>
                                                 );
                                          })}
                                   </div>
                                   {/* Buttons */}
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
                                                 />
                                          </div>
                                          <button type='button' onClick={handleGoBack} className="text-2xl text-mainColor">Cancel</button>
                                   </div>
                            </form>
                     }
              </>
       )
}

export default AddPermissionPage
