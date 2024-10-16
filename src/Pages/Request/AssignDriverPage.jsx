// import React, { useEffect, useState ,useRef} from 'react';
// import { useAuth } from '../../Context/Auth';
// import Loading from '../../Components/Loading';
// import axios from 'axios';
// import {Button} from '../../Components/Button'
// import {ButtonAdd} from '../../Components/Button'
// import { Link ,useNavigate} from 'react-router-dom';
// import DropDownMenu from '../../Components/DropDownMenu';

// const AssignDriverPage = () => {

//     const auth = useAuth();
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const [drivers, setDrivers] = useState('');
//     const [parkingData ,setParkingData] =useState([])

//     const [selectParking, setSelectParking] = useState('Select Parking');
//     const [selectParkingId, setSelectParkingId] = useState([]);
//     const [openSelectParking, setOpenSelectParking] = useState(false);

//     const dropdownParkingRef =useRef();

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//                const response = await axios.get('https://transitstation.online/api/admin/parkingdrivers', {
//                       headers: {
//                              Authorization: `Bearer ${auth.user.token}`,
//                       },
//                });
//                if (response.status === 200) {
//                       console.log(response.data)
//                       setDrivers(response.data.drivers)
//                       setParkingData(response.data.parkings)
//                }
//         } catch (error) {
//                console.error('Error fetching data:', error);
//         } finally {
//                setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData(); 
//     }, []);

//     const handleOpenSelectParking = () => {
//        setOpenSelectParking(!openSelectParking);
//      };
  
//     const handleSelectParking = (e) => {
//        const inputElement = e.currentTarget.querySelector('.inputVal');
//        const selectedOptionName = e.currentTarget.textContent.trim();
//        const selectedOptionValue = inputElement ? inputElement.value : null;
//        setSelectParking(selectedOptionName);
//        setSelectParkingId(parseInt(selectedOptionValue));
//        setOpenSelectParking(false);
//        console.log('Selected Parking:', selectedOptionName);
//        console.log('Parking ID:', selectedOptionValue);
//      };

//     if (isLoading) {
//         return (
//           <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//             <Loading />
//           </div>
//         );
//     }    
      
//     if (!drivers) {
//         return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Drivers data available</div>;
//     }

//        return (
//               <>
//               <div className='flex flex-col gap-10 '>
//               <div className="lg:w-[30%] sm:w-full">
//                      <DropDownMenu
//                      ref={dropdownParkingRef}
//                      handleOpen={handleOpenSelectParking}
//                      handleOpenOption={handleSelectParking}
//                      stateoption={selectParking}
//                      openMenu={openSelectParking}
//                      options={parkingData}
//                      />
//                 </div>

//                 <div className='w-full flex flex-wrap gap-10'>
//                   {/* Location list */}
//                   {drivers.map((driver) => (
//                     <div key={driver.id} className='w-full lg:w-[45%] h-full lg:h-[200px]  p-4 pr-0 flex lg:flex-row sm:flex-col bg-gray-300 rounded-lg shadow-lg mb-4'>
//                       <div className='w-1/6 sm:w-full p-2'>
//                         <img src={`data:image/jpeg;base64,${driver.image}`} alt="" className='w-full h-full object-contain rounded-md'/>
//                       </div>
//                       <div className='w-5/6 sm:w-full p-4 text-black flex justify-between'>
//                       <div>
//                         <h1 className='text-xl font-semibold mb-1'> Name :{driver.name}</h1>
//                         <h1 className='text-xl font-semibold mb-1'> Phone :{driver.phone}</h1>
//                         <h1 className='text-xl font-semibold mb-1'> Email :{driver.email}</h1>
//                         <h1 className='text-xl font-semibold mb-1'> Salary :{driver.salary}</h1>
//                         {/* <p className='text-lg'>{location.address_in_detail}</p> */}
//                       </div>
//                       </div>
//                     </div>
//                   ))}
//                  </div> 
//               </div>               
//               </>
//        )
//     }

// export default AssignDriverPage


// import React, { useEffect, useState, useRef } from 'react';
// import { useAuth } from '../../Context/Auth';
// import Loading from '../../Components/Loading';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import DropDownMenu from '../../Components/DropDownMenu';

