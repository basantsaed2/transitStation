import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import { AddExpensesTypePage } from '../Pages/AllPages'

const  AddExpensesTypeLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Expenses Type" />
              <AddExpensesTypePage/>
              </>
       )
}

export default AddExpensesTypeLayout
