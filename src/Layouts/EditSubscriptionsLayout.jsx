import React, { createContext, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditSubscriptionsPage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const SubscriptionsDataContext = createContext();

const EditSubscriptionsLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allSubscriptionsData, setAllSubscriptionsData] = useState([]);
       const [subscriptionEdit, setSubscriptionEdit] = useState(null);
       const { subscriptionId } = useParams();

       useEffect(() => {
       const fetchData = async () => {
              setIsLoading(true);
              try {
                     const response = await axios.get('https://transitstation.online/api/admin/subscription', {
                            headers: {
                                   Authorization: `Bearer ${auth.user.token}`,
                            },
                     });
                     if (response.status === 200) {
                            console.log(response.data)
                            setAllSubscriptionsData(response.data.users)
                     }
              } catch (error) {
                     console.error('Error fetching data:', error);
              } finally {
                     setIsLoading(false);
              }
              };
              fetchData(); 
              }, []);

              useEffect(() => {
              if (allSubscriptionsData.length > 0 && subscriptionId) {
                     const filteredSubscription = allSubscriptionsData.find(
                     (Subscription) => Subscription.id === parseInt(subscriptionId)
                     );
                     setSubscriptionEdit(filteredSubscription);
              }
              }, [allSubscriptionsData, subscriptionId]);
              
              console.log('allSubscriptionsData', allSubscriptionsData); // Logging the whole array
              console.log('SubscriptionEditData', subscriptionEdit);

              const navigate = useNavigate();
              const handleGoBack = () => {
              navigate(-1, { replace: true });
              };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Subscription" />
              <SubscriptionsDataContext.Provider value={subscriptionEdit}>
                     <EditSubscriptionsPage/>
              </SubscriptionsDataContext.Provider>
              </>
       )
}

export default EditSubscriptionsLayout