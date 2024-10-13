import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
// import CartStudent from '../../../../Components/CartStudent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';
import {ButtonAdd} from '../../Components/Button'
import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const ParkingPage = () => {
       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [parking , setParking] =useState('')
       const [parkingChanged, setParkingChanged] = useState(false);
       const [isDeleting, setIsDeleting] = useState(false);
       const [openDialog, setOpenDialog] = useState(null);

    const [openDropdownId, setOpenDropdownId] = useState(null); // Store the ID of the open dropdown

    // Toggle dropdown for a specific location
    const toggleDropdown = (id) => {
      // If the clicked dropdown is already open, close it
      if (openDropdownId === id) {
        setOpenDropdownId(null);
      } else {
        // Otherwise, open the clicked dropdown and close any other
        setOpenDropdownId(id);
      }
    };

       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/parking', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {
                            console.log(response.data)
                            setParking(response.data.data)
                     }
              } catch (error) {
                     console.error('Error fetching data:', error);
              } finally {
                     setIsLoading(false);
              }
       };

       useEffect(() => {
              fetchData(); // Fetch students initially and whenever studentsChanged changes
       }, [parkingChanged]);

       const handleOpenDialog = (parkingId) => {
              setOpenDialog(parkingId);
              };
        
              const handleCloseDialog = () => {
                     setOpenDialog(null);
              };
        
              const handleDelete = async (parkingId) => {
                     setIsDeleting(true);
                     const success = await deleteParking(parkingId, auth.user.token);
                     setIsDeleting(false);
                     handleCloseDialog();
        
                     if (success) {
                            setParkingChanged(!parkingChanged)
                            auth.toastSuccess('Parking deleted successfully!');
                            setParking((preParking) =>
                                   preParking.filter((parking) => parking.id !== parkingId)
                            );
                     } else {
                            auth.toastError('Failed to delete Parking.');
                     }
              };
        
              const deleteParking= async (parkingId, authToken) => {
                     try {
                            const response = await axios.delete(`https://transitstation.online/api/admin/parking/delete/${parkingId}`, {
                                   headers: {
                                          Authorization: `Bearer ${authToken}`,
                                   },
                            });
        
                            if (response.status === 200) {
                                   console.log('Parking deleted successfully');
                                   return true;
                            } else {
                                   console.error('Failed to delete Parking:', response.status, response.statusText);
                                   return false;
                            }
                     } catch (error) {
                            console.error('Error deleting Parking:', error);
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

        if (!parking) {
            return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No parking data available</div>;
        }         

       return (
              <>
            <div className='w-full flex flex-col gap-5'>
                <Link to="add">
                    <div className='w-1/6'>
                        <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
                    </div>
                </Link>
                <div className="w-full flex flex-wrap gap-10 ml-5 mt-5">
                {parking.map((park) => (
                    <>
                        {/* <Card name={park.name} count={park.capacity} /> */}
                        <div className={`w-64 min-h-36 overflow-hidden p-3 flex flex-col items-center justify-start bg-mainColor rounded-xl`}>
                            <div className='flex w-full justify-between h-2/4'>
                                   <div className='w-3/4'>
                                          <span className='w-full text-left text-xl text-secoundColor font-medium'>{park.name}</span>
                                   </div>

                                   <div className="relative w-1/4">
                                          {/* Three dots button */}
                                          <button onClick={() => toggleDropdown(park.id)} className="absolute top-2 right-2">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 6v.01M12 12v.01M12 18v.01" />
                                                 </svg>
                                          </button>

                                          {/* Dropdown menu for the specific location */}
                                          {openDropdownId === park.id && (
                                                 <div className="absolute top-8 right-0 w-32 bg-white shadow-lg rounded-md py-2 z-10">
                                                 <ul>
                                                 <Link to={`edit/${park.id}`} state={park.id} type="button">
                                                 <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-3"><EditIcon /> Edit</li>
                                                 </Link>
                                                 {/* <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li> */}
                                                 <li onClick={() => handleOpenDialog(park.id)} className="px-4 flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
                                                 {/* <button className='flex gap-3' type="button" onClick={() => handleOpenDialog(location.id)}> */}
                                                        <DeleteIcon /> Delete
                                                 {/* </button> */}
                                                 </li>
                                                 {openDialog === park.id && (
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
                                                                                                                You will delete park {park.name|| "null"}
                                                                                                         </DialogTitle>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                             <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                                    <button
                                                                                           type="button"
                                                                                           onClick={() => handleDelete(park.id)}
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
                                                 </ul>
                                                 </div>
                                          )}
                                   </div>
                            </div>
                            {/* <span className='w-full text-left text-xl text-secoundColor font-medium'>{park.name}</span> */}
                                   <div className='w-full h-2/4 text-center'>
                                   <Link to={`parkinglist/${park.id}`} state={park.id}>
                                          <div className='w-full'>
                                          <span className='text-5xl text-secoundColor font-medium'>{park.capacity}</span>
                                          </div>
                                   </Link>

                                   </div>
                        </div>
                    </>
                ))}           
                </div>
            </div>
              </>
       )
}
export default ParkingPage