import React from 'react'
import HeaderPageSection from '../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddPickUP_LocationPage} from '../Pages/AllPages'

const AddPickUP_LocationLayout = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1, { replace: true });
    };

       return (
              <>
                <HeaderPageSection handleClick={handleGoBack} name="Add Pick-up Location" />
                <AddPickUP_LocationPage/>
              </>
       )
}

export default AddPickUP_LocationLayout