// const AssignDriverPage = () => {
//     const auth = useAuth();
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const [drivers, setDrivers] = useState([]);
//     const [parkingData, setParkingData] = useState([]);
//     const [filteredDrivers, setFilteredDrivers] = useState([]);
    
//     const [selectParking, setSelectParking] = useState('Select Parking');
//     const [selectParkingId, setSelectParkingId] = useState(null);  // Store parkingId
//     const [openSelectParking, setOpenSelectParking] = useState(false);
    
//     const dropdownParkingRef = useRef();

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get('https://transitstation.online/api/admin/parkingdrivers', {
//                 headers: {
//                     Authorization: `Bearer ${auth.user.token}`,
//                 },
//             });
//             if (response.status === 200) {
//                 console.log(response.data);
//                 setDrivers(response.data.drivers);
//                 setParkingData(response.data.parkings);
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

//     useEffect(() => {
//         // Filter drivers by parkingId when the parking selection changes
//         if (selectParkingId) {
//             const filtered = drivers.filter(driver => driver.parking_id=== selectParkingId);
//             setFilteredDrivers(filtered);
//         } else {
//             setFilteredDrivers(drivers); // Show all drivers if no parking is selected
//         }
//     }, [selectParkingId, drivers]);

//     const handleOpenSelectParking = () => {
//         setOpenSelectParking(!openSelectParking);
//     };

//     const handleSelectParking = (e) => {
//         const inputElement = e.currentTarget.querySelector('.inputVal');
//         const selectedOptionName = e.currentTarget.textContent.trim();
//         const selectedOptionValue = inputElement ? inputElement.value : null;
//         setSelectParking(selectedOptionName);
//         setSelectParkingId(parseInt(selectedOptionValue));  // Set selected parkingId
//         setOpenSelectParking(false);
//         console.log('Selected Parking:', selectedOptionName);
//         console.log('Parking ID:', selectedOptionValue);
//     };

//     if (isLoading) {
//         return (
//             <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
//                 <Loading />
//             </div>
//         );
//     }

//     if (!drivers.length) {
//         return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Drivers data available</div>;
//     }

//     return (
//         <>
//             <div className='flex flex-col gap-10 '>
//                 <div className="lg:w-[30%] sm:w-full">
//                     <DropDownMenu
//                         ref={dropdownParkingRef}
//                         handleOpen={handleOpenSelectParking}
//                         handleOpenOption={handleSelectParking}
//                         stateoption={selectParking}
//                         openMenu={openSelectParking}
//                         options={parkingData}
//                     />
//                 </div>

//                 <div className='w-full flex flex-wrap gap-10'>
//                     {/* Driver list filtered by parking */}
//                     {filteredDrivers.length > 0 ? filteredDrivers.map((driver) => (
//                         <div key={driver.id} className='w-full lg:w-[45%] h-full lg:h-[200px] p-4 pr-0 flex lg:flex-row sm:flex-col bg-gray-300 rounded-lg shadow-lg mb-4'>
//                             <div className='w-1/6 sm:w-full p-2'>
//                                 <img src={`data:image/jpeg;base64,${driver.image}`} alt="" className='w-full h-full object-contain rounded-md' />
//                             </div>
//                             <div className='w-5/6 sm:w-full p-4 text-black flex justify-between'>
//                                 <div>
//                                     <h1 className='text-xl font-semibold mb-1'> Name: {driver.name}</h1>
//                                     <h1 className='text-xl font-semibold mb-1'> Phone: {driver.phone}</h1>
//                                     <h1 className='text-xl font-semibold mb-1'> Email: {driver.email}</h1>
//                                     <h1 className='text-xl font-semibold mb-1'> Salary: {driver.salary}</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     )) : (
//                         <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No drivers available for the selected parking.</div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AssignDriverPage;


import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AssignDriverPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // To get request.id from state.location
    const { requestId } = location.state || {}; // Destructure requestId from location state

    const [isLoading, setIsLoading] = useState(false);
    const [drivers, setDrivers] = useState([]);
    const [parkingData, setParkingData] = useState([]);
    const [filteredDrivers, setFilteredDrivers] = useState([]);
    
    const [selectParking, setSelectParking] = useState('Select Parking');
    const [selectParkingId, setSelectParkingId] = useState(null);
    const [openSelectParking, setOpenSelectParking] = useState(false);

    const [showConfirmPopup, setShowConfirmPopup] = useState(false); // To control modal visibility
    const [selectedDriver, setSelectedDriver] = useState(null); // Store the selected driver

    const dropdownParkingRef = useRef();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://transitstation.online/api/admin/parkingdrivers', {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });
            if (response.status === 200) {
                setDrivers(response.data.drivers);
                setParkingData(response.data.parkings);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(requestId)
    }, []);

    useEffect(() => {
        if (selectParkingId) {
            const filtered = drivers.filter(driver => driver.parking_id === selectParkingId);
            setFilteredDrivers(filtered);
        } else {
            setFilteredDrivers(drivers);
        }
    }, [selectParkingId, drivers]);

    const handleOpenSelectParking = () => {
        setOpenSelectParking(!openSelectParking);
    };

    const handleSelectParking = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectParking(selectedOptionName);
        setSelectParkingId(parseInt(selectedOptionValue));
        setOpenSelectParking(false);
    };

    const handleApproveClick = (driver) => {
        setSelectedDriver(driver); // Set selected driver for confirmation
        setShowConfirmPopup(true); // Show confirmation modal
    };

    const handleConfirmSelection = async () => {
        try {
            const response = await axios.post(`https://transitstation.online/api/admin/request/selectdriver/${requestId}`, {
                driver_id: selectedDriver.id, // Sending the selected driver ID
            }, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });

            if (response.status === 200) {
                console.log('Driver assigned successfully!');
                setShowConfirmPopup(false); // Close the modal after success
            }
        } catch (error) {
            console.error('Error assigning driver:', error);
        }
    };

    const handleCancelSelection = () => {
        setShowConfirmPopup(false); // Close the modal without confirming
    };

    if (isLoading) {
        return (
            <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
                <Loading />
            </div>
        );
    }

    if (!drivers.length) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Drivers data available</div>;
    }

    return (
        <>
            <div className='flex flex-col gap-10 '>
                <div className="lg:w-[30%] sm:w-full">
                    <DropDownMenu
                        ref={dropdownParkingRef}
                        handleOpen={handleOpenSelectParking}
                        handleOpenOption={handleSelectParking}
                        stateoption={selectParking}
                        openMenu={openSelectParking}
                        options={parkingData}
                    />
                </div>

                <div className='w-full flex flex-wrap gap-10'>
                    {filteredDrivers.length > 0 ? filteredDrivers.map((driver) => (
                        <div key={driver.id} className='w-full lg:w-[45%] h-full lg:h-[250px] p-4 pr-0 flex lg:flex-row sm:flex-col bg-gray-300 rounded-lg shadow-lg mb-4'>
                            <div className='w-1/6 sm:w-full p-2'>
                                <img src={`data:image/jpeg;base64,${driver.image}`} alt="" className='w-full h-full object-contain rounded-md' />
                            </div>
                            <div className='w-5/6 sm:w-full gap-7 p-4 text-black flex flex-col justify-between'>
                                <div>
                                    <h1 className='text-xl font-semibold mb-1'> Name: {driver.name}</h1>
                                    <h1 className='text-xl font-semibold mb-1'> Phone: {driver.phone}</h1>
                                    <h1 className='text-xl font-semibold mb-1'> Email: {driver.email}</h1>
                                    <h1 className='text-xl font-semibold mb-1'> Salary: {driver.salary}</h1>
                                </div>
                                <div>
                                    <button
                                        className="bg-mainColor font-semibold text-center text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleApproveClick(driver)}
                                    >
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No drivers available for the selected parking.</div>
                    )}
                </div>

                {/* Confirmation Popup */}
                {showConfirmPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg lg:w-1/3 sm:w-2/3">
                            <h2 className="text-2xl mb-4">Are you sure you want to select {selectedDriver?.name}?</h2>
                            <div className="flex justify-end gap-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleCancelSelection}>Cancel</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleConfirmSelection}>Sure</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default AssignDriverPage;
