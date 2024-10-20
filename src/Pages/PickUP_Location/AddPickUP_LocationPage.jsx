import React, { useState, useRef } from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';

const AddPickUP_LocationPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [addressImage, setAddressImage] = useState('');
    const addressImageRef = useRef();

    const handleGoBack = () => {
        navigate(-1, { replace: true });
    };

    const handleImageClick = () => {
        if (addressImageRef.current) {
            addressImageRef.current.click(); // Trigger a click on the hidden file input
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAddressImage(reader.result); // Set Base64 string of the image
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmitAdd = async (event) => {
        event.preventDefault();

        if (!address) {
            auth.toastError('Please Enter Address.');
            return;
        }
        if (!addressDetail) {
            auth.toastError('Please Enter Address Detail.');
            return;
        }
        if (!addressImage) {
            auth.toastError('Please Enter Address Location Image.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post('https://transitstation.online/api/admin/locations/add', {
                address:address,
                address_in_detail: addressDetail,
                pick_up_address: addressDetail,
                location_image: addressImage // Sending image as a Base64 string
            }, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                    'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
                },
            });

            if (response.status === 200) {
                auth.toastSuccess('PickUp Location added successfully!');
                handleGoBack();
            } else {
                auth.toastError('Failed to add PickUp Location.');
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
                            placeholder="Address"
                            borderColor="mainColor"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="lg:w-[30%] sm:w-full">
                        <InputCustom
                            type="text"
                            placeholder="Address in Detail"
                            borderColor="mainColor"
                            value={addressDetail}
                            onChange={(e) => setAddressDetail(e.target.value)}
                        />
                    </div>

                    <div className="lg:w-[30%] sm:w-full">
                        <InputCustom
                            type="text"
                            placeholder="Image"
                            bgColor="bg-[#EEEEEE]"
                            upload="true"
                            placeholderColor="mainColor"
                            value={addressImage}
                            readOnly={true}
                            onClick={handleImageClick}
                        />
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*" // Optional: to restrict file selection to images only
                            onChange={handleImageChange}
                            ref={addressImageRef}
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
    );
}

export default AddPickUP_LocationPage;
