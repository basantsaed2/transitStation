// import React, { useEffect, useState ,useRef ,useContext} from 'react';
// import InputCustom from '../../Components/InputCustom';
// import { Button } from '../../Components/Button';
// import axios from 'axios';
// import Loading from '../../Components/Loading';
// import { useAuth } from '../../Context/Auth';
// import { useNavigate } from 'react-router-dom';
// import DropDownMenu from '../../Components/DropDownMenu';
// import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';

// import { PermissionDataContext } from '../../Layouts/EditPermissionLayout';

// const EditPermissionPage = () => {

//        const premissionContent = useContext(PermissionDataContext);
//        const premissionRoleRef = useRef();

//        const auth = useAuth();
//        const navigate = useNavigate();
//        const [isLoading, setIsLoading] = useState(false);

//        const [roleName, setRoleName] = useState('');

//        const [premissionRoleData, setPremissionRoleData] = useState([]);
//        const [premissionRoleState, setPremissionRoleState] = useState('Select Premission');
//        const [premissionRole, setPremissionRole] = useState([]);

//        const [openPremissionRole, setOpenPremissionRole] = useState(false);

//        useEffect(() => {
//               if (premissionContent) {
//                      setRoleName(premissionContent?.name || '-')
//                      setPremissionRole(premissionContent?.role.map((role) => (role.role_name)) || '-')
//               }
//        }, [premissionContent]);


//        const fetchData = async () => {
//               setIsLoading(true);
//               try {
//                      const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
//                             headers: {
//                                    Authorization: `Bearer ${auth.user.token}`,
//                             },
//                      });
//                      if (response.status === 200) {                           
//                             console.log('response Role', response.data.roles);
//                             const premissiones = response.data.roles;
//                             setPremissionRoleData(premissiones.map((name) => ({ name })));
//                      }
//               } catch (error) {
//                      console.error('Error fetching data:', error);
//               } finally {
//                      setIsLoading(false);
//               }
//               };
//            useEffect(()=>{
//               fetchData()
//            },[])


//        const handleOpenPremissionRole = () => {
//               setOpenPremissionRole(!openPremissionRole)
//        };

//        const handlePremissionRole = (e) => {
//               const inputElement = e.currentTarget.querySelector('.inputVal');
//               const selectedOptionName = e.currentTarget.textContent.trim();
//               const selectedOptionValue = inputElement ? inputElement.value.toLowerCase() : '';

//               const Premission = selectedOptionValue;
//               if (premissionRole.includes(Premission)) {
//                      auth.toastError('This Premission Already Selected')
//                      return [...premissionRole];
//               } else {
//                      setPremissionRoleState('Select Premission');
//                      setPremissionRole((prev) => [...prev, Premission]);
//               }

//               console.log('premissionRole', premissionRole)
//               setOpenPremissionRole(false);
//        };

//        useEffect(() => {
//               console.log('premissionRole', premissionRole)
//               document.addEventListener('mousedown', handleClickOutside);
//               return () => {
//                      document.removeEventListener('mousedown', handleClickOutside);
//               };
//        }, [premissionRole]);

//        const handleClickOutside = (event) => {

//               if (premissionRoleRef.current && !premissionRoleRef.current.contains(event.target)
//               ) {
//                      setOpenPremissionRole(false);
//               }
//        };



//        const handleDelete = (indexToDelete) => {
//               const updatedPremissionRole = premissionRole.filter((_, index) => index !== indexToDelete);
//               setPremissionRole(updatedPremissionRole);
//        };

//        const handleGoBack = () => {
//               navigate(-1, { replace: true });
//        };

//        const handleSubmitEdit = async (permissionId, event) => {
//               event.preventDefault();
          
//               if (!roleName) {
//                   auth.toastError('Please Enter Role Name.');
//                   return;
//               }
          
//               if (!premissionRole || premissionRole.length === 0) {
//                   auth.toastError('Please Select Permission Role.');
//                   return;
//               }
          
//               setIsLoading(true);
          
