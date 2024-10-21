import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import {AddPermissionPage} from '../Pages/AllPages'
import { useNavigate } from 'react-router-dom'

const AddPermissionLayout = () => {

       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Role" />
              <AddPermissionPage/>
              </>
       )
}

export default AddPermissionLayout
