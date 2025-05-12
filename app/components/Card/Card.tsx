import React from "react";

export default function Card() {
  return (
    <div className="w-[344px] bg-[#fff] rounded-2xl flex flex-col justify-center items-center gap-[24px] py-[30px] font-[rubik] text-[#272829] ">
      <img src="ab.jpg" alt="" className="rounded-2xl max-w-[240px]" />
      <div className="text-[28px] font-[pop]">Abdul Hadi Solaimano</div>
      <div className="">Flutter Engineer</div>
      <div className="flex justify-center items-center gap-[10px]">
        <a
          href="https://www.linkedin.com/in/abdulhadi-slemano"
          target="_blank"
          className="w-[30px] aspect-square rounded-full cursor-pointer relative group"
        >
          <img src="linkedin.svg" alt="" />
          <div className="tt absolute w-max rounded-md bottom-[-50px] left-[50%] translate-x-[-50%] p-[5px] bg-[#ff7b00] text-primary text-[18px] font-body scale-0 group-hover:scale-[1] opacity-0 group-hover:opacity-[1] duration-[0.3s] transition-all">
            Visit LinkedIn Profile
          </div>
        </a>
        <a href="/cv.pdf" target='_blank' className="w-[30px] aspect-square rounded-full cursor-pointer relative group">
          <img src="cv.svg" alt="" />
          <div className="tt absolute w-max rounded-md bottom-[-50px] left-[50%] translate-x-[-50%] p-[5px] bg-[#ff7b00] text-primary text-[18px] font-body scale-0 group-hover:scale-[1] opacity-0 group-hover:opacity-[1] duration-[0.3s] transition-all">
            View CV
          </div>
        </a>
        <div className="w-[30px] aspect-square rounded-full cursor-pointer relative group">
          <img src="phone.svg" alt="" />
          <div className="tt absolute w-max rounded-md bottom-[-50px] left-[50%] translate-x-[-50%] p-[5px] bg-[#ff7b00] text-primary text-[18px] font-body scale-0 group-hover:scale-[1] opacity-0 group-hover:opacity-[1] duration-[0.3s] transition-all">
            +971 56 642 8773
          </div>
        </div>
        <div className="w-[37px] aspect-square rounded-full cursor-pointer relative group">
          <img src="mail2.svg" alt="" />
          <div className="tt absolute w-max rounded-md bottom-[-50px] left-[50%] translate-x-[-50%] p-[5px] bg-[#ff7b00] text-primary text-[18px] font-body scale-0 group-hover:scale-[1] opacity-0 group-hover:opacity-[1] duration-[0.3s] transition-all">
            Hadi.slemano8@gmail.com
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#ff7a00] px-[30px] py-[5px] rounded-md mt-[80px]">
        <div className="text-[#fff] cursor-pointer">Let's Talk</div>
      </div>
    </div>
  );
}
