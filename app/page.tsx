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
import Menue from "./components/Menue/Menue";
import Contact from "./components/Contact/Contact";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {


  useLenis();
  return (
    <>
    <div className=" bg-[#151312] overflow-hidden ">
      <div className="flex justify-between items-center w-[90%] mx-auto mt-[20px]">
        <img src="logo.svg" alt="" className="max-w-[100px]"/>
        <Menue/>
      </div>
        <div className=" flex justify-center items-start max-w-[900px] mx-auto flex-wrap gap-[20px] px-[20px] my-[80px]" id="about">
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
                <div className="text-[#fff]">Flutter</div>
                <div className="text-[#fff]">State Management</div>
                <div className="text-[#fff]">Flutter Web</div>
                <div className="text-[#fff]">Clean Architecture</div>
                <div className="text-[#fff]">Goolge Maps</div>
                <div className="text-[#fff]">FireBase Messaging</div>
                <div className="text-[#fff]">Local Database</div>
                <div className="text-[#fff]">Git</div>
                <div className="text-[#fff]">Responsive Design</div>
            </LoopBar>
          </div>
        </div>

        <div className="mt-[120px] flex flex-col justify-center items-center" id="projects">
          <div className="text-[80px] text-[#ff7b004d] font-[pop] text-center">PROJECTS</div>

          <Phone/>
        </div>
        <div id="contact">

          <Contact/>
        </div>

        <div className="text-center text-[#fff] mb-[20px] mt-[80px] text-[20px]">
          ©  2025 Abdul Hadi Solaimano. All rights reserved.
        </div>

        <BG/>
    </div>
    </>
  );
}