//               try {
//                   // Prepare payload as JSON
//                   const payload = {
//                       name: roleName,
//                       role_name: premissionRole  // This will send ['parking', 'locationa'] as an array
//                   };
          
//                   // Make the PUT request with JSON payload
//                   const response = await axios.put(`https://transitstation.online/api/admin/updateadminposition/${permissionId}`, payload, {
//                       headers: {
//                           Authorization: `Bearer ${auth.user.token}`,
//                           'Content-Type': 'application/json',  // Ensure the content type is set to JSON
//                       },
//                   });
          
//                   if (response.status === 200) {
//                       handleGoBack();
//                       auth.toastSuccess("Role Updated successfully!");
//                   } else {
//                       auth.toastError('Failed to Update Role.');
//                   }
//               } catch (error) {
//                   auth.toastError(`Error: ${error.message}`);
//               } finally {
//                   setIsLoading(false);
//               }
//           };
          
//        return (
//               <>
//                      {isLoading ? <>
//                             <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//                                    <Loading />
//                             </div>
//                      </> :
//                            <form  onSubmit={(event) => handleSubmitEdit(premissionContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
//                                    <div className="w-full flex flex-wrap items-center justify-start gap-10">
//                                           <div className="lg:w-[30%] sm:w-full">
//                                                  <InputCustom
//                                                         type="text"
//                                                         placeholder="Name"
//                                                         value={roleName}
//                                                         required={false}
//                                                         onChange={(e) => setRoleName(e.target.value)}
//                                                  />
//                                           </div>
//                                           <div className="lg:w-[30%] sm:w-full">
//                                                  <DropDownMenu
//                                                         ref={premissionRoleRef}
//                                                         handleOpen={handleOpenPremissionRole}
//                                                         handleOpenOption={handlePremissionRole}
//                                                         stateoption={premissionRoleState}
//                                                         openMenu={openPremissionRole}
//                                                         options={premissionRoleData}
//                                                  />
//                                           </div>
//                                    </div>
//                                    <div className="w-full flex flex-wrap items-center justify-start gap-4">
//                                           {premissionRole.map((premission, index) => {
//                                                  const displayIndex = index + 1; // Create a separate variable for the display index
//                                                  return (
//                                                         <div className="sm:w-full lg:w-5/12 xl:w-2/12 flex items-center justify-between shadow-md hover:shadow-none duration-300 py-3 px-4 rounded-xl" key={index}>
//                                                                <span className='text-mainColor text-xl font-semibold capitalize'>{displayIndex}. {premission}</span>

//                                                                <span className='hover:cursor-pointer' onClick={() => handleDelete(index)}>
//                                                                       <DeleteIcon />
//                                                                </span>
//                                                         </div>
//                                                  );
//                                           })}
//                                    </div>
//                                    {/* Buttons */}
//                                    <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">
//                                           <div className="flex items-center justify-center w-72">
//                                                  <Button
//                                                         type="submit"
//                                                         Text="Done"
//                                                         BgColor="bg-mainColor"
//                                                         Color="text-white"
//                                                         Width="full"
//                                                         Size="text-2xl"
//                                                         px="px-28"
//                                                         rounded="rounded-2xl"
//                                                  />
//                                           </div>
//                                           <button type='button' onClick={handleGoBack} className="text-2xl text-mainColor">Cancel</button>
//                                    </div>
//                             </form>
//                      }
//               </>
//        )
// }

// export default EditPermissionPage

// import React, { useEffect, useState ,useContext} from 'react';
// import InputCustom from '../../Components/InputCustom';
// import { Button } from '../../Components/Button';
// import axios from 'axios';
// import Loading from '../../Components/Loading';
// import { useAuth } from '../../Context/Auth';
// import { useNavigate } from 'react-router-dom';

// import { PermissionDataContext } from '../../Layouts/EditPermissionLayout';

// const EditPermissionPage = () => {

//        const premissionContent = useContext(PermissionDataContext);

//        const auth = useAuth();
//        const navigate = useNavigate();
//        const [isLoading, setIsLoading] = useState(false);

