import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import { AddRevenueTypePage } from '../Pages/AllPages'

const  AddRevenueTypeLayout = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Revenue Type" />
              <AddRevenueTypePage/>
              </>
       )
}

export default AddRevenueTypeLayout