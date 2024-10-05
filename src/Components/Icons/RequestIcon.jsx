import React from 'react'

const RequestIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_146_1097)">
            <path d="M22 22V28H6V4H16V2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V28C4 28.5304 4.21071 29.0391 4.58579 29.4142C4.96086 29.7893 5.46957 30 6 30H22C22.5304 30 23.0391 29.7893 23.4142 29.4142C23.7893 29.0391 24 28.5304 24 28V22H22Z" fill={isActive ? '#3F4CD0': '#fff'}/>
            <path d="M29.54 5.76006L26.24 2.46006C25.9409 2.16689 25.5388 2.00269 25.12 2.00269C24.7012 2.00269 24.2991 2.16689 24 2.46006L10 16.4601V22.0001H15.53L29.53 8.00006C29.8232 7.70097 29.9874 7.29886 29.9874 6.88006C29.9874 6.46125 29.8232 6.05914 29.53 5.76006H29.54ZM14.7 20.0001H12V17.3001L21.44 7.85006L24.15 10.5601L14.7 20.0001ZM25.56 9.15006L22.85 6.44006L25.12 4.17006L27.83 6.88006L25.56 9.15006Z" fill={isActive ? '#3F4CD0': '#fff'}/>
            </g>
            <defs>
            <clipPath id="clip0_146_1097">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default RequestIcon