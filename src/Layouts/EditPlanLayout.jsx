import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { EditPlanPage } from '../Pages/AllPages'
import { useNavigate ,useParams} from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const PlanDataContext = createContext();

const EditPlanLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allPlansData, setAllPlansData] = useState([]);
       const [planEdit, setPlanEdit] = useState(null);
       const { planId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/plan', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllPlansData(response.data.plans)
                            }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
       fetchData(); }, []);

       useEffect(() => {
              if (allPlansData.length > 0 && planId) {
                     const filteredPlan = allPlansData.find(
                     (plan) => plan.id === parseInt(planId)
                     );
                     setPlanEdit(filteredPlan);
              }
              }, [allPlansData, planId]);
              
              console.log('allPlanData', allPlansData); // Logging the whole array
              console.log('PlanEditData', planEdit);

       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Plan" />
              <PlanDataContext.Provider value={planEdit}>
                     <EditPlanPage/>
              </PlanDataContext.Provider>
              </>
       )
}

export default EditPlanLayout