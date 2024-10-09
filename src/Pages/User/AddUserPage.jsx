import React, { useEffect, useState ,useRef} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../Components/DropDownMenu';

const AddUserPage = () => {

    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState('');
    const [name , setName]=useState('')
    const [email , setEmail]=useState('')
    // const []

       return (
        <>
        <h1>adduser</h1>
        {/* <form className="w-full flex flex-col items-center justify-center gap-y-10">
            <div className="w-full flex flex-wrap items-center justify-start gap-10">
                <div className="lg:w-[35%] sm:w-full">
                    <InputCustom
                        type="date"
                        placeholder="Start_Date"
                        borderColor="mainColor"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="lg:w-[35%] sm:w-full">
                    <InputCustom
                        type="date"
                        placeholder="End_Date"
                        borderColor="mainColor"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className="lg:w-[35%] sm:w-full">
                    <InputCustom
                        type="text"
                        placeholder="Amount"
                        borderColor="mainColor"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
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

export default AddUserPage
