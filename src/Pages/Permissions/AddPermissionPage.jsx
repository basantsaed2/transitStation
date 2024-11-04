// import React, { useEffect, useState } from 'react';
// import InputCustom from '../../Components/InputCustom';
// import axios from 'axios';
// import Loading from '../../Components/Loading';
// import { useAuth } from '../../Context/Auth';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '../../Components/Button';

// const AddPermissionPage = () => {
//     const auth = useAuth();
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const [roleName, setRoleName] = useState('');
//     const [premissionRoleData, setPremissionRoleData] = useState([]);
//     const [premissionRole, setPremissionRole] = useState([]);

//     // Fetch Permissions (roles)
//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get('https://transitstation.online/api/admin/adminposition', {
//                 headers: {
//                     Authorization: `Bearer ${auth.user.token}`,
//                 },
//             });
//             if (response.status === 200) {
//                 const permissions = response.data.roles;
//                 console.log(permissions)
//                 setPremissionRoleData(permissions.map((name) => ({ name })));
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // Handle "Select All" Toggle
//     const handleSelectAll = (e) => {
//         if (e.target.checked) {
//             // Select all permissions
//             setPremissionRole(premissionRoleData.map((perm) => perm.name));
//         } else {
//             // Deselect all permissions
//             setPremissionRole([]);
//         }
//     };

//     // Toggle individual permission selection
//     const handleTogglePermission = (permissionName) => {
//         if (premissionRole.includes(permissionName)) {
//             // Remove the permission from the selected list
//             setPremissionRole(premissionRole.filter((perm) => perm !== permissionName));
//         } else {
//             // Add the permission to the selected list
//             setPremissionRole([...premissionRole, permissionName]);
//         }
//     };

//     // Check if all permissions are selected
//     const areAllPermissionsSelected = premissionRole.length === premissionRoleData.length;

//     // Reset Handler
//     const handleReset = () => {
//         setPremissionRole([]);
//     };

//     // Handle form submission
//     const handleSubmitAdd = async (e) => {
//         e.preventDefault();
//         if (!roleName) {
//             auth.toastError('Please Enter Role Name.');
//             return;
//         }
//         if (!premissionRole.length) {
//             auth.toastError('Please Select Permission Role.');
//             return;
//         }

//         setIsLoading(true);

//         try {
//             const formData = new FormData();
//             formData.append('name', roleName);
//             premissionRole.forEach((role) => formData.append('role_name[]', role));

//             const response = await axios.post('https://transitstation.online/api/admin/addadminposition', formData, {
//                 headers: {
//                     Authorization: `Bearer ${auth.user.token}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             if (response.status === 200) {
//                 navigate(-1, { replace: true });
//                 auth.toastSuccess('Role added successfully!');
//             }
//         } catch (error) {
//             auth.toastError(`Error: ${error}`);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             {isLoading ? (
//                 <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//                     <Loading />
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmitAdd} className="w-full flex flex-col items-center justify-center gap-y-10">
//                     <div className="w-full flex flex-wrap items-center justify-start gap-10">
//                         <div className="lg:w-[30%] sm:w-full">
//                             <InputCustom
//                                 type="text"
//                                 placeholder="Name"
//                                 value={roleName}
//                                 required={false}
//                                 borderColor="mainColor"
//                                 onChange={(e) => setRoleName(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     {/* Module Permission Section */}
//                     <div className="w-full flex flex-col gap-4">
//                         <h2 className="text-2xl font-semibold text-blue-600">Permissions:</h2>

//                         {/* Select All Checkbox */}
//                         <div className="flex items-center gap-2">
//                             <input
//                                 type="checkbox"
//                                 id="select-all"
//                                 onChange={handleSelectAll}
//                                 checked={areAllPermissionsSelected}
//                                 className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
//                             />
//                             <label htmlFor="select-all" className="text-2xl text-mainColor font-medium">
//                                 Select All
//                             </label>
//                         </div>

//                         {/* Permission Checkboxes */}
//                         {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                             {premissionRoleData.map((permission, index) => (
//                                 <div key={index} className="flex items-center gap-2">
//                                     <input
//                                         type="checkbox"
//                                         id={`perm-${index}`}
//                                         checked={premissionRole.includes(permission.name)}
//                                         onChange={() => handleTogglePermission(permission.name)}
//                                         className="h-5 w-5 rounded-full border-mainColor checked:bg-blue-500"
//                                     />
//                                     <label htmlFor={`perm-${index}`} className="text-2xl font-medium text-gray-700">
//                                         {permission.name}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div> */}
//                     </div>

//                      <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">
//                             <div className="flex items-center justify-center w-72">
//                                    <Button
//                                           type="submit"
//                                           Text="Done"
//                                           BgColor="bg-mainColor"
//                                           Color="text-white"
//                                           Width="full"
//                                           Size="text-2xl"
//                                           px="px-28"
//                                           rounded="rounded-2xl"
//                                    />
//                             </div>
//                             <button type='button' onClick={handleReset} className="text-2xl text-mainColor">Reset</button>
//                      </div>
//                 </form>
//             )}
//         </>
//     );
// };

// export default AddPermissionPage;

import React, { useEffect, useState } from 'react';
import InputCustom from '../../Components/InputCustom';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button';

const AddPermissionPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [roleName, setRoleName] = useState('');
    const [permissionsData, setPermissionsData] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

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

    // Handle form submission
    const handleSubmitAdd = async (e) => {
        e.preventDefault();
        if (!roleName) {
            auth.toastError('Please Enter Role Name.');
            return;
        }

        const selectedRoles = Object.values(selectedPermissions).flat();
        if (!selectedRoles.length) {
            auth.toastError('Please Select Permission Role.');
            return;
        }

        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', roleName);
            selectedRoles.forEach((role) => formData.append('role_name[]', role));

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
                navigate(-1, { replace: true });
                auth.toastSuccess('Role added successfully!');
            }
        } catch (error) {
            auth.toastError(`Error: ${error}`);
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
                <form onSubmit={handleSubmitAdd} className="w-full flex flex-col items-center justify-center gap-y-10">
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
    );
};

export default AddPermissionPage;
