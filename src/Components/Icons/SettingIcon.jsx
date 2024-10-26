import React from 'react'

const SettingIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_957_56" fill="white">
            <path d="M17.3333 32H14.6667C13.564 32 12.6667 31.1027 12.6667 30V27.5173C11.8133 27.2707 10.992 26.93 10.2127 26.4993L8.45667 28.256C7.70067 29.012 6.384 29.0107 5.628 28.256L3.742 26.3707C3.364 25.9933 3.156 25.4907 3.156 24.9567C3.156 24.4227 3.364 23.92 3.742 23.5427L5.49867 21.7853C5.06867 21.008 4.728 20.1867 4.482 19.3327H2C0.897333 19.3327 0 18.4353 0 17.3327V14.666C0 14.1313 0.208 13.6293 0.585333 13.252C0.963333 12.8747 1.46533 12.666 2 12.666H4.48267C4.72933 11.814 5.06933 10.992 5.5 10.2133L3.744 8.45667C2.964 7.67667 2.964 6.40867 3.744 5.62867L5.62933 3.74267C6.38467 2.988 7.702 2.98667 8.458 3.74267L10.2147 5.49933C10.9933 5.06933 11.8147 4.72867 12.6667 4.48267V2C12.6667 0.897333 13.564 0 14.6667 0H17.3333C18.436 0 19.3333 0.897333 19.3333 2V4.48267C20.1867 4.72933 21.008 5.07 21.7853 5.49933L23.542 3.74267C24.298 2.988 25.6147 2.98667 26.3707 3.74267L28.2567 5.628C28.6347 6.00533 28.8427 6.508 28.8427 7.042C28.8427 7.576 28.6347 8.07867 28.2567 8.456L26.5007 10.2127C26.9313 10.9913 27.272 11.8127 27.518 12.666H30C31.1027 12.666 32 13.5633 32 14.666V17.3327C32 17.8673 31.792 18.3693 31.4147 18.7467C31.0373 19.124 30.5347 19.3327 30 19.3327H27.5173C27.2707 20.186 26.93 21.008 26.5 21.786L28.256 23.5427C29.036 24.3227 29.036 25.5907 28.256 26.3707L26.3707 28.2567C25.6147 29.012 24.298 29.012 23.542 28.2567L21.7867 26.5C21.008 26.9307 20.186 27.2707 19.334 27.5173V30C19.3333 31.1027 18.4367 32 17.3333 32ZM10.1047 24.9987C10.224 24.9987 10.3447 25.0307 10.452 25.096C11.396 25.6733 12.418 26.0973 13.49 26.3567C13.7893 26.4293 14 26.6967 14 27.0047V30C14 30.368 14.2993 30.6667 14.6667 30.6667H17.3333C17.7007 30.6667 18 30.368 18 30V27.0047C18 26.6967 18.2107 26.4293 18.51 26.3567C19.5807 26.0973 20.6027 25.6747 21.5473 25.0967C21.8113 24.936 22.1487 24.9767 22.3667 25.194L24.4853 27.3133C24.7353 27.5627 25.178 27.564 25.4287 27.3133L27.314 25.4273C27.574 25.1673 27.574 24.7447 27.314 24.4847L25.1947 22.3653C24.9767 22.148 24.9367 21.8087 25.0973 21.546C25.674 20.6033 26.0973 19.5813 26.3567 18.5087C26.4287 18.2093 26.6967 17.998 27.0047 17.998H30C30.178 17.998 30.346 17.9287 30.472 17.8027C30.5973 17.6787 30.6667 17.5113 30.6667 17.3327V14.666C30.6667 14.298 30.3673 13.9993 30 13.9993H27.0047C26.6967 13.9993 26.4287 13.7887 26.3567 13.4887C26.098 12.4173 25.6747 11.3953 25.0973 10.4513C24.9367 10.1887 24.9767 9.85067 25.1947 9.632L27.314 7.51267C27.438 7.388 27.5093 7.21667 27.5093 7.04133C27.5093 6.866 27.438 6.694 27.314 6.57L25.428 4.68467C25.176 4.43333 24.7367 4.43333 24.4847 4.68467L22.3653 6.804C22.148 7.02267 21.81 7.06333 21.546 6.90133C20.604 6.32533 19.5827 5.90133 18.51 5.642C18.2113 5.57067 18 5.30333 18 4.99533V2C18 1.632 17.7007 1.33333 17.3333 1.33333H14.6667C14.2993 1.33333 14 1.632 14 2V4.99533C14 5.30333 13.7893 5.57067 13.49 5.64333C12.4193 5.902 11.3973 6.32533 10.4527 6.90267C10.1893 7.06333 9.85133 7.02333 9.634 6.80533L7.51467 4.686C7.26267 4.43467 6.82333 4.43467 6.57133 4.686L4.68667 6.57133C4.42667 6.83133 4.42667 7.254 4.68667 7.514L6.806 9.63333C7.024 9.85067 7.064 10.19 6.90333 10.4527C6.326 11.3967 5.90267 12.4187 5.644 13.4893C5.572 13.7887 5.304 14 4.996 14H2C1.822 14 1.654 14.0693 1.528 14.1953C1.40267 14.32 1.33333 14.4873 1.33333 14.666V17.3327C1.33333 17.7007 1.63267 17.9993 2 17.9993H4.99533C5.30333 17.9993 5.57133 18.21 5.64333 18.51C5.90267 19.582 6.326 20.604 6.90267 21.5467C7.06333 21.8093 7.02333 22.1473 6.80533 22.366L4.686 24.486C4.562 24.6107 4.49067 24.782 4.49067 24.9573C4.49067 25.1327 4.562 25.3047 4.686 25.4287L6.572 27.314C6.82333 27.5653 7.26333 27.5653 7.51533 27.314L9.634 25.1947C9.762 25.0653 9.932 24.9987 10.1047 24.9987Z"/>
            </mask>
            <path d="M17.3333 32H14.6667C13.564 32 12.6667 31.1027 12.6667 30V27.5173C11.8133 27.2707 10.992 26.93 10.2127 26.4993L8.45667 28.256C7.70067 29.012 6.384 29.0107 5.628 28.256L3.742 26.3707C3.364 25.9933 3.156 25.4907 3.156 24.9567C3.156 24.4227 3.364 23.92 3.742 23.5427L5.49867 21.7853C5.06867 21.008 4.728 20.1867 4.482 19.3327H2C0.897333 19.3327 0 18.4353 0 17.3327V14.666C0 14.1313 0.208 13.6293 0.585333 13.252C0.963333 12.8747 1.46533 12.666 2 12.666H4.48267C4.72933 11.814 5.06933 10.992 5.5 10.2133L3.744 8.45667C2.964 7.67667 2.964 6.40867 3.744 5.62867L5.62933 3.74267C6.38467 2.988 7.702 2.98667 8.458 3.74267L10.2147 5.49933C10.9933 5.06933 11.8147 4.72867 12.6667 4.48267V2C12.6667 0.897333 13.564 0 14.6667 0H17.3333C18.436 0 19.3333 0.897333 19.3333 2V4.48267C20.1867 4.72933 21.008 5.07 21.7853 5.49933L23.542 3.74267C24.298 2.988 25.6147 2.98667 26.3707 3.74267L28.2567 5.628C28.6347 6.00533 28.8427 6.508 28.8427 7.042C28.8427 7.576 28.6347 8.07867 28.2567 8.456L26.5007 10.2127C26.9313 10.9913 27.272 11.8127 27.518 12.666H30C31.1027 12.666 32 13.5633 32 14.666V17.3327C32 17.8673 31.792 18.3693 31.4147 18.7467C31.0373 19.124 30.5347 19.3327 30 19.3327H27.5173C27.2707 20.186 26.93 21.008 26.5 21.786L28.256 23.5427C29.036 24.3227 29.036 25.5907 28.256 26.3707L26.3707 28.2567C25.6147 29.012 24.298 29.012 23.542 28.2567L21.7867 26.5C21.008 26.9307 20.186 27.2707 19.334 27.5173V30C19.3333 31.1027 18.4367 32 17.3333 32ZM10.1047 24.9987C10.224 24.9987 10.3447 25.0307 10.452 25.096C11.396 25.6733 12.418 26.0973 13.49 26.3567C13.7893 26.4293 14 26.6967 14 27.0047V30C14 30.368 14.2993 30.6667 14.6667 30.6667H17.3333C17.7007 30.6667 18 30.368 18 30V27.0047C18 26.6967 18.2107 26.4293 18.51 26.3567C19.5807 26.0973 20.6027 25.6747 21.5473 25.0967C21.8113 24.936 22.1487 24.9767 22.3667 25.194L24.4853 27.3133C24.7353 27.5627 25.178 27.564 25.4287 27.3133L27.314 25.4273C27.574 25.1673 27.574 24.7447 27.314 24.4847L25.1947 22.3653C24.9767 22.148 24.9367 21.8087 25.0973 21.546C25.674 20.6033 26.0973 19.5813 26.3567 18.5087C26.4287 18.2093 26.6967 17.998 27.0047 17.998H30C30.178 17.998 30.346 17.9287 30.472 17.8027C30.5973 17.6787 30.6667 17.5113 30.6667 17.3327V14.666C30.6667 14.298 30.3673 13.9993 30 13.9993H27.0047C26.6967 13.9993 26.4287 13.7887 26.3567 13.4887C26.098 12.4173 25.6747 11.3953 25.0973 10.4513C24.9367 10.1887 24.9767 9.85067 25.1947 9.632L27.314 7.51267C27.438 7.388 27.5093 7.21667 27.5093 7.04133C27.5093 6.866 27.438 6.694 27.314 6.57L25.428 4.68467C25.176 4.43333 24.7367 4.43333 24.4847 4.68467L22.3653 6.804C22.148 7.02267 21.81 7.06333 21.546 6.90133C20.604 6.32533 19.5827 5.90133 18.51 5.642C18.2113 5.57067 18 5.30333 18 4.99533V2C18 1.632 17.7007 1.33333 17.3333 1.33333H14.6667C14.2993 1.33333 14 1.632 14 2V4.99533C14 5.30333 13.7893 5.57067 13.49 5.64333C12.4193 5.902 11.3973 6.32533 10.4527 6.90267C10.1893 7.06333 9.85133 7.02333 9.634 6.80533L7.51467 4.686C7.26267 4.43467 6.82333 4.43467 6.57133 4.686L4.68667 6.57133C4.42667 6.83133 4.42667 7.254 4.68667 7.514L6.806 9.63333C7.024 9.85067 7.064 10.19 6.90333 10.4527C6.326 11.3967 5.90267 12.4187 5.644 13.4893C5.572 13.7887 5.304 14 4.996 14H2C1.822 14 1.654 14.0693 1.528 14.1953C1.40267 14.32 1.33333 14.4873 1.33333 14.666V17.3327C1.33333 17.7007 1.63267 17.9993 2 17.9993H4.99533C5.30333 17.9993 5.57133 18.21 5.64333 18.51C5.90267 19.582 6.326 20.604 6.90267 21.5467C7.06333 21.8093 7.02333 22.1473 6.80533 22.366L4.686 24.486C4.562 24.6107 4.49067 24.782 4.49067 24.9573C4.49067 25.1327 4.562 25.3047 4.686 25.4287L6.572 27.314C6.82333 27.5653 7.26333 27.5653 7.51533 27.314L9.634 25.1947C9.762 25.0653 9.932 24.9987 10.1047 24.9987Z" fill={isActive ? '#3F4CD0': '#fff'} stroke={isActive ? '#3F4CD0': '#fff'} mask="url(#path-1-inside-1_957_56)"/>
            <path d="M16.0007 22.4166C12.4627 22.4166 9.58398 19.5378 9.58398 15.9999C9.58398 12.462 12.4627 9.58325 16.0007 9.58325C19.5386 9.58325 22.4173 12.462 22.4173 15.9999C22.4173 19.5379 19.5392 22.4166 16.0007 22.4166ZM16.0007 10.4166C12.9219 10.4166 10.4173 12.9212 10.4173 15.9999C10.4173 19.0787 12.9219 21.5833 16.0007 21.5833C19.0794 21.5833 21.584 19.0787 21.584 15.9999C21.584 12.9212 19.0801 10.4166 16.0007 10.4166Z" fill={isActive ? '#3F4CD0': '#fff'} stroke={isActive ? '#3F4CD0': '#fff'} stroke-width="0.5"/>
        </svg>
    )
}

export default SettingIcon