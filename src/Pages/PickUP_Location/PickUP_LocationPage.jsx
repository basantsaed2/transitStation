import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import {ButtonAdd} from '../../Components/Button'
import { Link } from 'react-router-dom';
import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const PickUP_LocationPage = () => {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [pickUp_Locations, setPickUp_Locations] = useState(false);
    const [locationChanged, setLocationChanged] = useState(false);
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
               const response = await axios.get('https://transitstation.online/api/admin/locations', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setPickUp_Locations(response.data.locations)
               }
        } catch (error) {
               console.error('Error fetching data:', error);
        } finally {
               setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, [locationChanged]);

    const handleOpenDialog = (locationId) => {
      setOpenDialog(locationId);
      };

      const handleCloseDialog = () => {
             setOpenDialog(null);
      };

      const handleDelete = async (locationId) => {
             setIsDeleting(true);
             const success = await deleteLocation(locationId, auth.user.token);
             setIsDeleting(false);
             handleCloseDialog();

             if (success) {
                    setLocationChanged(!locationChanged)
                    auth.toastSuccess('Location deleted successfully!');
                    setPickUp_Locations((prevLocation) =>
                           prevLocation.filter((location) => location.id !== locationId)
                    );
             } else {
                    auth.toastError('Failed to delete Location.');
             }
      };

      const deleteLocation = async (locationId, authToken) => {
             try {
                    const response = await axios.delete(`https://transitstation.online/api/admin/locations/delete/${locationId}`, {
                           headers: {
                                  Authorization: `Bearer ${authToken}`,
                           },
                    });

                    if (response.status === 200) {
                           console.log('PickUp_Location deleted successfully');
                           return true;
                    } else {
                           console.error('Failed to delete PickUp_Location:', response.status, response.statusText);
                           return false;
                    }
             } catch (error) {
                    console.error('Error deleting PickUp_Location:', error);
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
      
    if (!pickUp_Locations) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No PiclUp Location data available</div>;
    }

       return (
            <>
            <div className='w-full flex flex-col gap-5'>
              <div className='w-2/6 lg:w-1/6'>
                <Link to="add">
                        <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
                </Link>
              </div>

                {/* <div className='w-full flex justify-center flex-wrap gap-10'>
                    {pickUp_Locations.map((location) => (
                        <div key={location.id} className='w-full lg:w-[45%] p-4 flex bg-[#FFF979] rounded-lg shadow-lg mb-4'>
                        <div className='w-1/3 p-2'>
                            <img src={location.location_image} alt="" className='w-full h-auto rounded-md'/>
                        </div>
                        <div className='w-2/3 p-2 text-black'>
                            <h1 className='text-xl font-semibold mb-1'>{location.address}</h1>
                            <p className='text-sm'>{location.address_in_detail}</p>
                        </div>
                        </div>
                    ))}
                </div> */}

            <div className='w-full flex flex-wrap gap-10'>
                  {/* Location list */}
                  {pickUp_Locations.map((location) => (
                    <div key={location.id} className='w-full lg:w-[45%] h-full lg:h-[200px]  p-4 pr-0 flex lg:flex-row sm:flex-col bg-[#FFF979] rounded-lg shadow-lg mb-4'>
                      <div className='w-1/6 sm:w-full p-2'>
                        <img src={location.location_image} alt="" className='w-full h-full object-contain rounded-md'/>
                      </div>
                      <div className='w-5/6 sm:w-full p-2 text-black flex justify-between'>
                      <div>
                        <h1 className='text-xl font-semibold mb-1'>{location.address}</h1>
                        <p className='text-lg'>{location.address_in_detail}</p>
                      </div>
                      <div className="relative w-3/12">
                        {/* Three dots button */}
                        <button onClick={() => toggleDropdown(location.id)} className="absolute top-2 right-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 6v.01M12 12v.01M12 18v.01" />
                          </svg>
                        </button>

                        {/* Dropdown menu for the specific location */}
                        {openDropdownId === location.id && (
                          <div className="absolute top-8 right-0 w-32 bg-white shadow-lg rounded-md py-2 z-10">
                            <ul>
                            <Link to={`edit/${location.id}`} state={location.id} type="button">
                              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex gap-3"><EditIcon /> Edit</li>
                            </Link>
                              {/* <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li> */}
                              <li onClick={() => handleOpenDialog(location.id)} className="px-4 flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
                                {/* <button className='flex gap-3' type="button" onClick={() => handleOpenDialog(location.id)}> */}
                                  <DeleteIcon /> Delete
                                {/* </button> */}
                              </li>
                              {openDialog === location.id && (
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
                                                                                          You will delete location {location.id|| "null"}
                                                                                  </DialogTitle>
                                                                          </div>
                                                                  </div>
                                                          </div>
                                                          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                  <button
                                                                          type="button"
                                                                          onClick={() => handleDelete(location.id)}
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


                    </div>
                  ))}
            </div>

            </div>
            </>
       )
}

export default PickUP_LocationPage
