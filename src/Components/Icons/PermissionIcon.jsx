import React from 'react'

const PermissionIcon = ({ Width = "32", Height = "32", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3327 6.66675H3.99935C3.26297 6.66675 2.66602 7.26368 2.66602 8.00008V25.3334C2.66602 26.0698 3.26297 26.6667 3.99935 26.6667H27.9993C28.7357 26.6667 29.3327 26.0698 29.3327 25.3334V23.6667" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66602 15.3333H11.9993" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round"/>
            <path d="M6.66602 20.6667H22.666" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round"/>
            <path d="M22.666 14.6667C24.8752 14.6667 26.666 12.8759 26.666 10.6667C26.666 8.45761 24.8752 6.66675 22.666 6.66675C20.4569 6.66675 18.666 8.45761 18.666 10.6667C18.666 12.8759 20.4569 14.6667 22.666 14.6667Z" fill={isActive ? '#3F4CD0': '#fff'} stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.334 18.9459C28.0318 16.4016 25.3339 14.6667 22.6672 14.6667C20.0006 14.6667 18.672 15.422 17.3008 16.6667" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default PermissionIcon