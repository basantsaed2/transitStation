import React, { useEffect,useRef, useState ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { ParkingDataContext } from '../../Layouts/EditParkingLayout';

const EditParkingPage = () => {

       const parkingContent = useContext(ParkingDataContext);

       const auth = useAuth();
       const navigate = useNavigate();
       const [isLoading, setIsLoading] = useState(false);
       const [parkingName, setParkingName] = useState('');
       const [CarCapacity, setCarCapacity] = useState('');
       const [ParkingLocation, setParkingLocation] = useState('');

       useEffect(() => {
              if (parkingContent) {
                     setParkingName(parkingContent.name|| '')
                     setCarCapacity(parkingContent.capacity|| '')
                     setParkingLocation(parkingContent.location|| '')
              }
       }, [parkingContent]);
   
       const handleGoBack = () => {
           navigate(-1, { replace: true });
       };
   
       const handleSubmitEdit = async (parkingId,  event) => {
           event.preventDefault();
   
           if (!parkingName) {
               auth.toastError('Please Enter Parking Name.');
               return;
           }
           if (!CarCapacity) {
               auth.toastError('Please Enter Parking Car Capacity.');
               return;
           }
           if (!ParkingLocation) {
               auth.toastError('Please Enter Parking Location.');
               return;
           }
   
           setIsLoading(true);
           try {
               const response = await axios.put(`https://transitstation.online/api/admin/parking/update/${parkingId}`, {
                   name: parkingName,
                   capacity: CarCapacity,
                   location: ParkingLocation // Sending image as a Base64 string
               }, {
                   headers: {
                       Authorization: `Bearer ${auth.user.token}`,
                       'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                   },
               });
   
               if (response.status === 200) {
                   auth.toastSuccess('Parking Updated successfully!');
                   handleGoBack();
               } else {
                   auth.toastError('Failed to Updated Parking.');
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
              <form onSubmit={(event) => handleSubmitEdit(parkingContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
                  <div className="w-full flex flex-wrap items-center justify-start gap-10">
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Name"
                              borderColor="mainColor"
                              value={parkingName}
                              onChange={(e) => setParkingName(e.target.value)}
                          />
                      </div>
      
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Car Capacity"
                              borderColor="mainColor"
                              value={CarCapacity}
                              onChange={(e) => setCarCapacity(e.target.value)}
                          />
                      </div>
      
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Location"
                              borderColor="mainColor"
                              value={ParkingLocation}
                              onChange={(e) => setParkingLocation(e.target.value)}
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

export default EditParkingPage