//        const [roleName, setRoleName] = useState('');
//        const [premissionRoleData, setPremissionRoleData] = useState([]);
//        const [premissionRole, setPremissionRole] = useState([]);

//        useEffect(() => {
//               if (premissionContent) {
//                      setRoleName(premissionContent?.name || '-')
//                      setPremissionRole(premissionContent?.role.map((role) => (role.role_name)) || '-')
//               }
//        }, [premissionContent]);


//        const fetchData = async () => {
//               setIsLoading(true);
//               try {
//                      const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
//                             headers: {
//                                    Authorization: `Bearer ${auth.user.token}`,
//                             },
//                      });
//                      if (response.status === 200) {                           
//                             console.log('response Role', response.data.roles);
//                             const premissiones = response.data.roles;
//                             setPremissionRoleData(premissiones.map((name) => ({ name })));
//                      }
//               } catch (error) {
//                      console.error('Error fetching data:', error);
//               } finally {
//                      setIsLoading(false);
//               }
//               };
//            useEffect(()=>{
//               fetchData()
//            },[])


//      // Handle "Select All" Toggle
//      const handleSelectAll = (e) => {
//        if (e.target.checked) {
//            // Select all permissions
//            setPremissionRole(premissionRoleData.map((perm) => perm.name));
//        } else {
//            // Deselect all permissions
//            setPremissionRole([]);
//        }
//    };

//    // Toggle individual permission selection
//    const handleTogglePermission = (permissionName) => {
//        if (premissionRole.includes(permissionName)) {
//            // Remove the permission from the selected list
//            setPremissionRole(premissionRole.filter((perm) => perm !== permissionName));
//        } else {
//            // Add the permission to the selected list
//            setPremissionRole([...premissionRole, permissionName]);
//        }
//    };

//    // Check if all permissions are selected
//    const areAllPermissionsSelected = premissionRole.length === premissionRoleData.length;

//    // Reset Handler
//    const handleReset = () => {
//        setPremissionRole([]);
//    };

//        const handleGoBack = () => {
//               navigate(-1, { replace: true });
//        };

//        const handleSubmitEdit = async (permissionId, event) => {
//               event.preventDefault();
          
//               if (!roleName) {
//                   auth.toastError('Please Enter Role Name.');
//                   return;
//               }
          
//               if (!premissionRole || premissionRole.length === 0) {
//                   auth.toastError('Please Select Permission Role.');
//                   return;
//               }
          
//               setIsLoading(true);
          
//               try {
//                   // Prepare payload as JSON
//                   const payload = {
//                       name: roleName,
//                       role_name: premissionRole  // This will send ['parking', 'locationa'] as an array
//                   };
          
//                   // Make the PUT request with JSON payload
//                   const response = await axios.put(`https://transitstation.online/api/admin/updateadminposition/${permissionId}`, payload, {
//                       headers: {
//                           Authorization: `Bearer ${auth.user.token}`,
//                           'Content-Type': 'application/json',  // Ensure the content type is set to JSON
//                       },
//                   });
          
//                   if (response.status === 200) {
//                       handleGoBack();
//                       auth.toastSuccess("Role Updated successfully!");
//                   } else {
//                       auth.toastError('Failed to Update Role.');
//                   }
//               } catch (error) {
//                   auth.toastError(`Error: ${error.message}`);
//               } finally {
//                   setIsLoading(false);
//               }
//           };
          
//        return (
//                       <>
//                       {isLoading ? (
//                           <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//                               <Loading />
//                           </div>
//                       ) : (
//                           <form onSubmit={(event) => handleSubmitEdit(premissionContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
//                               <div className="w-full flex flex-wrap items-center justify-start gap-10">
//                                   <div className="lg:w-[30%] sm:w-full">
//                                       <InputCustom
//                                           type="text"
//                                           placeholder="Name"
//                                           value={roleName}
//                                           required={false}
//                                           onChange={(e) => setRoleName(e.target.value)}
//                                       />
//                                   </div>
//                               </div>
          
