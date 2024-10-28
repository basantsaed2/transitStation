import React, { createContext, useEffect, useState } from 'react';
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate ,useParams} from 'react-router-dom';
import { EditPromoCodePage } from '../Pages/AllPages'
import Loading from '../Components/Loading';
import axios from 'axios';
import { useAuth } from '../Context/Auth';

export const PromoCodeContext = createContext();

const EditPromoCodeLayout = () => {

       const auth = useAuth();
       const [isLoading, setIsLoading] = useState(false);
       const [allPromoCodeData, setAllPromoCodeData] = useState([]);
       const [promoCodeEdit, setPromoCodeEdit] = useState(null);
       const { promoId } = useParams();

       useEffect(() => {
              const fetchData = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://transitstation.online/api/admin/promocodes', {
                                   headers: {
                                          Authorization: `Bearer ${auth.user.token}`,
                                   },
                            });
                            if (response.status === 200) {
                                   console.log(response.data)
                                   setAllPromoCodeData(response.data.promocodes)
                            }
                     } catch (error) {
                            console.error('Error fetching data:', error);
                     } finally {
                            setIsLoading(false);
                     }
                 };
       fetchData(); }, []);

       useEffect(() => {
              if (allPromoCodeData.length > 0 && promoId) {
                     const filteredPromoCode = allPromoCodeData.find(
                     (code) => code.id === parseInt(promoId)
                     );
                     setPromoCodeEdit(filteredPromoCode);
              }
              }, [allPromoCodeData, promoId]);
              
              console.log('allPromoCodeData', allPromoCodeData); // Logging the whole array
              console.log('PromoCodeEditData', promoCodeEdit);


       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit PromoCode" />
              <PromoCodeContext.Provider value={promoCodeEdit}>
                     <EditPromoCodePage/>
              </PromoCodeContext.Provider>
              </>
       )
}

export default EditPromoCodeLayout
