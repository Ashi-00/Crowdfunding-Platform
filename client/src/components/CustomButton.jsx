import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`mobile:w-[100%] font-epilogue font-semibold text-[14px] leading-[26px] text-white md:min-h-[40px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton