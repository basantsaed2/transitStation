import React from 'react'

const DriversIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
            <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17.5C2.3733 15.0682 5.38314 13.4038 10.0789 13.4038C14.7747 13.4038 17.7845 15.0682 19.1578 17.5M20.0266 11.5598C22.5133 12.8798 23.7566 14.1998 25 16.8398M17.4403 1.4703C18.6104 2.13854 19.4058 3.45067 19.4058 4.96004C19.4058 6.4258 18.6557 7.70556 17.5407 8.39027M13.809 4.96C13.809 7.14705 12.139 8.92 10.0789 8.92C8.01883 8.92 6.34881 7.14705 6.34881 4.96C6.34881 2.77295 8.01883 1 10.0789 1C12.139 1 13.809 2.77295 13.809 4.96Z" stroke={isActive ? '#3F4CD0': '#fff'} strokeWidth="2" strokeLinecap="round"/>
            </svg>
      
    )
}

export default DriversIcon