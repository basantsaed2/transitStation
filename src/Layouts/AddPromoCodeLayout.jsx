import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddPromoCodePage } from '../Pages/AllPages'

const AddPromoCodeLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add PromoCode" />
              <AddPromoCodePage/>
              </>
       )
}

export default AddPromoCodeLayout
