'use client'
import React from 'react'

export default function Explain() {
    const handleClose = () => {
        document.querySelector(".tip")?.classList.add('hidden')
    }
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#00000081] z-[999] flex justify-center items-center tip'>
        <div className='w-[90%] md:w-[60%] flex justify-center items-start py-[40px] px-[20px] flex-col text-[#fff] bg-[#ff7b00] rounded-lg'>
            <div className='text-center text-[40px] font-[pop] self-center mb-[20px]'>Tips</div>
            <div className='text-[22px] mb-[20px]'>
                Did you know you can use the smart phone shown in the website? Cool I know (;
            </div>
            <div className='text-[20px] mb-[5px]'>
                All you have to do is the following:
            </div>
            <div className='pl-[20px]'>
                <div>1) Click on an app icon to view the app screenshots.</div>
                <div>2) Swipe left and right to view defferent screenshots.</div>
                <div>3) Click the back button at the bottom to exit an app and click on a defferent one to view it.</div>
            </div>
            <div className='py-[10px] px-[30px] bg-[#fff] text-[#000] flex justify-center items-center rounded-lg self-center my-[20px] cursor-pointer' onClick={handleClose}>Got It</div>
        </div>
    </div>
  )
}
