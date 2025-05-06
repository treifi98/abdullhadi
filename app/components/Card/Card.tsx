import React from 'react'

export default function Card() {
  return (
    <div className='w-[344px] bg-[#fff] rounded-2xl flex flex-col justify-center items-center gap-[24px] py-[30px] font-[rubik] text-[#272829] '>
        <img src="ab.jpg" alt="" className='rounded-2xl max-w-[240px]'/>
        <div className='text-[28px] font-[pop]'>Abdul Hadi Solaimano</div>
        <div className=''>Flutter Engineer</div>
        <div className='flex justify-center items-center gap-[10px]'>
            <div className='w-[30px] aspect-square rounded-full bg-[#272829]'></div>
            <div className='w-[30px] aspect-square rounded-full bg-[#272829]'></div>
            <div className='w-[30px] aspect-square rounded-full bg-[#272829]'></div>
            <div className='w-[30px] aspect-square rounded-full bg-[#272829]'></div>
        </div>
        <div className='flex justify-center items-center bg-[#ff7a00] px-[30px] py-[5px] rounded-md mt-[80px]'>
            <div className='text-[#fff] cursor-pointer'>
                Let's Talk
            </div>
        </div>
    </div>
  )
}
