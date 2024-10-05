import React from 'react'

const RevenueIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return ( 
        <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V20.2H20.2M5.8 13.0001L10 8.80013L13 11.8001L18.4001 6.4" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default RevenueIcon