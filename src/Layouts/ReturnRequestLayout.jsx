import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { ReturnRequestPage } from '../Pages/AllPages'

const ReturnRequestLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Return Request" />
              <ReturnRequestPage/>
              </>
       )
}

export default ReturnRequestLayout
