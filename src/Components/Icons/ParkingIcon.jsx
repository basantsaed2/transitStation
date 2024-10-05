import React from 'react'

const ParkingIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_106_617)">
                <path d="M18.4358 3.59033C18.1729 3.59033 17.9963 3.61583 17.9041 3.64133V5.32396C18.0132 5.34871 18.1486 5.35808 18.3346 5.35808C19.0186 5.35808 19.4419 5.01121 19.4419 4.42808C19.4423 3.90308 19.0782 3.59033 18.4358 3.59033Z" fill={isActive ? '#3F4CD0': '#fff'}/>
                <path d="M22.7922 0.302734H14.2999C13.6497 0.302734 13.1228 0.800359 13.1228 1.41423V9.43249C13.1228 10.0464 13.6493 10.544 14.2999 10.544H22.7922C23.4409 10.544 23.9693 10.0464 23.9693 9.43249V1.41423C23.9693 0.800359 23.4413 0.302734 22.7922 0.302734ZM20.1946 5.74623C19.7551 6.16023 19.1041 6.34661 18.3424 6.34661C18.1733 6.34661 18.0222 6.33874 17.9044 6.32224V8.35924H16.6272V2.73648C17.0243 2.66898 17.5823 2.61873 18.3683 2.61873C19.1629 2.61873 19.7299 2.77098 20.1106 3.07511C20.4747 3.36236 20.7192 3.83598 20.7192 4.39436C20.7188 4.95161 20.5321 5.42523 20.1946 5.74623Z"  fill={isActive ? '#3F4CD0': '#fff'}/>
                <path d="M20.5373 11.6832H2.29952L6.08365 5.14619C6.08365 5.14619 6.22052 4.87769 6.85877 4.87769H10.7741C10.7741 4.87769 11.703 4.94069 11.6689 4.29682C11.6344 3.95519 11.4465 3.72119 11.0419 3.72119C10.6429 3.72119 5.83277 3.72119 5.83277 3.72119C5.83277 3.72119 5.58752 3.73244 5.3194 4.19444C5.08015 4.60469 1.7344 10.4011 0.988145 11.7004C0.446645 11.7976 0.0303955 12.3274 0.0303955 12.9713V18.9042C0.0303955 19.6223 0.538145 20.1923 1.16477 20.1923H2.29877V23.0363C2.29877 23.3899 2.52715 23.6749 2.81215 23.6749H4.6414C4.9204 23.6749 5.15402 23.3899 5.15402 23.0363V20.1923H16.5754V23.0596C16.5754 23.4128 16.803 23.6978 17.0831 23.6978H18.8891C19.1681 23.6978 19.3969 23.4128 19.3969 23.0596V20.1923H20.5365C21.1635 20.1923 21.6709 19.6223 21.6709 18.9042V12.9713C21.6716 12.2588 21.1643 11.6832 20.5373 11.6832ZM4.2949 17.8984C3.21302 17.8984 2.33552 17.0209 2.33552 15.9391C2.33552 14.8568 3.21265 13.9797 4.2949 13.9797C5.37715 13.9797 6.2539 14.8568 6.2539 15.9391C6.2539 17.0209 5.37677 17.8984 4.2949 17.8984ZM17.4653 17.8984C16.3834 17.8984 15.5059 17.0209 15.5059 15.9391C15.5059 14.8568 16.3834 13.9797 17.4653 13.9797C18.5471 13.9797 19.4239 14.8568 19.4239 15.9391C19.4239 17.0209 18.5471 17.8984 17.4653 17.8984Z"  fill={isActive ? '#3F4CD0': '#fff'}/>
                </g>
                <defs>
                <clipPath id="clip0_106_617">
                <rect width={Width} height={Height} fill="white"/>
                </clipPath>
                </defs>
        </svg>
    )
}

export default ParkingIcon