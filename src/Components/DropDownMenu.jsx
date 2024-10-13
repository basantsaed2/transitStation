// import React, { forwardRef } from 'react';
// import { IoIosArrowDown } from 'react-icons/io';

// // const DropDownMenu = forwardRef(({ iconMenu, handleOpen, stateoption, openMenu, handleOpenOption, options }, ref)) => {
// const DropDownMenu = forwardRef(({
//        iconMenu,
//        iconDirection=false,
//        handleOpen,
//        stateoption,
//        openMenu,
//        handleOpenOption,
//        options = [], // Default to an empty array
// }, ref) => {

//        // console.log({ ref, handleOpen, stateoption, openMenu, options });

//        return (
//               <>
//                      <div className="w-full mx-auto relative" ref={ref}>
//                             <button type='button'
//                                    className={`flex ${iconDirection ? 'flex-row-reverse' : 'flex-row'} items-center justify-between w-full h-full px-5 py-3  border-2 rounded-2xl outline-none font-medium text-thirdColor text-center bg-secoundColor`}
//                                    onClick={handleOpen}
//                             >
//                                    <div className="text-mainColor text-2xl">{iconMenu}</div>
//                                    <span className='eleValueDropDown'>{stateoption}</span>
//                                    <IoIosArrowDown className={`${openMenu ? "rotate-180" : "rotate-0"} text-mainColor text-xl transition-all duration-300`} />
//                             </button>
//                             <div className={`${openMenu ? "block" : "hidden"} scrollSec absolute w-full min-h-10 max-h-32 top-14 bg-white rounded-xl drop-shadow-sm overflow-y-scroll z-10`}>
//                                    {options.map((option, index) => (
//                                           <div
//                                                  key={option?.id || index}
//                                                  className="flex items-center py-1 gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300"
//                                                  onClick={handleOpenOption}
//                                           >                                                 
//                                                  {option.name}
//                                                  {option.type_name}
//                                                  {option.offer_name}
//                                                  {option.car_name}
//                                                  {option.pick_up_address}
//                                                  <input type="hidden" value={option?.id || option.type_name || option.name || option.offer_name ||option.car_name ||option.pick_up_address} className='inputVal' />
//                                           </div>
//                                    ))}
//                             </div>

//                      </div >

//               </>
//        );
// });
// export default DropDownMenu;


import React, { useState, forwardRef } from 'react';
import { IoIosArrowDown , IoIosSearch } from 'react-icons/io';

const DropDownMenu = forwardRef(({
       iconMenu,
       iconDirection = false,
       handleOpen,
       stateoption,
       openMenu,
       handleOpenOption,
       options = [], // Default to an empty array
}, ref) => {
    const [searchInput, setSearchInput] = useState('');

    // Filter options based on search input
    const filteredOptions = options.filter(option => {
        const optionValue = `${option.name} ${option.type_name} ${option.offer_name} ${option.car_name} ${option.pick_up_address}`.toLowerCase();
        return optionValue.includes(searchInput.toLowerCase());
    });

    return (
        <>
            <div className="w-full mx-auto relative" ref={ref}>
                <button
                    type='button'
                    className={`flex ${iconDirection ? 'flex-row-reverse' : 'flex-row'} items-center justify-between w-full h-full px-5 py-3 border-2 rounded-2xl outline-none font-medium text-thirdColor text-center bg-secoundColor`}
                    onClick={handleOpen}
                >
                    <div className="text-mainColor text-2xl">{iconMenu}</div>
                    <span className='eleValueDropDown'>{stateoption}</span>
                    <IoIosArrowDown className={`${openMenu ? "rotate-180" : "rotate-0"} text-mainColor text-xl transition-all duration-300`} />
                </button>
                <div className={`${openMenu ? "block" : "hidden"} scrollSec absolute w-full min-h-10 max-h-32 top-14 bg-white rounded-xl drop-shadow-sm overflow-y-scroll z-10`}>
                    {/* Input field for searching options */}
                    {/* <IoIosSearch className="text-xl text-gray-400" /> */}
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full p-2 border rounded-xl mb-2"
                    /> */}
                    <div className="relative p-2">
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="w-full p-2 pl-10 border rounded-md"
                        />
                    </div>
                    {filteredOptions.map((option, index) => (
                        <div
                            key={option?.id || index}
                            className="flex items-center py-1 gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300"
                            onClick={handleOpenOption} // Pass the selected option to the handler
                        >
                            {option.name}
                            {option.type_name}
                            {option.offer_name}
                            {option.car_name}
                            {option.pick_up_address}
                            <input type="hidden" value={option?.id || option.type_name || option.name || option.offer_name || option.car_name || option.pick_up_address} className='inputVal' />
                        </div>
                    ))}
                    {filteredOptions.length === 0 && (
                        <div className="text-center text-mainColor py-2">No options found</div>
                    )}
                </div>
            </div>
        </>
    );
});

export default DropDownMenu;
