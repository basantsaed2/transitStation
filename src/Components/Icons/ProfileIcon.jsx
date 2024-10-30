import React from 'react'

const ProfileIcon = ({ Width = "32", Height = "32", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_957_119)">
            <path d="M25.9173 10.9774V24.3028L22.5051 20.8905C23.0817 19.8368 23.4173 18.626 23.4173 17.3334C23.4173 13.2392 20.0949 9.91675 16.0007 9.91675C11.9064 9.91675 8.58398 13.2392 8.58398 17.3334C8.58398 21.4276 11.9064 24.7501 16.0007 24.7501C17.2917 24.7501 18.5027 24.4152 19.5536 23.8337L24.282 28.5621C24.1902 28.5761 24.0963 28.5834 24.0007 28.5834H7.98732C6.93325 28.5834 6.08423 27.731 6.08398 26.6672C6.08398 26.6671 6.08398 26.6671 6.08398 26.667C6.08398 26.6669 6.08398 26.6668 6.08398 26.6667L6.09732 5.33388V5.33341C6.09732 4.26938 6.94642 3.41675 8.00065 3.41675H18.3567L25.9173 10.9774ZM16.0007 20.5834C14.2082 20.5834 12.7507 19.1259 12.7507 17.3334C12.7507 15.541 14.2082 14.0834 16.0007 14.0834C17.7931 14.0834 19.2507 15.541 19.2507 17.3334C19.2507 19.1259 17.7931 20.5834 16.0007 20.5834Z" stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="1.5"/>
            </g>
            <defs>
            <clipPath id="clip0_957_119">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default ProfileIcon