//                               {/* Module Permission Section */}
//                               <div className="w-full flex flex-col gap-4">
//                                   <h2 className="text-2xl font-semibold text-blue-600">Permissions:</h2>
          
//                                   {/* Select All Checkbox */}
//                                   <div className="flex items-center gap-2">
//                                       <input
//                                           type="checkbox"
//                                           id="select-all"
//                                           onChange={handleSelectAll}
//                                           checked={areAllPermissionsSelected}
//                                           className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
//                                       />
//                                       <label htmlFor="select-all" className="text-2xl text-mainColor font-medium">
//                                           Select All
//                                       </label>
//                                   </div>
          
//                                   {/* Permission Checkboxes */}
//                                   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                                       {premissionRoleData.map((permission, index) => (
//                                           <div key={index} className="flex items-center gap-2">
//                                               <input
//                                                   type="checkbox"
//                                                   id={`perm-${index}`}
//                                                   checked={premissionRole.includes(permission.name)}
//                                                   onChange={() => handleTogglePermission(permission.name)}
//                                                   className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
//                                               />
//                                               <label htmlFor={`perm-${index}`} className="text-2xl font-medium text-gray-700">
//                                                   {permission.name}
//                                               </label>
//                                           </div>
//                                       ))}
//                                   </div>
//                               </div>
//                                <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">
//                                       <div className="flex items-center justify-center w-72">
//                                              <Button
//                                                     type="submit"
//                                                     Text="Done"
//                                                     BgColor="bg-mainColor"
//                                                     Color="text-white"
//                                                     Width="full"
//                                                     Size="text-2xl"
//                                                     px="px-28"
//                                                     rounded="rounded-2xl"
//                                              />
//                                       </div>
//                                       <button type='button' onClick={handleReset} className="text-2xl text-mainColor">Reset</button>
//                                </div>
//                           </form>
//                       )}
//                   </>
//        )
// }

// export default EditPermissionPage


import React, { useEffect, useState ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';

import { PermissionDataContext } from '../../Layouts/EditPermissionLayout';

const EditPermissionPage = () => {

       const premissionContent = useContext(PermissionDataContext);

       const auth = useAuth();
       const navigate = useNavigate();
       const [isLoading, setIsLoading] = useState(false);

    const [roleName, setRoleName] = useState('');
    const [permissionsData, setPermissionsData] = useState({});
    const [selectedPermissions, setSelectedPermissions] = useState({});

    //    useEffect(() => {
    //           if (premissionContent) {
    //                  setRoleName(premissionContent?.name || '-')
    //                  setSelectedPermissions(premissionContent?.role.map((role) => (role.role_name)) || '-')
    //                 }
    //    }, [premissionContent]);


    // Fetch Permissions (roles)
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });
            if (response.status === 200) {
                const permissions = response.data.roles;
                setPermissionsData(permissions);

                // Initialize selected permissions state
                const initialSelected = {};
                Object.keys(permissions).forEach((category) => {
                    initialSelected[category] = [];
                });
                setSelectedPermissions(initialSelected);
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

    // Handle "Select All" Toggle
    const handleSelectAll = () => {
        const allSelectedPermissions = {};
        Object.keys(permissionsData).forEach((category) => {
            allSelectedPermissions[category] = [...permissionsData[category]];
        });
        setSelectedPermissions(allSelectedPermissions);
    };

    // Deselect All Handler
    const handleDeselectAll = () => {
        const resetPermissions = {};
        Object.keys(permissionsData).forEach((category) => {
            resetPermissions[category] = [];
        });
        setSelectedPermissions(resetPermissions);
    };

     // Handle "Select All" Toggle for Each Category
     const handleSelectAllCategory = (category) => {
        if (selectedPermissions[category].length === permissionsData[category].length) {
            // Deselect all in the category
            setSelectedPermissions((prev) => ({
                ...prev,
                [category]: [],
            }));
        } else {
            // Select all in the category
            setSelectedPermissions((prev) => ({
                ...prev,
                [category]: [...permissionsData[category]],
            }));
        }
    };

      // Check if all permissions are selected in a category
      const isAllSelectedInCategory = (category) =>
        selectedPermissions[category]?.length === permissionsData[category]?.length;


    // Toggle Select All/Deselect All based on current state
    const toggleSelectAll = () => {
        const isAllSelected = Object.values(selectedPermissions).every(
            (permissions, index) => permissions.length === Object.values(permissionsData)[index]?.length
        );

        if (isAllSelected) {
            handleDeselectAll();
        } else {
            handleSelectAll();
        }
    };

    // Check if all permissions are selected
    const areAllPermissionsSelected = Object.values(selectedPermissions).every(
        (permissions, index) => permissions.length === Object.values(permissionsData)[index]?.length
    );

    // Toggle individual permission selection within a category
    const handleTogglePermission = (category, permissionName) => {
        setSelectedPermissions((prev) => {
            const categoryPermissions = prev[category] || [];
            return {
                ...prev,
                [category]: categoryPermissions.includes(permissionName)
                    ? categoryPermissions.filter((perm) => perm !== permissionName)
                    : [...categoryPermissions, permissionName],
            };
        });
    };
       const handleSubmitEdit = async (permissionId, event) => {
              event.preventDefault();
          
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
                  // Prepare payload as JSON
                  const payload = {
                      name: roleName,
                      role_name: premissionRole  // This will send ['parking', 'locationa'] as an array
                  };
          
                  // Make the PUT request with JSON payload
                  const response = await axios.put(`https://transitstation.online/api/admin/updateadminposition/${permissionId}`, payload, {
                      headers: {
                          Authorization: `Bearer ${auth.user.token}`,
                          'Content-Type': 'application/json',  // Ensure the content type is set to JSON
                      },
                  });
          
                  if (response.status === 200) {
                      handleGoBack();
                      auth.toastSuccess("Role Updated successfully!");
                  } else {
                      auth.toastError('Failed to Update Role.');
                  }
              } catch (error) {
                  auth.toastError(`Error: ${error.message}`);
              } finally {
                  setIsLoading(false);
              }
          };
          
       return (
                      <>
                      {isLoading ? (
                          <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                              <Loading />
                          </div>
                      ) : (
                          <form onSubmit={(event) => handleSubmitEdit(premissionContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
                                                  <div className="w-full flex flex-wrap items-center justify-start gap-10">
                        <div className="lg:w-[30%] sm:w-full">
                            <InputCustom
                                type="text"
                                placeholder="Name"
                                value={roleName}
                                required={false}
                                borderColor="mainColor"
                                onChange={(e) => setRoleName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Permissions Section */}
                    <div className="w-full flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold text-blue-600">Permissions:</h2>

                        {/* Select All Button */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="select-all"
                                onChange={toggleSelectAll}
                                checked={areAllPermissionsSelected}
                                className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
                            />
                            <label htmlFor="select-all" className="text-2xl text-mainColor font-medium">
                                Select All
                            </label>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        {Object.keys(permissionsData).map((category) => (
                            <div key={category} className="p-4 border rounded-lg mb-4 shadow">
                               <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`select-all-${category}`}
                                        onChange={() => handleSelectAllCategory(category)}
                                        checked={isAllSelectedInCategory(category)}
                                        className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
                                    />
                                    <label htmlFor={`select-all-${category}`} className="text-xl font-semibold text-mainColor">
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </label>
                                </div>
                                
                                {/* Permission Checkboxes */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                    {permissionsData[category].map((permission, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedPermissions[category]?.includes(permission)}
                                                onChange={() => handleTogglePermission(category, permission)}
                                                className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
                                            />
                                            <label className="text-lg font-medium text-gray-700">
                                                {permission}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
                            />
                        </div>
                        <button type="button" onClick={handleDeselectAll} className="text-2xl text-mainColor">
                            Reset
                        </button>
                    </div>
                          </form>
                      )}
                  </>
       )
}

export default EditPermissionPage

