import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddParkingPage} from '../Pages/AllPages'

const AddParkingLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add Parking" />
              <AddParkingPage/>
              </>
       )
}

export default AddParkingLayout