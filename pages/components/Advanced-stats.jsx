import React from "react";
import Image from "next/image";
export default function Advancestats(){
 return(
    <div className="stats-container bg-advancestat-bg w-full -mt-[4rem] pb-[4rem] pt-[12rem] pl-4 pr-4">
    <h2 className="text-center bold-font text-[26px] text-Vdark-Blue">Advanced Statistics</h2>
    <p className="text-center mt-[1rem] regular-font text-[18px] text-Grayish-Violet ">Track how your links are performing acroos the web with our advanced statistics dashboard.</p>

    <div className="box-col mt-[2rem] pt-[4rem]">
    <div className="box-container flex flex-col items-center ">
         {/* for icon */}
         <div className="w-full flex justify-center">
          <div className="box-circle z-0  flex justify-center items-center w-[90px] h-[90px] rounded-[50%] bg-dark-violet">
            <Image
              src={'/icon-brand-recognition.svg'}
              width={45}
              height={45}
              alt="brand recogniton icon"
            />          
            </div>
         </div>

         <div className="box">
            <h2 className="text-Vdark-Blue bold-font text-[24px] text-center w-full">Brand Recognition</h2>
            <p className="regular-font text-Grayish-Violet text-center pl-3 pr-3 leading-[30px] pt-[1rem]"> Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instill confidence in your content.</p>
         </div>
      </div>
      {/* line spacing */}
      <div className="line-container flex justify-center w-full">
      <div className="box-line bg-cyan w-[10px] h-[40px]"></div>         
      </div>
      <div className="box-container flex flex-col items-center ">
         {/* for icon */}
         <div className="w-full flex justify-center">
          <div className="box-circle z-0  flex justify-center items-center w-[90px] h-[90px] rounded-[50%] bg-dark-violet">
            <Image
              src={'/icon-detailed-records.svg'}
              width={45}
              height={45}
              alt="brand recogniton icon"
            />          
            </div>
         </div>

         <div className="box">
            <h2 className="text-Vdark-Blue bold-font text-[24px] text-center w-full">Detailed Records</h2>
            <p className="regular-font text-Grayish-Violet text-center pl-4 pr-4 leading-[30px] pt-[1rem]">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
         </div>
      </div>
      {/* line spacing */}
      <div className="line-container flex justify-center w-full">
      <div className="box-line bg-cyan w-[10px] h-[40px]"></div>         
      </div>
      <div className="box-container flex flex-col items-center ">
         {/* for icon */}
         <div className="w-full flex justify-center">
          <div className="box-circle z-0  flex justify-center items-center w-[90px] h-[90px] rounded-[50%] bg-dark-violet">
            <Image
              src={'/icon-fully-customizable.svg'}
              width={45}
              height={45}
              alt="brand recogniton icon"
            />          
            </div>
         </div>

         <div className="box">
            <h2 className="text-Vdark-Blue bold-font text-[24px] text-center w-full">Fully Customizable</h2>
            <p className="regular-font text-Grayish-Violet text-center pl-2 pr-2 leading-[30px] pt-[1rem]">Improve brand awareness and content discoverability through customizable links. supercharging audience engagement</p>
         </div>
      </div>
    </div>
    </div>
 )
}