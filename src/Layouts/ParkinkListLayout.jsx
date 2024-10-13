import React from 'react'
import {ParkingListPage} from '../Pages/AllPages'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate, useParams } from 'react-router-dom';

const ParkingListLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };
    const { parkingId } = useParams();
 
       return (
              <>
              <HeaderPageSection handleClick={handleGoBack} name="Car Parking" />
              <ParkingListPage parkingId={parkingId}/>
              </>
       )
}

export default ParkingListLayout
