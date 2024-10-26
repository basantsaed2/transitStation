import React from 'react'

const AssetIcon = ({ Width = "32", Height = "32", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_957_159)">
            <path d="M2 15H30" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 23V26C28 26.2652 27.8946 26.5196 27.7071 26.7071C27.5196 26.8946 27.2652 27 27 27H24C23.7348 27 23.4804 26.8946 23.2929 26.7071C23.1054 26.5196 23 26.2652 23 26V23" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 23V26C9 26.2652 8.89464 26.5196 8.70711 26.7071C8.51957 26.8946 8.26522 27 8 27H5C4.73478 27 4.48043 26.8946 4.29289 26.7071C4.10536 26.5196 4 26.2652 4 26V23" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 19H10" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 19H24" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 15L24.2875 8.50001C24.201 8.34765 24.0755 8.22104 23.924 8.13317C23.7724 8.04531 23.6002 7.99935 23.425 8.00001H8.575C8.39981 7.99935 8.22759 8.04531 8.07602 8.13317C7.92445 8.22104 7.79899 8.34765 7.7125 8.50001L4 15V23H28V15Z" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 4H19" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_957_159">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default AssetIcon