/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

export default function Maincontent(){
    return(
     <main>
         <div className="hero-section flex flex-col laptop:flex-row gap-[1rem]">
        <div className="flex justify-center w-full no-select">
            <img className=" hero-img ml-[6rem] no-select"
            src={'/illustration-working.svg'}
            alt="hero image"
            objectFit="cover"
            
            />
        </div>
        <div className="hero-text">
            <h1 className="text-[45px] leading-11 bold-font text-Vdark-Blue  text-center">More than just shorter links</h1>
            <p className="text-[22px] pl-6 pr-6 mt-[.5rem] text-Grayish-Violet text-center">Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
           
           <div className="w-full flex justify-center mt-[1.5rem] pb-8">
           <Link href={'/'} className="bg-cyan text-white bold-font text-[18px] pl-[3rem]  pr-[3rem] pt-[15px] pb-[15px] rounded-[25px]">Get Started</Link>
           </div>
        </div>
      </div>

      {/* for shortening link */}
      <div className="link-wrapper mt-[2rem] flex justify-center mb-[30rem]">
        <div className="link-container flex flex-col justify-center pl-4 pr-4 gap-[1rem] bg-dark-violet rounded-[10px] w-[90%] h-[200px]">
            <input style={{outline: 'none'}} type="text" placeholder="Shorten a link here"  className="pl-2 text-[18px] h-[60px] rounded-[5px] regular-font text-Grayish-Violet"/>
            <Link
            className="bg-cyan bold-font text-white h-[60px] flex justify-center items-center text-[18px] rounded-[5px]"
             href={'/'}>
                Shorten It!
            </Link>
        </div>
      </div>
     </main>
    )
}