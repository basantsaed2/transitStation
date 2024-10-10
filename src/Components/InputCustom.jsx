import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const InputCustom = ({ type,bgColor,placeholderColor, required = true, minDate = true, borderColor = "none", placeholder, placeholderSize = false, value, readonly = false, onChange, iconDirection = false, textDirection = false, onClick, paddinLeft = 'pl-2', paddinRight = 'pr-2', upload = false, source }) => {
       const [show, setShow] = useState(false)
       const [currentDay, setCurrentDay] = useState(new Date());

       const formattedDate = currentDay.toISOString().split('T')[0]; // Format as YYYY-MM-DD

       if (type === "password") {
              return (<>
                     <div className="relative w-full">
                            <input type={show ? "text" : "password"} placeholder={placeholder} className={`w-full border-2 rounded-2xl outline-none ${textDirection ? "text-right" : "text-left"} px-2 py-3 text-2xl font-normal text-thirdColor border-${borderColor}`} value={value}
                                   onChange={onChange} required={required} />
                            {show ? (
                                   <IoMdEye
                                          className={`absolute top-4 ${iconDirection ? 'left-2' : 'right-2'} text-2xl text-mainColor cursor-pointer`}
                                          onClick={() => setShow(!show)}
                                   />
                            ) : (
                                   <IoMdEyeOff
                                          className={`absolute top-4 ${iconDirection ? 'left-2' : 'right-2'} text-2xl text-mainColor cursor-pointer`}
                                          onClick={() => setShow(!show)}
                                   />
                            )}

                     </div>
              </>)
       }
       if (type === "date") {
              return (
                     <>
                            <input
                                   type="date"
                                   placeholder={placeholder}
                                   className={`w-full border-2 rounded-2xl border-${borderColor} 
          outline-none px-2 py-3 text-2xl font-normal text-thirdColor`}
                                   value={value}
                                   onChange={onChange}
                                   min={minDate ? formattedDate : ''}  // Use the correctly formatted date
                                   required={required}
                            />
                     </>
              )
       }
       if (type === "dateEdit") {
              return (
                     <>
                            <input
                                   type="date"
                                   placeholder={placeholder}
                                   className={`w-full border-2 rounded-2xl border-${borderColor} 
          outline-none px-2 py-3 text-2xl font-normal text-thirdColor`}
                                   value={value}
                                   onChange={onChange}
                                   required={required}
                            />
                     </>
              )
       }
       return (
              <>
                     <div className="relative w-full">

                            <input type={type}
                                   placeholder={placeholder}
                                   className={`w-full border-2 placeholder-${placeholderColor} ${bgColor} ${textDirection ? "text-right" : "text-left"} rounded-2xl border-${borderColor} 
                       outline-none px-2 py-3 ${paddinLeft} ${paddinRight} text-2xl  ${placeholderSize ? 'text-lg' : 'text-2xl'} font-normal eleValueInput ${upload ? "text-mainColor cursor-pointer pr-10" : "text-thirdColor"}`}
                                   value={value}
                                   onChange={onChange}
                                   onClick={onClick}
                                   readOnly={readonly}
                                   required={required} 
                                   autoComplete="off"
                            />
                            {upload ? <LuUpload className={`absolute  top-1/3 text-mainColor text-2xl cursor-pointer ${iconDirection ? 'left-4' : 'right-2'} `} /> : ''}
                            {source == 'external' ? <FaExternalLinkAlt className='absolute right-4 top-1/3 text-mainColor text-2xl cursor-pointer' /> :
                                   source == 'embedded' ? <FaLink className='absolute top-1/3 text-mainColor text-2xl cursor-pointer' /> :
                                          source == 'upload' ? <LuUpload className={`absolute right-4 top-1/3 text-mainColor text-2xl cursor-pointer ${iconDirection ? 'left-4' : 'right-2'} `} />
                                                 : ''}
                            {/* external, embedded, upload */}
                     </div>


              </>

       )
}

export default InputCustom