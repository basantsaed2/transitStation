import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/Auth';
import Loading from '../../Components/Loading';
import axios from 'axios';
import {Button} from '../../Components/Button'
import {ButtonAdd} from '../../Components/Button'
import { Link } from 'react-router-dom';
import {Wroning,DeleteIcon,EditIcon} from '../../Components/Icons/All_Icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const RequestPage = () => {

    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("current");
    const [requests, setRequests] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get('https://transitstation.online/api/admin/request', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setRequests(response.data)
               }
        } catch (error) {
               console.error('Error fetching data:', error);
        } finally {
               setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []);

    if (isLoading) {
        return (
          <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
            <Loading />
          </div>
        );
    }    
      
    if (!requests) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Request data available</div>;
    }
       return (
              <>
                <div className='w-full'>
                    <div className="flex w-full gap-5 mb-5">
                        {/* Tab buttons */}
                        <div className='sm:w-1/4'> 
                        <Button
                        Text="Current"
                        Width="full"
                        px="px-1"
                        Size='text-xl'
                        BgColor={activeTab === "current" ? "bg-mainColor" : "bg-white"}
                        Color={activeTab === "current" ? "text-white" : "text-mainColor"}
                        handleClick={() => setActiveTab("current")}
                        />
                        </div>
                        <div className='sm:w-1/4'> 
                        <Button
                        Text="History"
                        Width="full"
                        px="px-1"
                        Size='text-xl'
                        BgColor={activeTab === "history" ? "bg-mainColor" : "bg-white"}
                        Color={activeTab === "history" ? "text-white" : "text-mainColor"}
                        handleClick={() => setActiveTab("history")}
                        />
                        </div>            
                    </div>
                    {activeTab === "current" && requests && (
                       <div className="w-full">
                       <div className="w-full flex flex-wrap items-center justify-start gap-10">
                        <div className='w-1/6'>
                        <Link to={'add'}>
                               <ButtonAdd isWidth="true" BgColor ="white" Color="mainColor" iconColor="mainColor"/>
                        </Link>
                        </div>
                       </div>
           
                       <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
                           <table className="w-full sm:min-w-0">
                               <thead className="w-full">
                                   <tr className="w-full border-b-2">
                                       <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Name</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Phone</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Plan</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Date</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Time</th>
                                       <th className="min-w-[180px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Location</th>
                                   </tr>
                               </thead>
                               <tbody className="w-full">
                                       {requests.map((request, index) => (
           
                                           <tr className="w-full border-b-2" key={request.id}>
                                                   <td
                                                           className="min-w-[80px] sm:min-w-[50px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {index + 1}
                                                   </td>
                                                   <td
                                                           className="min-w-[100px] sm:min-w-[100px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user?.name || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[100px] sm:min-w-[100px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user?.phone || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[100px] sm:min-w-[100px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user.subscription.offer?.offer_name || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[100px] sm:min-w-[100px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.pick_up_date || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[100px] sm:min-w-[100px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.request_time || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.location?.pick_up_address || 'Null'}
                                                   </td>             
                                           </tr>
                                       ))}
                               </tbody>
                           </table>
                       </div>
                   </div>  
                    )}

                    {/* {activeTab === "history" && requests && (
                       <div className="w-full">
                       <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
                           <table className="w-full sm:min-w-0">
                               <thead className="w-full">
                                   <tr className="w-full border-b-2">
                                       <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Name</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Phone</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Plan</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Date</th>
                                       <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Time</th>
                                       <th className="min-w-[100px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Location</th>
                                   </tr>
                               </thead>
                               <tbody className="w-full">
                                       {requests.map((request, index) => (
           
                                           <tr className="w-full border-b-2" key={request.id}>
                                                   <td
                                                           className="min-w-[80px] sm:min-w-[50px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {index + 1}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user?.name || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user?.phone || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.user.subscription[0].offer?.offer_name || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.pick_up_date || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.request_time || 'Null'}
                                                   </td>
                                                   <td
                                                           className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                                   >
                                                           {request.request_time || 'Null'}
                                                   </td>             
                                           </tr>
                                       ))}
                               </tbody>
                           </table>
                       </div>
                   </div>  
                    )} */}

      
                </div>
              </>
       )
}

export default RequestPage