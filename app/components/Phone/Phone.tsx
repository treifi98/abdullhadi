'use client'
import useWindowSize from "@/app/hooks/useWindowSize";
import React, { useEffect, useRef, useState } from "react";
import App from "../App/App";
import Screen from "../Screen/Screen";
import "../../devices.css";
import Explain from "../Explain/Explain";

export default function Phone() {
  const projectsd = [
    {
      title: "Kidopi",
      desc: "is a family calendar app that simplifies scheduling for family members' activities. Assign roles, add other families to your circle, and receive reminders and notifications.",
      skills:
        "MVC , GetX , Firebase Messaging ,Get Storage , Get Connect ,Google Maps API.",
      img: "/proj1.png",
      id: "1",
    },
    {
      title: "Sanad",
      desc: "The app's purpose is to streamline and tracks workflow, sales, and delivery across companies' departments. It provides real-time order status updates for managers, sales staff, warehouse staff, drivers, and more. The app generates data flow for reports, enhancing transparency and workflow efficiency while minimizing errors.",
      skills: "Firebase Messaging · GetX · MVC",
      img: "/proj4.jpg",
      id: "2",
    },
    {
      title: "Staff Breeze",
      desc: "A service providers platform that allows customers to find and hire personal assistants based on their needs. The platform offers a solution to the issue of work-life balance, providing users with personal assistants who can help them organize their schedules.",
      skills: "Riverpod ,  BLoC , Teamwork , Firebase Messaging Git",
      img: "/proj4.jpg",
      id: "3",
    },
    {
      title: "Wave",
      desc: "is a powerful mobile app for personal finance management. It offers users adding and managing their financial assets, and customizable news feeds based on their assets, comprehensive assets tracking, and management. The app's intuitive design and user-friendly interface make it easy for users to stay on top of their finances.",
      skills: "Dio · RSS · BLoC",
      img: "/proj4.jpg",
      id: "4",
    },
    {
      title: "Direct Debit",
      desc: "A fintech mobile application designed to facilitate the setup and management of recurring payments through Direct Debit. The app enables payers to authorize payments, track upcoming and past transactions and manage multiple payment mandates securely and efficiently. It simplifies rent, tuition, subscription, and utility payments by offering a seamless, automated experience, reducing manual effort for both payers and merchants.",
      skills:
        "Provider , Flutter web , UAE pass authentication , fintech , Deep Link , GIT , Testing",
      img: "/proj4.jpg",
      id: "4",
    },
  ];

  const { width, height } = useWindowSize();
  const [imgs, setImgs] = useState([""]);
  const [active, setActive] = useState(0);
  const [visitied, setVisited] = useState(0);
  const [Tip, setTip] = useState(false);

  const projects = [
    ["kodi/1.jpg", "kodi/2.jpg", "kodi/3.jpg", "kodi/4.jpg", "kodi/5.jpg"],
    ["kodi/1.png", "kodi/2.jpg", "kodi/3.jpg", "kodi/4.jpg", "kodi/5.jpg"],
    ["breeze/1.jpg", "breeze/2.jpg", "breeze/3.jpg", "breeze/4.jpg"],
    ["wave/1.png", "wave/2.png", "wave/3.png", "wave/4.png"],
    ["dd/1.jpg", "dd/2.png", "dd/3.png", "dd/4.png", "dd/5.png"],
  ];

  const handleApp = (index: number) => {
    setImgs(projects[index]);
    setActive(index);

    document.querySelector(".target")?.classList.remove("scale-0");
    document.querySelector(".target")?.classList.add("scale-1");
    document.querySelector(".tango")?.classList.remove("flex-[0]");
    document.querySelector(".tango")?.classList.add("flex-[1]");
    document.querySelector(".tango")?.classList.remove("w-0");
    document.querySelector(".tango")?.classList.add("w-full");
    document.querySelector(".tango")?.classList.remove("h-0");
    document.querySelector(".tango2")?.classList.remove("w-0");
    document.querySelector(".tango2")?.classList.add("w-full");
    document.querySelector(".tango3")?.classList.remove("w-0");
    document.querySelector(".tango3")?.classList.add("w-[calc(100%-15px)]");
  };
  const handleNext = () =>
    active == projects.length - 1 ? setActive(0) : setActive(active + 1);

  const handlePrev = () =>
    active == 0
      ? setActive(projects.length - 1)
      : setActive((prev) => prev - 1);

  const elementRef = useRef(null);

  const elementIsVisibleInViewport = (el:any, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  const handleScroll = () => {
    if (elementRef.current) {
      const isVisible = elementIsVisibleInViewport(elementRef.current);
      // if(isVisible){
      // }
      
      // Do something when element is visible
      if (isVisible && visitied == 0) {
        // Your code here when element is visible
        setTip(true)

        setVisited(1)
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visitied]);
  ////////////////////////////////////////////////////

  return (
    <>
      <div className="w-[90%] h-full relative mx-auto max-w-[1200px] flex-col transition-all duration-[0.5s] mt-[20px] flex justify-center">
        <div className=" w-full h-full flex flex-col-reverse md:flex-row justify-center mx-auto items-center transition-all duration-[0.5s]  md:gap-[0px] overflow-hidden">
          <div className="text-[#fff] text-[22px] h-0 md:max-h-[360px]  w-0 overflow-hidden tango transition-all duration-[0.5s]">
            <div className="mr-[100px]">
              <div className="px-[10px] font-bold italic inline-block relative mr-[5px]">
                <span className="relative text-[22px] z-[9]">
                  {projectsd[active].title}
                </span>
                <div className="w-0 h-full absolute top-0 left-0 transition-all delay-[0.5s] duration-[0.6s] bg-[#ff7b004d] tango2 inline-block"></div>
              </div>
              {projectsd[active].desc}
              <div className="mt-[20px]">
                <div className="relative inline-block">
                  <span className="text-[22px] relative z-[9] font-bold italic inline-block mr-[15px]">
                    Skills
                  </span>
                  <div className="w-0 h-full  border-b-[2px] border-[#ff7b004d] absolute top-0 left-0 transition-all delay-[0.7s] duration-[0.6s] tango3 inline-block"></div>
                </div>
                {projectsd[active].skills}
              </div>
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

          <div className={`device device-google-pixel-6-pro`} ref={elementRef}>
            <div className="device-frame  overflow-hidden ">
              <div className="relative overflow-hidden device-screen w-full h-full  !flex justify-start items-start gap-y-[0px] gap-x-[calc(10%-0px)] !px-[5%] flex-wrap  ">
                <img
                  alt=""
                  className=" absolute top-0 left-0 z-[0]"
                  src="bg.jpg"
                />
                <div className="!flex justify-start items-start gap-y-[40px] mt-[80px] gap-x-[calc(10%-0px)] !px-[5%] flex-wrap relative select-none">
                  <App
                    title={projectsd[0].title}
                    logo="proj1.png"
                    id={1}
                    clicked={() => handleApp(0)}
                  />
                  <App
                    title={projectsd[1].title}
                    logo="proj2.png"
                    id={1}
                    clicked={() => handleApp(1)}
                  />
                  <App
                    title={projectsd[2].title}
                    logo="proj3.png"
                    id={1}
                    clicked={() => handleApp(2)}
                  />
                  <App
                    title={projectsd[3].title}
                    logo="proj4.png"
                    id={1}
                    clicked={() => handleApp(3)}
                  />
                  <App
                    title={projectsd[4].title}
                    logo="proj5.png"
                    id={1}
                    clicked={() => handleApp(4)}
                  />
                </div>

                <Screen imgs={imgs} />
              </div>
            </div>
            <div className="device-stripe relative z-[9]"></div>
            {/* <div className="device-header relative z-[9]"></div> */}
            <div className="device-sensors relative z-[9]"></div>
            <div className="device-btns relative z-[9]"></div>
            <div className="device-power relative z-[9]"></div>
          </div>
        </div>
        {
          Tip && 
        <Explain/>
        }
      </div>
    </>
  );
}
