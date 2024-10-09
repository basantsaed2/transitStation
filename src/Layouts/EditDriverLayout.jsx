import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import { EditDriverPage } from '../Pages/AllPages'

const EditDriversLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Driver" /> 
              <EditDriverPage/>
              </>
       )
}

export default EditDriversLayout
