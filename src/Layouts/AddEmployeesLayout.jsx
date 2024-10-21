import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import {AddEmployeesPage} from '../Pages/AllPages'
const AddEmployeesLayout = () => {

       const navigate = useNavigate();
       const handleGoBack = () => {
       navigate(-1, { replace: true });
       };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Suprvisor" />
              <AddEmployeesPage/>
              </>
       )
}

export default AddEmployeesLayout

