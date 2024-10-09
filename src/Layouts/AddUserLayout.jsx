import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddUserPage } from '../Pages/AllPages'

const AddUserLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add User" />
              <AddUserPage/>
              </>
       )
}

export default AddUserLayout
