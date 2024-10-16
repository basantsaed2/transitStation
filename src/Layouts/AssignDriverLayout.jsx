import React from 'react'
import { AssignDriverPage } from '../Pages/AllPages'
import { useNavigate } from 'react-router-dom'
import HeaderPageSection from '../Components/HeaderPageSection'

const AssignDriverLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Drivers" />
              <AssignDriverPage/>
              </>
       )
}

export default AssignDriverLayout
