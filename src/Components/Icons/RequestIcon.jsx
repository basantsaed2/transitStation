import React from 'react'

const RequestIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 20V26H2V2H12V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V26C0 26.5304 0.210714 27.0391 0.585786 27.4142C0.960859 27.7893 1.46957 28 2 28H18C18.5304 28 19.0391 27.7893 19.4142 27.4142C19.7893 27.0391 20 26.5304 20 26V20H18Z" fill={isActive ? '#3F4CD0': '#fff'}/>
        </svg>
    )
}

export default RequestIcon