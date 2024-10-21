import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom'
import {AddCarColorPage} from '../Pages/AllPages'
const AddCarColorLayout = () => {

       const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Color" />
              <AddCarColorPage/>
              </>
       )
}

export default AddCarColorLayout
