import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddPlanPage } from '../Pages/AllPages'

const AddPlanLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Plan" />
              <AddPlanPage/>
              </>
       )
}

export default AddPlanLayout
