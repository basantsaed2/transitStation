import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AddRequestPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data ,setData] =useState([])
    const [carData, setCarData] = useState([]);
    const [driverData, setDriverData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [locationData, setLocationData] = useState([]);

    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const [selectCar, setSelectCar] = useState('Select Car');
    const [selectCarId, setSelectCarId] = useState([]);
    const [openSelectCar, setOpenSelectCar] = useState(false);

    const [selectDriver, setSelectDriver] = useState('Select Driver');
    const [selectDriverId, setSelectDriverId] = useState([]);
    const [openSelectDriver, setOpenSelectDriver] = useState(false);

    const [selectUser, setSelectUser] = useState('Select User');
    const [selectUserId, setSelectUserId] = useState([]);
    const [openSelectUser, setOpenSelectUser] = useState(false);

    const [selectLocation, setSelectLocation] = useState('Select Pick_UP Location');
    const [selectLocationId, setSelectLocationId] = useState([]);
    const [openSelectLocation, setOpenSelectLocation] = useState(false);

    const dropdownCarRef = useRef();
    const dropdownDriverRef = useRef();
    const dropdownUserRef = useRef();
    const dropdownLocationRef = useRef();

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get('https://transitstation.online/api/admin/request/dropdown', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {                           
                      console.log(response.data)
                      setData(response.data)
                      setCarData(response.data.cars)
                      setDriverData(response.data.drivers)
                      setUserData(response.data.users)
                      setLocationData(response.data.locations)
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

     const handleOpenSelectCar = () => {
        setOpenSelectCar(!openSelectCar);
        setOpenSelectDriver(false);
        setOpenSelectUser(false)
        setOpenSelectLocation(false)
      };

      const handleOpenSelectDriver = () => {
        setOpenSelectCar(false);
        setOpenSelectDriver(!openSelectDriver);
        setOpenSelectUser(false)
        setOpenSelectLocation(false)
      };

      const handleOpenSelectUser = () => {
        setOpenSelectCar(false);
        setOpenSelectDriver(false);
        setOpenSelectUser(!openSelectUser)
        setOpenSelectLocation(false)
      };

      const handleOpenSelectLocation = () => {
        setOpenSelectCar(false);
        setOpenSelectDriver(false);
        setOpenSelectUser(false)
        setOpenSelectLocation(!openSelectLocation)
      };

      const handleSelectCar = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectCar(selectedOptionName);
        setSelectCarId(parseInt(selectedOptionValue));
        setOpenSelectCar(false);
        console.log('Selected Car:', selectedOptionName);
        console.log('Car ID:', selectedOptionValue);
      };

      const handleSelectDriver = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectDriver(selectedOptionName);
        setSelectDriverId(parseInt(selectedOptionValue));
        setOpenSelectDriver(false);
        console.log('Selected Driver:', selectedOptionName);
        console.log('Driver ID:', selectedOptionValue);
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

      const handleSelectLocation = (e) => {
        const inputElement = e.currentTarget.querySelector('.inputVal');
        const selectedOptionName = e.currentTarget.textContent.trim();
        const selectedOptionValue = inputElement ? inputElement.value : null;
        setSelectLocation(selectedOptionName);
        setSelectLocationId(parseInt(selectedOptionValue));
        setOpenSelectLocation(false);
        console.log('Selected Location:', selectedOptionName);
        console.log('Location ID:', selectedOptionValue);
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      const handleClickOutside = (event) => {
        if (dropdownCarRef.current && !dropdownCarRef.current.contains(event.target) &&
            dropdownDriverRef.current && !dropdownDriverRef.current.contains(event.target) &&
            dropdownUserRef.current && !dropdownUserRef.current.contains(event.target) &&
            dropdownLocationRef.current && !dropdownLocationRef.current.contains(event.target)  
        ) {
            setOpenSelectCar(false);   
            setOpenSelectDriver(false);
            setOpenSelectUser(false);
            setOpenSelectLocation(false)
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
            return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No data available</div>;
        }

        const handleSubmitAdd = async (event) => {
            event.preventDefault();
     
            if (!selectCarId) {
                auth.toastError('Please Select Car.');
                return;
            }
            if (!selectUserId) {
                auth.toastError('Please Select User.');
                return;
            }
            if (!selectDriverId) {
                auth.toastError('Please Select Driver.');
                return;
            }
            if (!selectLocationId) {
                auth.toastError('Please Select Pick_Up Location.');
                return;
            }
            if (!pickUpDate) {
                auth.toastError('Please Enter Pick_Up Date.');
                return;
            }
            if (!pickUpTime) {
                auth.toastError('Please Select Pick_Up Time.');
                return;
            }
            if (!returnDate) {
                auth.toastError('Please Enter Return Pick_Up Date.');
                return;
            }
     
            const formData = new FormData();
            formData.append('car_id', selectCarId);
            formData.append('location_id', selectLocationId);
            formData.append('driver_id', selectDriverId);
            formData.append('user_id', selectUserId);
            formData.append('pick_up_date', pickUpDate);
            formData.append('request_time', pickUpTime);
            formData.append('return_time', returnDate);

     
            for (let pair of formData.entries()) {
                   console.log(pair[0] + ', ' + pair[1]);
            }        
     
            setIsLoading(true);
            try {
                const response = await axios.post('https://transitstation.online/api/admin/request/make',formData, {
                    headers: {
                        Authorization: `Bearer ${auth.user.token}`,
                        'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                    },
                });
     
                if (response.status === 200) {
                    auth.toastSuccess('Request added successfully!');
                    handleGoBack();
                } else {
                    auth.toastError('Failed to add Request.');
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
                <div className="lg:w-[30%] sm:w-full">
                      <DropDownMenu
                      ref={dropdownUserRef}
                      handleOpen={handleOpenSelectUser}
                      handleOpenOption={handleSelectUser}
                      stateoption={selectUser}
                      openMenu={openSelectUser}
                      options={userData}
                      />
               </div>
                <div className="lg:w-[30%] sm:w-full">
                      <DropDownMenu
                      ref={dropdownDriverRef}
                      handleOpen={handleOpenSelectDriver}
                      handleOpenOption={handleSelectDriver}
                      stateoption={selectDriver}
                      openMenu={openSelectDriver}
                      options={driverData}
                      />
               </div>
               <div className="lg:w-[30%] sm:w-full">
                      <DropDownMenu
                      ref={dropdownCarRef}
                      handleOpen={handleOpenSelectCar}
                      handleOpenOption={handleSelectCar}
                      stateoption={selectCar}
                      openMenu={openSelectCar}
                      options={carData}
                      />
               </div>
               <div className="lg:w-[30%] sm:w-full">
                      <DropDownMenu
                      ref={dropdownLocationRef}
                      handleOpen={handleOpenSelectLocation}
                      handleOpenOption={handleSelectLocation}
                      stateoption={selectLocation}
                      openMenu={openSelectLocation}
                      options={locationData}
                      />
               </div>
                <div className="lg:w-[30%] sm:w-full">
                    <h1>Pick_Up_Date</h1>
                    <InputCustom
                        type="date"
                        placeholder="Pick_UP Date"
                        borderColor="mainColor"
                        value={pickUpDate}
                        onChange={(e) => setPickUpDate(e.target.value)}
                    />
                </div>
                <div className="lg:w-[30%] sm:w-full">
                <h1>Pick_Up_Time</h1>
                    <InputCustom
                        type="time"
                        placeholder="Pick_UP Time"
                        borderColor="mainColor"
                        value={pickUpTime}
                        onChange={(e) => setPickUpTime(e.target.value)}
                    />
                </div>
                <div className="lg:w-[30%] sm:w-full">
                <h1>Return Date</h1>
                    <InputCustom
                        type="Date"
                        placeholder="Pick_UP Return Date"
                        borderColor="mainColor"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
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

export default AddRequestPage
