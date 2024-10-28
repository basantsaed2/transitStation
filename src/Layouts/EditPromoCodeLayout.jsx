import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { EditPromoCodePage } from '../Pages/AllPages'

const EditPromoCodeLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit PromoCode" />
              <EditPromoCodePage/>
              </>
       )
}

export default EditPromoCodeLayout
