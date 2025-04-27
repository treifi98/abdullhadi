import React from 'react'

interface Props{
    title: string,
    logo:string,
    id:Number,
    clicked:any
    
}
export default function App(props:Props) {
  return (
    <div className="flex flex-col w-[calc(25%-0px)] justify-between items-center h-fit !gap-[15px] group cursor-pointer hover:scale-[1.08] transition-all duration-[0.2s]" onClick={props.clicked}>
    <div className="w-full aspect-square rounded-xl overflow-hidden group-hover:rotate-[-5deg] transition-all duration-[0.2s]">
        <img src={props.logo} className='w-full h-full' alt="" />
    </div>
    <div className="text-[#fff] text-center text-[16px] leading-[100%] pt-[10px]">
      {props.title}
    </div>
  </div>
  )
}
