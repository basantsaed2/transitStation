import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Logo from '../../assets/Logo';

const LoginAdmin = () => {
    const auth = useAuth();
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
               console.log('Calling auth.login with data:', data); // Debugging line
               auth.login(data); // Call auth.login with the updated data
               console.log(type)

               setIsLoading(false);
               navigate("/dashboard", { replace: true });
        }
    }, [data]);

    const handleSubmit = async (event) => {
        console.log(email)
        console.log(password)
        console.log(type)
        event.preventDefault();

        if (!email || !password) {
            console.error("Email or Password is missing");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('https://transitstation.online/api/login', {
                email,
                password,
            });

            if (response.status === 200) {
                console.log(response.data)
                const userData = {
                    ...response.data,
                    roles: [response.data.role] // Assuming role is the user's role
                };
                auth.login(userData); // Call auth.login with the user data
                console.log('Login response:', response); // Debugging line
                auth.toastSuccess('Login successfully!');
                setData(userData);
                setType(response.data.role)
                navigate("/dashboard", { replace: true });
            } else {
                auth.toastError('Failed to login');
                setError('Failed to login');
                console.log("error", error);
            }
        } catch (error) {
            setError('There was an error posting the data!');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-around w-full lg:h-screen">
                <div className="flex items-center justify-center w-full lg:w-6/12 lg:h-full">
                    <div className="flex flex-col items-center justify-center h-5/6 gap-8 w-10/12">
                        <form className="w-full flex flex-col items-start justify-center gap-4 mt-10" onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col gap-6 items-end">
                                <div className='flex w-full text-left'>
                                   <h1 className='text-3xl text-thirdColor font-bold'>Log in to <span className='text-3xl font-bold text-mainColor'>Transit Station Car Parking,</span><br/>welcome back</h1>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="w-full border-b-2 border-mainColor outline-none px-2 py-3 text-2xl font-normal"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="relative w-full">
                                    <input
                                        type={show ? "text" : "password"}
                                        placeholder="password"
                                        className="w-full border-b-2 border-mainColor outline-none px-2 py-3 text-2xl font-normal"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {show ? (
                                        <IoMdEye
                                            className="absolute top-4 right-2 text-2xl text-right text-mainColor cursor-pointer"
                                            onClick={() => setShow(!show)}
                                        />
                                    ) : (
                                        <IoMdEyeOff
                                            className="absolute top-4 right-2 text-2xl text-right text-mainColor cursor-pointer"
                                            onClick={() => setShow(!show)}
                                        />
                                    )}
                                </div>

                                {error && <div className="w-full text-mainColor text-center text-2xl mb-4 font-bold">{error}</div>}
                                 
                                <button
                                type="submit"
                                className="w-full mt-10 text-center text-2xl font-medium text-white px-6 py-3 bg-mainColor rounded-2xl"
                                disabled={isLoading}
                            >
                                Log in
                            </button>
                            
                            </div>
                            {/* <button
                                type="submit"
                                className="w-full text-center text-2xl font-medium text-white px-6 py-3 bg-mainColor rounded-2xl"
                                disabled={isLoading}
                            >
                                Log in
                            </button> */}
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-6/12">
                    {/* Add Logo here if needed */}
                    <Logo/>                
                </div>
            </div>
        </>
    );
};

export default LoginAdmin;
