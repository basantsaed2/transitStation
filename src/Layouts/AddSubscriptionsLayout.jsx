import React from 'react'
import { AddSubscriptionsPage } from '../Pages/AllPages'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'

const AddSubscriptionsLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Subscriptions" />
              <AddSubscriptionsPage/>
              </>
       )
}

export default AddSubscriptionsLayout