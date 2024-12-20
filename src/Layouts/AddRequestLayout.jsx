import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddRequestPage } from '../Pages/AllPages'

const AddRequestLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add New Request" />
              <AddRequestPage/>
              </>
       )
}

export default AddRequestLayout
