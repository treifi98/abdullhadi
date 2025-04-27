'use client'
import Image from "next/image";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import useLenis from "./hooks/useLenis";
import ProjectCard from "./components/projectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import App from "./components/App/App";
import "./devices.css"
import Screen from "./components/Screen/Screen";
import useWindowSize from "./hooks/useWindowSize";
gsap.registerPlugin(ScrollTrigger);


const projectsd = [
  {
    title: 'Kidopi',
    desc: "is a family calendar app that simplifies scheduling for family members' activities. Assign roles, add other families to your circle, and receive reminders and notifications.",
    skills:"MVC , GetX , Firebase Messaging ,Get Storage , Get Connect ,Google Maps API.",
    img: '/proj1.png',
    id: '1'
  },
  {
    title: 'Sanad',
    desc: "The app's purpose is to streamline and tracks workflow, sales, and delivery across companies' departments. It provides real-time order status updates for managers, sales staff, warehouse staff, drivers, and more. The app generates data flow for reports, enhancing transparency and workflow efficiency while minimizing errors.",
    skills:"Firebase Messaging · GetX · MVC",
    img: '/proj4.jpg',
    id: '2'
  },
  {
    title: 'Staff Breeze',
    desc: 'A service providers platform that allows customers to find and hire personal assistants based on their needs. The platform offers a solution to the issue of work-life balance, providing users with personal assistants who can help them organize their schedules.',
    skills:"Riverpod ,  BLoC , Teamwork , Firebase Messaging Git",
    img: '/proj4.jpg',
    id: '3'
  },
  {
    title: 'Wave',
    desc: "is a powerful mobile app for personal finance management. It offers users adding and managing their financial assets, and customizable news feeds based on their assets, comprehensive assets tracking, and management. The app's intuitive design and user-friendly interface make it easy for users to stay on top of their finances.",
    skills:"Dio · RSS · BLoC",
    img: '/proj4.jpg',
    id: '4'
  },
  {
    title: 'Direct Debit',
    desc: 'desc4',
    skills:"",
    img: '/proj4.jpg',
    id: '4'
  }
]
export default function Home() {
  const { width, height } = useWindowSize();
  const [active,setActive] = useState(0)
  const [imgs, setImgs] = useState([''])

  const projects = [
    ['kodi/1.jpg','kodi/2.jpg','kodi/3.jpg','kodi/4.jpg','kodi/5.jpg'],
    ['kodi/1.png','kodi/2.jpg','kodi/3.jpg','kodi/4.jpg','kodi/5.jpg'],
    ['breeze/1.jpg','breeze/2.jpg','breeze/3.jpg','breeze/4.jpg'],
    ['wave/1.png','wave/2.png','wave/3.png','wave/4.png'],
    ['kodi/1.png','kodi/2.jpg','kodi/3.jpg','kodi/4.jpg','kodi/5.jpg'],
  ]
  const handleApp = (index:number) => {
    setImgs(projects[index])
    setActive(index)

    document.querySelector('.target')?.classList.remove('scale-0')
    document.querySelector('.target')?.classList.add('scale-1')
    document.querySelector('.tango')?.classList.remove('flex-[0]')
    document.querySelector('.tango')?.classList.add('flex-[1]')
    document.querySelector('.tango')?.classList.remove('w-0')
    document.querySelector('.tango')?.classList.add('w-full')
    document.querySelector('.tango2')?.classList.remove('w-0')
    document.querySelector('.tango2')?.classList.add('w-full')
    document.querySelector('.tango3')?.classList.remove('w-0')
    document.querySelector('.tango3')?.classList.add('w-[calc(100%-15px)]')
  }
  const handleNext = () =>active == (projects.length -1) ? setActive(0) : setActive(active+1)

  const handlePrev = () => active == 0 ? setActive(projects.length-1) : setActive((prev) => prev-1)

  useEffect(()=>{
    
  },[active])
 

  useLenis();
  return (
    <>
      <div>
        <Header/>
      </div>
      <div className="w-full bg-[#ff6200] h-[calc(100vh-100px)] flex flex-col-reverse items-center justify-evenly lg:justify-between lg:items-baseline  lg:flex-row px-[20px] lg:px-[80px] pt-[50px] lg:pt-[100px]">
        <div className="font-[super] text-[#fff] text-[30px] md:text-[60px] lg:text-[120px] w-full text-center flex flex-col  lg:justify-between  lg:w-[40%] lg:h-[calc(100%-200px)]">
          <div>

            ABDULHADI SoLAIMANO
          </div>
          <div className="">
            flutter engineer
          </div>
        </div>
        <div className="shadow-[0px_32px_39px_50px_rgba(0,_0,_0,_0.1)] w-[50%] text-center flex justify-center items-end lg:w-[40%] lg:self-start aspect-square rounded-full bg-[#1c1d1e9f] border-[10px] border-[#ffce2e] overflow-hidden">
          <img src="ab.png" alt="" className="w-full max-w-[600px] object-cover object-top"/>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="w-full h-max bg-[#1c1d1e] overflow-hidden pb-[100px]">
        <div className="w-[full] h-[2px] my-[10px] bg-[#ff6200]"></div>
        <div className="text-center text-[30px] md:text-[60px] lg:text-[120px] font-[super] text-[#ff6200]">
          PROJECTS
        </div>
        <div className="w-[90%] h-full relative mx-auto max-w-[1200px] transition-all duration-[0.5s]">
          <div className=" w-full h-full flex flex-col-reverse md:flex-row justify-center  items-center transition-all duration-[0.5s]  md:gap-[100px]">

            <div className="text-[#fff] text-[22px] md:max-h-[260px]  w-0 overflow-hidden tango transition-all duration-[0.5s]">
              <div className="px-[10px] font-bold italic inline-block relative mr-[5px]">
                <span className="relative text-[22px] z-[9]">
                  {projectsd[active].title} 
                </span>
                <div className="w-0 h-full absolute top-0 left-0 transition-all delay-[0.5s] duration-[0.6s] bg-[#ff6200] tango2 inline-block"></div>
              </div>
              {projectsd[active].desc}
              <div className="mt-[20px]">
                <div className="relative inline-block">
                  <span className="text-[22px] relative z-[9] font-bold italic inline-block mr-[15px]">
                      Skills 
                  </span>
                  <div className="w-0 h-full  border-b-[2px] border-[#ffce2e] absolute top-0 left-0 transition-all delay-[0.7s] duration-[0.6s] tango3 inline-block"></div>

                </div>
                {projectsd[active].skills}

              </div>
            </div>
            {/* <div className="h-[calc(100vh-210px)] flex justify-end z-[9] mt-[-200px] ">
              <div className="relative h-[calc(100vh-210px)] aspect-[9/17]">

                <img src="phone.png" alt=""  className="w-full h-full"/>
                <div className="absolute  transition-all duration-[0.3s] top-[50%] left-[50%] w-[calc(100%-40px)] translate-x-[-50%] h-[calc(100%-40px)] translate-y-[-50%] bg-[blue] rounded-[14%]  flex-wrap overflow-hidden">
                    <img src="bg.jpg" className="w-full h-full absolute top-0 left-0 " alt="" />
                  <div className="w-full relative top-0 left-0 py-[100px] flex justify-start items-start gap-y-[40px] gap-x-[calc(10%-0px)] px-[5%] flex-wrap">

                    <App title="Propj 1" logo="proj1.png" id={1} clicked={()=>{}}/>
                    <App title="Propj 1" logo="proj2.png" id={1} clicked={()=>{}}/>
                    <App title="Propj 1" logo="proj3.png" id={1} clicked={()=>{}}/>
                    <App title="Propj 1" logo="proj4.png" id={1} clicked={()=>{}}/>
                    <App title="Propj 1" logo="proj5.png" id={1} clicked={()=>{}}/>
                  </div>
                      
                    <Screen/>
                      
                </div>

              </div>

            </div> */}

<div className={`device device-google-pixel-6-pro ${width<=900?'!scale-[0.8]':'!md:scale-1'}`}>
  <div className="device-frame  overflow-hidden ">
      <div className="relative overflow-hidden device-screen w-full h-full  !flex justify-start items-start gap-y-[0px] gap-x-[calc(10%-0px)] !px-[5%] flex-wrap  ">
      <img alt="" className=" absolute top-0 left-0 z-[0]" src="bg.jpg"/>
        <div className="!flex justify-start items-start gap-y-[40px] mt-[80px] gap-x-[calc(10%-0px)] !px-[5%] flex-wrap relative select-none">

          <App title={projectsd[0].title} logo="proj1.png" id={1} clicked={()=>handleApp(0)}/>
          <App title={projectsd[1].title} logo="proj2.png" id={1} clicked={()=>handleApp(1)}/>
          <App title={projectsd[2].title} logo="proj3.png" id={1} clicked={()=>handleApp(2)}/>
          <App title={projectsd[3].title} logo="proj4.png" id={1} clicked={()=>handleApp(3)}/>
          <App title={projectsd[4].title} logo="proj5.png" id={1} clicked={()=>handleApp(4)}/>
        </div>

          <Screen imgs={imgs}/>
    </div>
  </div>
  <div className="device-stripe relative z-[9]"></div>
  <div className="device-header relative z-[9]"></div>
  <div className="device-sensors relative z-[9]"></div>
  <div className="device-btns relative z-[9]"></div>
  <div className="device-power relative z-[9]"></div>
</div>

         
          </div>

        </div>
      </div>


      <div className="w-full h-max min-h-[100vh] bg-[#ffce2e] overflow-hidden">
      <div className="w-[full] h-[2px] my-[10px] bg-[#1c1d1e]"></div>
        <div className="text-center text-[30px] md:text-[60px] lg:text-[120px] font-[super] text-[#1c1d1e]">
            Get to know me
        </div>
        <div className="w-full h-full px-[40px] flex justify-between items-center overflow-hidden">
          <div className="w-[50%] h-full flex justify-center items-center leading-[0] ">

            <div className="text-[50px] h-min text-[#1c1d1e] leading-[110%] mt-[0px]">
            Experienced flutter engineer with +4 years of solid expertise in mobile and web app development. Developed and maintained 8 apps on app Stores and web, continuously seeking new skills to fuel my passion for mobile and web app development. Proven direct client communication skills, adapting diverse needs into successful solutions. Skills in multiple programming languages and in problem solving.
            </div>
          </div>
          <img src="skills.png" className="mt-[100px] w-[50%]" alt="" />
        </div>

    </div>
    <div className="w-full h-[200px] bg-[#1c1d1e] text-[#fff] overflow-hidden">
    <div className="w-[full] h-[2px] my-[10px] bg-[#ffce2e] "></div>
      <div className="flex justify-between items-center mt-[140px] w-full px-[20px]">
        <div>

          Abdulhadi@gmail.com
        </div>
        <div className="w-[1px] h-[40px] bg-[#ffce2e]"></div>
        <div>+971123456789</div>
        <div className="w-[1px] h-[40px] bg-[#ffce2e]"></div>
        <div>
          LinkedIn
        </div>
        <div className="w-[1px] h-[40px] bg-[#ffce2e]"></div>
        <div>@copyrights</div>
      </div>
    </div>
    </>
  );
}
