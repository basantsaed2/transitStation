import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import { AddDriverPage } from '../Pages/AllPages'

const AddDriversLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
               <HeaderPageSection handleClick={handleGoBack} name="Add Driver" />
              <AddDriverPage/>
              </>
       )
}

export default AddDriversLayout
