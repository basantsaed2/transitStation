import React from 'react'

const RevenueTypes = ({ Width = "32", Height = "32", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_957_84)">
            <path d="M23 27.5H23.5V27V10C23.5 9.72414 23.7241 9.5 24 9.5H28C28.2759 9.5 28.5 9.72414 28.5 10V28C28.5 28.2759 28.2759 28.5 28 28.5H6C5.33653 28.5 4.70091 28.2366 4.23287 27.7678L4.23224 27.7671C3.76336 27.2991 3.5 26.6635 3.5 26V4C3.5 3.72414 3.72414 3.5 4 3.5C4.27586 3.5 4.5 3.72414 4.5 4V26C4.5 26.3959 4.65645 26.7781 4.93851 27.0596C5.22024 27.3429 5.6032 27.5 6 27.5H7H7.5V27V19.012C7.5 18.7361 7.72414 18.512 8 18.512H12C12.2759 18.512 12.5 18.7361 12.5 19.012V27V27.5H13H15H15.5V27V15C15.5 14.7241 15.7241 14.5 16 14.5H20C20.2759 14.5 20.5 14.7241 20.5 15V27V27.5H21H23Z" stroke={isActive ? '#3F4CD0': '#fff'}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.003 4H10C8.344 4 7 5.344 7 7C7 8.656 8.344 10 10 10H12C12.552 10 13 10.448 13 11C13 11.552 12.552 12 12 12H9C8.448 12 8 12.448 8 13C8 13.552 8.448 14 9 14H10.003V15C10.003 15.552 10.452 16 11.003 16C11.555 16 12.003 15.552 12.003 15V14C13.658 13.998 15 12.655 15 11C15 9.344 13.656 8 12 8H10C9.448 8 9 7.552 9 7C9 6.448 9.448 6 10 6H13C13.552 6 14 5.552 14 5C14 4.448 13.552 4 13 4H12.003V3C12.003 2.448 11.555 2 11.003 2C10.452 2 10.003 2.448 10.003 3V4Z" fill={isActive ? '#3F4CD0': '#fff'}/>
            </g>
            <defs>
            <clipPath id="clip0_957_84">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default RevenueTypes