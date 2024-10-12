import React, { useEffect, useState ,useRef,useContext} from 'react';
import InputCustom from '../../Components/InputCustom';
import { Button } from '../../Components/Button';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';
import { useNavigate ,Link } from 'react-router-dom';
import { FaPhone, FaMoneyBillAlt, FaMapMarkerAlt, FaCar } from 'react-icons/fa'; // For icons
import { MdModeEdit } from 'react-icons/md'; // Edit icon
import { DriverProfileDataContext } from '../../Layouts/DriverProfileLayout';
import { LuUser2 } from "react-icons/lu";

const ProfileCard = () => {
    const driverContent = useContext(DriverProfileDataContext);

    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [driverId , setDriverId]=useState('')

    const [name , setName]=useState('')
    const [email , setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [salary,setSalery]=useState('')
    const [carCount,setCarCount]=useState('')
    const [userImage, setUserImage] = useState('');

    const [parkingData ,setParkingData] =useState([])
    const [locationData ,setLocationData] =useState([])

    const [selectParking, setSelectParking] = useState('Select Parking');
    const [selectParkingId, setSelectParkingId] = useState([]);
    const [openSelectParking, setOpenSelectParking] = useState(false);

    const [selectLocation, setSelectLocation] = useState('Select Location');
    const [selectLocationId, setSelectLocationId] = useState([]);
    const [openSelectLocation, setOpenSelectLocation] = useState(false);

    const dropdownParkingRef =useRef();
    const dropdownLocationRef = useRef();
    const userImageRef = useRef();

    useEffect(() => {
           if (driverContent) {
                  setDriverId(driverContent.id|| '')
                  setName(driverContent.name|| '')
                  setEmail(driverContent.email|| '')
                  setPhone(driverContent.phone|| '')
                  setSalery(driverContent.salary|| '')
                  setCarCount(driverContent.cars_per_mounth|| '')
                  setUserImage(driverContent.image|| '')
           }
    }, [driverContent]);
  return (
    <div className="w-full p-6">
      {/* Profile Picture and Name */}
      <div className="flex lg:items-start sm:items-center gap-10 mb-6 sm:flex-col">
        <div className='w-48 h-48 rounded-full border-solid	relative'>
            <img
            src={userImage}// Use a real image URL or state
            alt="ProfileImage"
            className="w-full h-full rounded-full"
            />
            {/* <div className="flex justify-between items-center w-full ml-4"> */}
            <Link to={`../edit/${driverId}`} state={driverId} type="button">
            <button className="bg-mainColor p-2 rounded-full absolute flex items-center bottom-5 right-0 hover:bg-gray-300">
                <MdModeEdit size={20} />
            </button>
            </Link>
            {/* </div> */}
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>

      {/* Profile Details */}
      <div className="space-y-4">

        <div className="flex gap-5 items-center">
            <div className='w-10 h-10 bg-gray-200 rounded-full p-2 flex justify-center'>
            <LuUser2 size={18} />
            </div>
          <span className="text-xl font-semibold">Name: {name}</span>
        </div>

        <div className="flex gap-5 items-center">
            <div className='w-10 h-10 bg-gray-200 rounded-full p-2 flex justify-center'>
            <FaPhone size={18} />
            </div>
          <span className="text-xl font-semibold">Phone: {phone}</span>
        </div>

        <div className="flex gap-5 items-center">
            <div className='w-10 h-10 bg-gray-200 rounded-full p-2 flex justify-center'>
            <FaMoneyBillAlt size={18} />
            </div>
          <span className="text-xl font-semibold">Salary: {salary}</span>
        </div>

        {/* <div className="flex gap-5 items-center">
            <div className='w-10 h-10 bg-gray-200 rounded-full p-2 flex justify-center'>
            <FaMapMarkerAlt size={18} />
            </div>
          <span className="text-xl font-semibold">Pick-Up Location: {location}</span>
        </div> */}

        <div className="flex gap-5 items-center">
            <div className='w-10 h-10 bg-gray-200 rounded-full p-2 flex justify-center'>
            <FaCar size={18} />
            </div>
          <span className="text-xl font-semibold"># Cars Per Month: {carCount}</span>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;

