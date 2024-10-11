import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../../Components/InputCustom';
import { Button } from '../../../Components/Button';
import axios from 'axios';
import Loading from '../../../Components/Loading';
import { useAuth } from '../../../Context/Auth';
import { useNavigate } from 'react-router-dom';

const  AddRevenueTypePage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [revenueType, setRevenueType] = useState('');

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

    const handleSubmitAdd = async (event) => {
    event.preventDefault();

    if (!revenueType) {
        auth.toastError('Please Enter Revenue Type.');
        return;
    }

    const formData = new FormData();
    formData.append('type_name', revenueType);
    
    for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
    }        

    setIsLoading(true);
    try {
        const response = await axios.post('https://transitstation.online/api/admin/revenue/addtype',formData, {
            headers: {
                Authorization: `Bearer ${auth.user.token}`,
                'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
            },
        });

        if (response.status === 200) {
            auth.toastSuccess('Revenue Type added successfully!');
            handleGoBack();
        } else {
            auth.toastError('Failed to add Revenue Type.');
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
                    <InputCustom
                        type="text"
                        placeholder="Type"
                        borderColor="mainColor"
                        value={revenueType}
                        onChange={(e) => setRevenueType(e.target.value)}
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

export default AddRevenueTypePage
