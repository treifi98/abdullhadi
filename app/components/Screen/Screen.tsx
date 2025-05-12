import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  imgs: string[];
}

// Define proper type for the arrow props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

export default function Screen(props: Props) {
  // Define a proper type for the slider ref - using any for now but will improve after installing types
  const sliderRef = useRef<Slider | null>(null);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  };

  const handleClose = () => {
    document.querySelector('.target')?.classList.remove('scale-1');
    document.querySelector('.target')?.classList.add('scale-0');
    document.querySelector('.tango')?.classList.add('flex-[0]');
    document.querySelector('.tango')?.classList.remove('flex-[1]');
    document.querySelector('.tango')?.classList.add('w-0');
    setTimeout(() => {
      
      document.querySelector('.tango')?.classList.add('h-0');
    }, 500);
    document.querySelector('.tango')?.classList.remove('w-full');
    // setTimeout(() => {
      
    //   document.querySelector('.tango')?.classList.add('absolute');
    // }, 490);
    document.querySelector('.tango2')?.classList.add('w-0');
    document.querySelector('.tango2')?.classList.remove('w-full');
    document.querySelector('.tango3')?.classList.add('w-0');
    document.querySelector('.tango3')?.classList.remove('w-[calc(100%-15px)]');
    
    // Check if sliderRef.current exists before calling slickGoTo
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  return (
    <div className="target scale-0 w-full h-full bg-[pink] absolute top-0 left-0 overflow-hidden transition-all duration-[0.3s] origin-center">
      <Slider 
        {...settings} 
        ref={slider => {
          sliderRef.current = slider;
        }}
      >
        {props.imgs.map((img, index) => (
          <div key={index}>
            <img 
              alt="" 
              src={img} 
              className="w-full !block relative !h-[calc(100%-56px)] !object-cover text-[60px] text-[#fff] object-center"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 bg-[#000] w-full h-[56px] !flex justify-center items-center">
        <div 
          className="z-[2] cursor-pointer border-[2px] border-[#fff] rounded-full w-[30%] !flex justify-center items-center" 
          onClick={handleClose}
        >
          <img src="back.svg" className="w-[30px]" alt="" />
        </div>
      </div>
    </div>
  );
}