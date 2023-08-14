"use client"
import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import Imgae from 'next/image'


const CustomButton = ({rightIcon,isDisabled,textStyles,title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
    type={btnType || 'button'}
    disabled={false}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon &&(
      <div className='relative w-6 h-6'>
        <Image src={rightIcon} alt="right icon" fill className='object-contain' />
      </div>
      )}
    </button>
  )
}

export default CustomButton