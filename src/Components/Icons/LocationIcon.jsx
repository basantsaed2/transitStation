import React from 'react'

const LocationIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_106_634)">
            <path d="M12 2C8.135 2 5 5.135 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.135 15.865 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"  fill={isActive ? '#3F4CD0': '#fff'}/>
            </g>
            <defs>
            <clipPath id="clip0_106_634">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default LocationIcon