import React from 'react'

const ColorIcon = ({ Width = "32", Height = "32", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_964_75)">
            <path d="M23.5409 10.5733L16.0009 3.02661L8.46094 10.5733C4.29427 14.7399 4.29427 21.4933 8.46094 25.6599C10.5409 27.7399 13.2743 28.7866 16.0009 28.7866C18.7276 28.7866 21.4609 27.7466 23.5409 25.6599C27.7076 21.4933 27.7076 14.7399 23.5409 10.5733ZM16.0009 26.1133C13.8609 26.1133 11.8543 25.2799 10.3476 23.7666C8.83427 22.2599 8.00094 20.2533 8.00094 18.1133C8.00094 15.9733 8.83427 13.9666 10.3476 12.4533L16.0009 6.79994V26.1133Z" fill={isActive ? '#3F4CD0': '#fff'}/>
            </g>
            <defs>
            <clipPath id="clip0_964_75">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default ColorIcon