import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';

const AddPlanPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscountPrice] = useState('');
    const [duration, setDuration] = useState('');

    const handleGoBack = () => {
        navigate(-1, { replace: true });
    };

    const handleSubmitAdd = async (event) => {
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
        const response = await axios.post('https://transitstation.online/api/admin/plan/add',formData, {
            headers: {
                Authorization: `Bearer ${auth.user.token}`,
                'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
            },
        });

        if (response.status === 200) {
            auth.toastSuccess('Plan added successfully!');
            handleGoBack();
        } else {
            auth.toastError('Failed to add Plan.');
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
                              placeholder="Price"
                              borderColor="mainColor"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
                          <InputCustom
                              type="text"
                              placeholder="Price After Discount"
                              borderColor="mainColor"
                              value={discount}
                              onChange={(e) => setDiscountPrice(e.target.value)}
                          />
                      </div>
                      <div className="lg:w-[35%] sm:w-full">
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

export default AddPlanPage
