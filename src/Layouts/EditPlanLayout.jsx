import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { EditPlanPage } from '../Pages/AllPages'

const EditPlanLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit Plan" />
              <EditPlanPage/>
              </>
       )
}

export default EditPlanLayout