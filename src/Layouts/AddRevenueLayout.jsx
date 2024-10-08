import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import { AddRevenuePage } from '../Pages/AllPages'

const AddRevenueLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Revenue" />
              <AddRevenuePage/>
              </>
       )
}

export default AddRevenueLayout
