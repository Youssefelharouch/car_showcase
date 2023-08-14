"use client"
import { CustomButtonProps } from '@/types'
import Imgae from 'next/image'

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
    type={btnType || 'button'}
    disabled={false}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={'flex-1'}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton