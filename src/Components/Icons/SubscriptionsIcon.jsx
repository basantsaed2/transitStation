import React from 'react'

const SubscriptionsIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.3435 5.31055L17.998 9.65605L18.005 9.66255L12.081 15.587L6.98949 10.496L5.33899 12.147L11.1755 17.9835L11.1695 17.989L12.0645 18.884L12.07 18.8785L12.0755 18.884L12.4745 18.485L12.4785 18.489L19.655 11.3125L24 6.96755L22.3435 5.31055Z" fill={isActive ? '#3F4CD0': '#fff'}/>
        <path d="M6.832 15.3925L1.741 10.302L0.0899963 11.9525L5.9265 17.7885L5.9205 17.7945L6.816 18.6895L6.8215 18.684L6.8265 18.6895L7.2255 18.2905L7.2295 18.294L8.4905 17.033L6.841 15.384L6.832 15.3925Z" fill={isActive ? '#3F4CD0': '#fff'}/>
        <path d="M12.0265 13.4975L14.406 11.118L18.751 6.77247L17.0945 5.11597L12.7495 9.46147L12.7565 9.46847L10.3765 11.8475L12.0265 13.4975Z" fill={isActive ? '#3F4CD0': '#fff'}/>
        </svg>        
    )
}

export default SubscriptionsIcon