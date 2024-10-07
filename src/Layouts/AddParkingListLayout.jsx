import React from 'react'
import {AddParkingListPage} from '../Pages/AllPages'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';

const AddParkingListLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };

       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Add In Parking List" />
              <AddParkingListPage/>
              </>
       )
}

export default AddParkingListLayout
