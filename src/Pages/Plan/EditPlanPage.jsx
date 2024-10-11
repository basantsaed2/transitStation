import React, { useEffect, useState ,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import { PlanDataContext } from '../../Layouts/EditPlanLayout';

const EditPlanPage = () => {
       const planContent = useContext(PlanDataContext);

       const auth = useAuth();
       const navigate = useNavigate();
       const [isLoading, setIsLoading] = useState(false);
       const [name, setName] = useState('');
       const [price, setPrice] = useState('');
       const [discount, setDiscountPrice] = useState('');
       const [duration, setDuration] = useState('');

       useEffect(() => {
              if (planContent) {
                     setName(planContent.offer_name|| '')
                     setPrice(planContent.price|| '')
                     setDiscountPrice(planContent.price_discount|| '')
                     setDuration(planContent.duration|| '')
              }
       }, [planContent]);
   
       const handleGoBack = () => {
           navigate(-1, { replace: true });
       };
   
       const handleSubmitEdit = async (planId, event) => {
       event.preventDefault();
   
       if (!name) {
           auth.toastError('Please Enter Plan Name.');
           return;
       }
       if (!price) {
           auth.toastError('Please Enter Plan Price.');
           return;
       }
       if (!discount) {
           auth.toastError('Please Enter Plan Price Discount.');
           return;
       }
       if (!duration) {
           auth.toastError('Please Enter Plan Price Duration.');
           return;
       }
   
       const formData = new FormData();
       formData.append('offer_name', name);
       formData.append('price', price);
       formData.append('price_discount', discount);
       formData.append('duration', duration);
   
       for (let pair of formData.entries()) {
               console.log(pair[0] + ', ' + pair[1]);
       }        
   
       setIsLoading(true);
       try {
           const response = await axios.put(`https://transitstation.online/api/admin/plan/update/${planId}`,formData, {
               headers: {
                   Authorization: `Bearer ${auth.user.token}`,
                   'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
               },
           });
   
           if (response.status === 200) {
               auth.toastSuccess('Plan Updated successfully!');
               handleGoBack();
           } else {
               auth.toastError('Failed to Updated Plan.');
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
              <form onSubmit={(event) => handleSubmitEdit(planContent.id, event)} className="w-full flex flex-col items-center justify-center gap-y-10">
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
                              type="text"
                              placeholder="Price"
                              borderColor="mainColor"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Price After Discount"
                              borderColor="mainColor"
                              value={discount}
                              onChange={(e) => setDiscountPrice(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[30%] sm:w-full">
                          <InputCustom
                              type="number"
                              placeholder="Duration"
                              borderColor="mainColor"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
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

export default EditPlanPage
