// import React, { useEffect, useState ,useRef} from 'react';
// import InputCustom from '../../Components/InputCustom';
// import { Button } from '../../Components/Button';
// import axios from 'axios';
// import Loading from '../../Components/Loading';
// import { useAuth } from '../../Context/Auth';
// import { useNavigate } from 'react-router-dom';
// import DropDownMenu from '../../Components/DropDownMenu';

// const AddCarColorPage = () => {

//     const auth = useAuth();
//     const [isLoading, setIsLoading] = useState(false);
//     const [colorName, setColorName] = useState(''); 
//     const [colorCode, setColorCode] = useState('#000000');

//     const handleGoBack = () => {
//        navigate(-1, { replace: true });
// };

//     const handleSubmitAdd = async (event) => {
//        event.preventDefault();

//        if (!colorName) {
//            auth.toastError('Please Enter Color Name.');
//            return;
//        }
//        if (!phone) {
//            auth.toastError('Please Enter Select Color.');
//            return;
//        }
      
//        const formData = new FormData();
//        formData.append('color_name', colorName);
//        formData.append('colors_code', colorCode);

//        for (let pair of formData.entries()) {
//               console.log(pair[0] + ', ' + pair[1]);
//        }        

//        setIsLoading(true);
//        try {
//            const response = await axios.post('https://transitstation.online/api/admin/color/add',formData, {
//                headers: {
//                    Authorization: `Bearer ${auth.user.token}`,
//                    'Content-Type': 'application/json', // Use JSON since we're sending a JSON object now
//                },
//            });

//            if (response.status === 200) {
//                auth.toastSuccess('Color added successfully!');
//                handleGoBack();
//            } else {
//                auth.toastError('Failed to add Color.');
//            }
//        } catch (error) {
//            const errorMessages = error?.response?.data.errors;
//            let errorMessageString = 'Error occurred';

//            if (errorMessages) {
//                errorMessageString = Object.values(errorMessages).flat().join(' ');
//            }   
//            auth.toastError('Error', errorMessageString);
//        } finally {
//            setIsLoading(false);
//        }
//    };

//        return (
//               <form onSubmit={handleSubmitAdd} className="w-full flex flex-col items-center justify-center gap-y-10">
//               <div className="w-full flex flex-wrap items-center justify-start gap-10">
//                   <div className="lg:w-[30%] sm:w-full">
//                       <InputCustom
//                           type="text"
//                           placeholder="Color Name"
//                           borderColor="mainColor"
//                           value={colorName}
//                           onChange={(e) => setColorName(e.target.value)}
//                       />
//                   </div>
//                    {/* Color Picker */}
//                    <div className="lg:w-[30%] sm:w-full">
//                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colorCode">
//                      Choose Color
//                      </label>
//                      <input
//                      type="color"
//                      id="colorCode"
//                      value={colorCode}
//                      onChange={(e) => setColorCode(e.target.value)}
//                      className="w-full h-12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-mainColor"
//                      />
//                      </div>
                
//               </div>
      
//               <div className="w-full flex sm:flex-col lg:flex-row items-center justify-start sm:gap-y-5 lg:gap-x-28 sm:my-8 lg:my-0">
//                   <div className="flex items-center justify-center w-72">
//                       <Button
//                           type="submit"
//                           Text="Done"
//                           BgColor="bg-mainColor"
//                           Color="text-white"
//                           Width="full"
//                           Size="text-2xl"
//                           px="px-28"
//                           rounded="rounded-2xl"
//                           // stateLoding={isLoading}
//                       />
//                   </div>
//                   <button onClick={handleGoBack} className="text-2xl text-mainColor">Cancel</button>
//               </div>
//              </form>
//        )
// }

// export default AddCarColorPage


import React, { useState } from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';

const AddCarColorPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('#000000'); // Default color is black

  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };

  const handleSubmitAdd = async (event) => {
    event.preventDefault();

    if (!colorName) {
      auth.toastError('Please Enter Color Name.');
      return;
    }
    if (!colorCode) {
      auth.toastError('Please Select Color.');
      return;
    }

    const formData = {
      color_name: colorName,
      color_code: colorCode,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://transitstation.online/api/admin/color/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.user.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        auth.toastSuccess('Color added successfully!');
        handleGoBack();
      } else {
        auth.toastError('Failed to add color.');
      }
    } catch (error) {
      const errorMessages = error?.response?.data.errors;
      const errorMessageString = errorMessages
        ? Object.values(errorMessages).flat().join(' ')
        : 'Error occurred';
      auth.toastError('Error', errorMessageString);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmitAdd}
      className="w-full flex flex-col items-center justify-center gap-y-10 px-6"
    >
      <div className="w-full flex flex-wrap items-center justify-start gap-10">
        {/* Color Name Input */}
        <div className="lg:w-[30%] sm:w-full">
          <InputCustom
            type="text"
            placeholder="Color Name"
            borderColor="mainColor"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </div>

        {/* Creative Color Picker */}
        <div className="lg:w-[30%] sm:w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="colorCode"
          >
            Choose Color
          </label>
          <div className="flex items-center gap-4">
            {/* Custom Color Picker */}
            <input
              type="color"
              id="colorCode"
              value={colorCode}
              onChange={(e) => setColorCode(e.target.value)}
              className="appearance-none w-20 h-20 border-2 border-gray-300 shadow-lg cursor-pointer focus:outline-none transition-transform transform hover:scale-110 duration-300 ease-in-out"
              style={{
                background: `linear-gradient(135deg, ${colorCode}, #ffffff)`,
              }}
            />

            {/* Color Preview Box */}
            {/* <div
              className="w-16 h-16 rounded-lg border-2 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
              style={{ backgroundColor: colorCode }}
            >
              <span className="text-white font-bold drop-shadow-lg">
                {colorCode.toUpperCase()}
              </span>
            </div> */}
          </div>
          {/* <p className="mt-2 text-sm text-gray-600">
            Current Color Code: <span className="font-semibold">{colorCode}</span>
          </p> */}
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
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
            stateLoading={isLoading}
          />
        </div>
        <button
          onClick={handleGoBack}
          className="text-2xl text-mainColor hover:underline transition-all ease-in-out duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddCarColorPage;
