'use client'
import React, { useEffect, useRef } from 'react'
// import Contact from './Contact'
// import LogoMenu from './LogoMenu'

interface Props { }

function Menue(props: Props) {
    const { } = props
    const [open, setOpen] = React.useState(false)
    const [clicked, setClicked] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    // const images = [
    //     // '/wall1.webp',
    //     // 'wall2.webp',
    //     'wall3.webp',
    //     'wall4.webp',
    //     'wall6.webp'
    // ]

    useEffect(() => {
        // alert(1)
        if (open) {
            handleOpen()
            setClicked(true)
            // handleClose()
        }
        else if (clicked) {
            handleClose()
        }
    }, [open])

    const wall = useRef<HTMLDivElement>(null)
    const wallDots = useRef<HTMLDivElement>(null)
    const wallBg = useRef<HTMLDivElement>(null)
    const handleHover = (pos: number) => {
        document.querySelectorAll('.liitem').forEach((item) => {
            item.classList.add('opacity-[0.6]')
        }
        )
        handleDotsPositon(pos)
    }
    const handleMouseLeave = () => {
        document.querySelectorAll('.liitem').forEach((item) => {
            item.classList.remove('opacity-[0.6]')
        }
        )
        if (wallDots.current) {
            wallDots.current.style.backgroundSize = `12vmin 12vmin`
        }
        if (wallBg.current) {
            wallBg.current.classList.remove('tab:!bg-[length:100vmax]')
            wallBg.current.style.opacity = `1`
        }
    }
    const menu = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        menu.current?.classList.add('!h-[10px]')
        // menu.current?.querySelectorAll('div')?.forEach((element) => { element.classList.add('!bg-primary') })
        wall.current?.classList.add('!top-0',)
        wall.current?.classList.remove('opacity-0')
    }
    const handleClose = () => {
        menu.current?.classList.remove('!h-[10px]')
        // menu.current?.querySelectorAll('div')?.forEach((element) => { element.classList.remove('!bg-primary') })
        wall.current?.classList.remove('!top-0')
        wall.current?.classList.add('opacity-0')
        // setTimeout(() => {

        //     handleImgIndex()
        //     if (wallBg.current) {
        //         wallBg.current.style.backgroundPosition = `50% 40%`
        //     }
        // }, 700);
    }

    const handleDotsPositon = (pos: number) => {
        if (wallDots.current) {
            wallDots.current.style.backgroundSize = `11vmin 11vmin`

            wallDots.current.style.backgroundPosition = `0px ${-25 * pos}%`
        }
        if (wallBg.current) {
            wallBg.current.classList.add('tab:!bg-[length:100vmax]')
            wallBg.current.style.opacity = `0.9`

            wallBg.current.style.backgroundPosition = `0px ${30 + (20 * (pos - 1))}%`
        }
    }

    // const handleImgIndex = () => {
    //     if (index === images.length - 1) {
    //         setIndex(0)
    //     }
    //     else {
    //         setIndex((prev) => prev + 1)
    //     }
    // }
    // const [conatct, setContact] = React.useState(0)
    // const handleContact = () => {
    //     setContact((prev) => (prev + 1))
    // }
    return (
        <>
            <div className='w-[80px] tab:w-[100px] flex flex-col justify-between items-center h-[20px] transition-all duration-[0.3s] z-[99999] cursor-pointer font-[pop]' onClick={() => setOpen((prev) => !prev)} ref={menu}>
                <div className='w-full h-[5px] bg-[#fff] transition-all duration-[0.3s] rounded-xl'></div>
                <div className='w-full h-[5px] bg-[#fff] transition-all duration-[0.3s] rounded-xl'></div>
            </div>

            <div className='w-[100vw] h-[100vh] fixed top-[-100vh] left-0 z-[9999] bg-[#000] transition-all duration-[0.8s] opacity-0 overflow-hidden' ref={wall} >
                <div className='absolute top-0 left-0 w-full h-full bg-[#ff7b004d]'></div>
                <nav className='w-full h-full flex justify-center items-center relative gap-[30px]' >
                    <div id='wallbg' className={`w-[100vw] h-[100vh] absolute top-0 left-0 mix-blend-multiply transition-all duration-[0.8s] bg-[50%_40%] tab:bg-[length:110vmax] bg-no-repeat bg-cover`} ref={wallBg}></div>
                    <div id='wall' className='w-[100vw] h-[100vh] absolute top-0 left-0 bg-[length:12vmin_12vmin] translate-all duration-[0.8s]' ref={wallDots}></div>
                    <div className='max-w-[100px] absolute top-[20px] left-[5%] opacity-[0.6]'>
                        <img src="logo.svg" alt="" />

                    </div>
                    <div className='w-[6px] h-full bg-primary mix-blend-screen hidden lap:block'></div>
                    <ul className='text-primary text-[60px] lap:text-[120px] font-[pop] flex flex-col justify-center mt-[50px] lap:mt-0 lap:justify-between relative gap-[40px]' >
                        <div className='relative h-min w-fit'>
                            <li onClick={() => setOpen((prev) => !prev)} className='peer relative liitem w-fit transition-all duration-[0.3s] hover:!opacity-[1] z-[4] ' onMouseOver={() => handleHover(1)} onMouseLeave={handleMouseLeave}><a href="#about" className=' '>About Me</a></li>
                            <div className='inline w-full h-min strokec  font-[pop] absolute top-0 left-[50%] translate-x-[-50%] text-[#00000000]  peer-hover:top-[10px] peer-hover:left-[calc(50%-10px)] opacity-0 peer-hover:opacity-[1] transition-all duration-[0.3s]'>
                                About Me
                            </div>
                        </div>


                        <div className='relative h-min w-fit'>

                            <li onClick={() => setOpen((prev) => !prev)} className='peer relative liitem w-fit transition-all duration-[0.3s] hover:!opacity-[1] z-[4] ' onMouseOver={() => handleHover(2)} onMouseLeave={handleMouseLeave}><a href="#projects" className=' '>Projects</a></li>
                            <div className='inline w-full h-min strokec  font-[pop] absolute top-0 left-[50%] translate-x-[-50%] text-[#00000000]  peer-hover:top-[10px] peer-hover:left-[calc(50%-10px)] opacity-0 peer-hover:opacity-[1] transition-all duration-[0.3s]'>
                                Projects
                            </div>
                        </div>


                        <div className='relative h-min w-fit'>

                            <li onClick={() => setOpen((prev) => !prev)} className='peer relative liitem w-fit transition-all duration-[0.3s] hover:!opacity-[1] z-[4] ' onMouseOver={() => handleHover(3)} onMouseLeave={handleMouseLeave}><a href="#contact" className=' '>Get In Touch</a></li>
                            <div className='inline w-full h-min strokec  font-[pop] absolute top-0 left-[50%] translate-x-[-50%] text-[#00000000]  peer-hover:top-[10px] peer-hover:left-[calc(50%-10px)] opacity-0 peer-hover:opacity-[1] transition-all duration-[0.3s]'>
                                Get In touch
                            </div>
                        </div>

                    </ul>
                </nav>
            </div>
            {/* <Contact status={conatct} /> */}

        </>
    )
}

export default Menue
