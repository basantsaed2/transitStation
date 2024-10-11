import React, { useEffect, useState ,useRef,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';
import { DriverDataContext } from '../../Layouts/EditDriverLayout';

const EditDriverPage = () => {
       const driverContent = useContext(DriverDataContext);

       const auth = useAuth();
       const navigate = useNavigate();
       const [isLoading, setIsLoading] = useState(false);
       const [name , setName]=useState('')
       const [email , setEmail]=useState('')
       const [password,setPassword]=useState('')
       const [phone,setPhone]=useState('')
       const [salary,setSalery]=useState('')
       const [carCount,setCarCount]=useState('')
       const [userImage, setUserImage] = useState('');
   
       const [parkingData ,setParkingData] =useState([])
       const [locationData ,setLocationData] =useState([])
   
       const [selectParking, setSelectParking] = useState('Select Parking');
       const [selectParkingId, setSelectParkingId] = useState([]);
       const [openSelectParking, setOpenSelectParking] = useState(false);
   
       const [selectLocation, setSelectLocation] = useState('Select Location');
       const [selectLocationId, setSelectLocationId] = useState([]);
       const [openSelectLocation, setOpenSelectLocation] = useState(false);
   
       const dropdownParkingRef =useRef();
       const dropdownLocationRef = useRef();
       const userImageRef = useRef();

       useEffect(() => {
              if (driverContent) {
                     setName(driverContent.name|| '')
                     setEmail(driverContent.email|| '')
                     setPhone(driverContent.phone|| '')
                     setSalery(driverContent.salary|| '')
                     setCarCount(driverContent.cars_per_mounth|| '')
                     setUserImage(driverContent.image|| '')
              }
       }, [driverContent]);
   
       const fetchData = async () => {
           setIsLoading(true);
           try {
                  const response = await axios.get('https://transitstation.online/api/admin/drivers/dropdown', {
                         headers: {
                                Authorization: `Bearer ${auth.user.token}`,
                         },
                  });
                  if (response.status === 200) {                           
                         console.log(response.data)
                         setParkingData(response.data.parkings)
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
    
        const handleOpenSelectParking = () => {
           setOpenSelectParking(!openSelectParking);
           setOpenSelectLocation(false)
         };
       const handleOpenSelectLocation = () => {
           setOpenSelectParking(false);
           setOpenSelectLocation(!openSelectLocation)
         };
    
        const handleSelectParking = (e) => {
           const inputElement = e.currentTarget.querySelector('.inputVal');
           const selectedOptionName = e.currentTarget.textContent.trim();
           const selectedOptionValue = inputElement ? inputElement.value : null;
           setSelectParking(selectedOptionName);
           setSelectParkingId(parseInt(selectedOptionValue));
           setOpenSelectParking(false);
           console.log('Selected Parking:', selectedOptionName);
           console.log('Parking ID:', selectedOptionValue);
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
           if (dropdownParkingRef.current && !dropdownParkingRef.current.contains(event.target) &&
               dropdownLocationRef.current && !dropdownLocationRef.current.contains(event.target)   
           ) {
               setOpenSelectParking(false); 
               setOpenSelectLocation(false);  
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
    
       const handleSubmitEdit = async (driverId ,event) => {
           event.preventDefault();
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
           if (!name) {
               auth.toastError('Please Enter Name.');
               return;
           }
           if (!emailRegex.test(email)) {
               auth.toastError('Please enter a valid email address.');
               return;
           }        
                 // Check if password is less than 6 characters
                 if(password){
                     if (password.length < 6) {
                            auth.toastError('The password field must be at least 6 characters.');
                            return;
                        }
                 }
           if (!phone) {
               auth.toastError('Please Enter Phone.');
               return;
           }
       //     if (!password) {
       //         auth.toastError('Please Enter Password.');
       //         return;
       //     }
           if (!salary) {
               auth.toastError('Please Enter Salary.');
               return;
           }
           if (!selectLocationId) {
               auth.toastError('Please Select Location.');
               return;
           }
           if (!selectParkingId) {
               auth.toastError('Please Select Parking.');
               return;
           }
    
           const formData = new FormData();
           formData.append('name', name);
           formData.append('email', email);
           formData.append('phone', phone);
           formData.append('password', password);
           formData.append('salary', salary);
           formData.append('cars_per_mounth', carCount);
           formData.append('image', userImage);
           formData.append('location_id', selectLocationId);
           formData.append('parking_id', selectParkingId);
    
           for (let pair of formData.entries()) {
                  console.log(pair[0] + ', ' + pair[1]);
           }        
    
           setIsLoading(true);
           try {
               const response = await axios.put(`https://transitstation.online/api/admin/drivers/update/${driverId}`,formData, {
                   headers: {
                       Authorization: `Bearer ${auth.user.token}`,
                       'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                   },
               });
    
               if (response.status === 200) {
                   auth.toastSuccess('Driver Updated successfully!');
                   handleGoBack();
               } else {
                   auth.toastError('Failed to Updated Driver.');
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
              <form onSubmit={(event) => handleSubmitEdit(driverContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
              <div className="w-full flex flex-wrap items-center justify-start gap-10">
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="text"
                          placeholder="Name"
                          borderColor="mainColor"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="email"
                          placeholder="Email"
                          borderColor="mainColor"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="password"
                          placeholder="Password"
                          borderColor="mainColor"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                      <InputCustom
                          type="text"
                          placeholder="Salary"
                          borderColor="mainColor"
                          value={salary}
                          onChange={(e) => setSalery(e.target.value)}
                      />
                  </div>
                  <div className="lg:w-[30%] sm:w-full">
                      <InputCustom
                          type="number"
                          placeholder="Car_Per_Month"
                          borderColor="mainColor"
                          value={carCount}
                          onChange={(e) => setCarCount(e.target.value)}
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
                        <DropDownMenu
                        ref={dropdownParkingRef}
                        handleOpen={handleOpenSelectParking}
                        handleOpenOption={handleSelectParking}
                        stateoption={selectParking}
                        openMenu={openSelectParking}
                        options={parkingData}
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
       )
}

export default EditDriverPage
