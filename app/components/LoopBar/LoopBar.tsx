'use client'
import React, { useEffect, useRef } from 'react'

interface Props {
    children: React.ReactNode[]
}

export default function LoopBar(props: Props) {
    const scrollerRef = useRef<HTMLDivElement>(null)
    const [isAnimated, setIsAnimated] = React.useState(false)

    useEffect(() => {
        // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsAnimated(true)
        // }
    }, [])

    return (
        <div 
            className={` max-w-[400px] ssroller`} 
            ref={scrollerRef}
        >
            <div className={`py-[10px] flex gap-x-[20px] flex-wrap font-[pop] sinnerscroller`}>
                {props.children.map((elmnt, i) => (
                    <React.Fragment key={i}>{elmnt}</React.Fragment>
                ))}
                {props.children.map((elmnt, i) => (
                    <React.Fragment key={`dup-${i}`}>{elmnt}</React.Fragment>
                ))}
            </div>
        </div>
    )
}