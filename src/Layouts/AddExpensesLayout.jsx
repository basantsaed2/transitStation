import React from 'react'
import { AddExpensesPage } from '../Pages/AllPages'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'

const AddExpensesLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Expenses" />
              <AddExpensesPage/>
              </>
       )
}

export default AddExpensesLayout
