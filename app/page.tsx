'use client'
import Image from "next/image";
import useLenis from "./hooks/useLenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import useWindowSize from "./hooks/useWindowSize";
import Phone from "./components/Phone/Phone";
import Card from "./components/Card/Card";
import BG from "./components/BG/BG";
import LoopBar from "./components/LoopBar/LoopBar";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {


  useLenis();
  return (
    <>
    <div className=" bg-[#151312] overflow-hidden py-[100px]">
        <div className=" flex justify-center items-start max-w-[900px] mx-auto flex-wrap gap-[20px] px-[20px]">
          <Card/>
          <div className="px-[20px] md:px-[0px] flex flex-col gap-[10px] md:ml-auto">
            <div className="flex flex-col justify-start items-start text-[80px] font-[pop] font-bold ">
              <div className="text-[#fff]">
                FLUTTER
              </div>
              <div className="text-[#ff7b004d] mt-[-30px]">
                ENGINEER
              </div>
            </div>
            <div className="text-[#fff] max-w-[400px] text-[20px]">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
            </div>
            <div className="flex justify-between items-center text-[#fff]">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[50px] font-[pop]">+5</div>
                  <div className="w-[70px] mt-[-10px] text-[#ff7b004d] ml-[-10px]">Years of experiance</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[50px] font-[pop]">+8</div>
                  <div className="w-[70px] mt-[-10px] text-[#ff7b004d] ml-[-10px]">Completed Projects</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[50px] font-[pop]">+10</div>
                  <div className="w-[70px] mt-[-10px] text-[#ff7b004d] ml-[-10px]">WORLDWIDE CLIENTS</div>
                </div>
            </div>
            <LoopBar>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
                <div className="text-[#fff]">flutter</div>
            </LoopBar>
          </div>
        </div>

        <div className="mt-[120px] flex flex-col justify-center items-center">
          <div className="text-[80px] text-[#ff7b004d] font-[pop] text-center">PROJECTS</div>

          <Phone/>
        </div>
        <div className="mt-[120px] flex flex-col justify-center items-center overflow-hidden">
          <div className="text-[80px] text-[#ff7b004d] font-[pop] text-center ">Get In Touch</div>
            <div className="max-w-[600px] mx-auto bg-[#080807ad] overflow-hidden rounded-lg flex justify-center items-center mt-[20px]">
            <form action="" className="w-full h-full text-[#fff] flex flex-col justify-center items-center gap-[40px] p-[60px]">
              <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">
                <div>

                  Your Name
                </div>
                <input type="text" placeholder="Jhon Doe" className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"/>
              </div>
              <div>
                <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">

                  Contact Details 
                </div>
                <input type="text" placeholder="Email Or Phone Number" className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"/>
              </div>
              <div className="max-w-[400px] min-w-[300px] flex flex-col justify-center items-start gap-[10px]">
                <div className="">

                  Message
                </div>
                <textarea placeholder="Roses are red violets are blue, I wanna work with you!" className="bg-[#ff7b004d] rounded-md py-[3px] px-[10px] w-full"/>
              </div>
                <div className='flex justify-center items-center bg-[#ff7a00] px-[30px] py-[5px] rounded-md mt-[40px]'>
                  <div className='text-[#fff] cursor-pointer'>
                    Let's Talk
                  </div>
                </div>
            </form>
          </div>
        </div>

        <BG/>
    </div>
    </>
  );
}
