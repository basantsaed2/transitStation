import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AddDriverPage = () => {

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

    const [selectParking, setSelectParking] = useState('Select Parking');
    const [selectParkingId, setSelectParkingId] = useState([]);
    const [openSelectParking, setOpenSelectParking] = useState(false);

    const [selectLocation, setSelectLocation] = useState('Select Location');
    const [selectLocationId, setSelectLocationId] = useState([]);
    const [openSelectLocation, setOpenSelectLocation] = useState(false);

    const dropdownParkingRef =useRef();
    const dropdownLocationRef = useRef();
    const userImageRef = useRef();

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
                    //   setExpenseTypeData(response.data.key)
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
        setOpenSelectType(false);
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
             
    //        if (!expenseTypeData) {
    //            return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No expenses data available</div>;
    //        }
 
    // const handleSubmitAdd = async (event) => {
    //     event.preventDefault();
 
    //     if (!expenseDate) {
    //         auth.toastError('Please Enter Expense Date.');
    //         return;
    //     }
    //     if (!expenseAmount) {
    //         auth.toastError('Please Enter Expense Amount.');
    //         return;
    //     }
    //     if (!selectTypeId) {
    //         auth.toastError('Please Select Expense Type.');
    //         return;
    //     }
 
    //     const formData = new FormData();
    //     formData.append('date', expenseDate);
    //     formData.append('expence_amount', expenseAmount);
    //     formData.append('type_expence_id', selectTypeId);
 
    //     for (let pair of formData.entries()) {
    //            console.log(pair[0] + ', ' + pair[1]);
    //     }        
 
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.post('https://transitstation.online/api/admin/expence/add',formData, {
    //             headers: {
    //                 Authorization: `Bearer ${auth.user.token}`,
    //                 'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
    //             },
    //         });
 
    //         if (response.status === 200) {
    //             auth.toastSuccess('Expence added successfully!');
    //             handleGoBack();
    //         } else {
    //             auth.toastError('Failed to add Expence.');
    //         }
    //     } catch (error) {
    //         const errorMessages = error?.response?.data.errors;
    //         let errorMessageString = 'Error occurred';
 
    //         if (errorMessages) {
    //             errorMessageString = Object.values(errorMessages).flat().join(' ');
    //         }
    //         auth.toastError('Error', errorMessageString);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
 
       return (
        <>
         {/* <form className="w-full flex flex-col items-center justify-center gap-y-10">
                  <div className="w-full flex flex-wrap items-center justify-start gap-10">
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Name"
                              borderColor="mainColor"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Email"
                              borderColor="mainColor"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Password"
                              borderColor="mainColor"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Phone"
                              borderColor="mainColor"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Amount"
                              borderColor="mainColor"
                              value={salary}
                              onChange={(e) => setSalery(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
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
                      <div className="lg:w-[35%] sm:w-full">
                            <DropDownMenu
                            ref={dropdownParkingRef}
                            handleOpen={handleOpenSelectParking}
                            handleOpenOption={handleSelectParking}
                            stateoption={selectParking}
                            openMenu={openSelectParking}
                            options={parkingData}
                            />
                     </div>
                     <div className="lg:w-[35%] sm:w-full">
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
              </form> */}
        </>
       )
}

export default AddDriverPage
