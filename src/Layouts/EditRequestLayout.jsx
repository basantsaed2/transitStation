import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { EditRequestPage } from '../Pages/AllPages'

const EditRequestLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Request" />
              <EditRequestPage/>
              </>
       )
}

export default EditRequestLayout
