import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { EditUserPage } from '../Pages/AllPages'

const EditUserLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Edit User" />
              <EditUserPage/>
              </>
       )
}

export default EditUserLayout

