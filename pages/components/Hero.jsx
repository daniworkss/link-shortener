/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import Advancestats from "./Advanced-stats"
import { useState } from "react"

export default function Maincontent(){
    let number = 3
    function handleSubmit(){
        number+= 1
        
        console.log(number)
    }
    
    return(
     <main>
         <div className="hero-section bg-white pt-[2rem] flex flex-col laptop:flex-row gap-[1rem]">
        <div className="flex justify-center w-full no-select">
            <div className="w-full  h-[270px]">
            <img className="hero-img ml-[3rem] laptop:static" src="./illustration-working.svg" alt="hero-image" />
            </div>
           
        </div>
        <div className="hero-text">
            <h1 className="text-[42px] leading-11 bold-font text-Vdark-Blue  text-center">More than just shorter links</h1>
            <p className="text-[22px] pl-6 pr-6 mt-[.5rem] text-Grayish-Violet text-center">Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
           
           <div className="w-full flex justify-center mt-[1.5rem] pb-8 no-select">
           <Link href={'/'}className="bg-cyan no-select text-white bold-font text-[18px] pl-[3rem]  pr-[3rem] pt-[15px] pb-[15px] rounded-[25px]">Get Started</Link>
           </div>
        </div>
      </div>

      {/* for shortening link */}
      <div className="link-wrapper mt-[2rem] flex justify-center ">
        <div className="link-container flex flex-col justify-center pl-4 pr-4 gap-[1rem] bg-dark-violet rounded-[10px] w-[90%] h-[200px]">
            <input style={{outline: 'none'}} type="text" placeholder="Shorten a link here"  className="pl-2 text-[18px] h-[60px] rounded-[5px] regular-font text-Grayish-Violet"/>
            <button
            onClick={handleSubmit}
            className="bg-cyan bold-font no-select text-white h-[60px] flex justify-center items-center text-[18px] rounded-[5px]"
             href={'/'}>
                Shorten It!
            </button>
        </div>
      </div>
     <Advancestats/>
     <div className=" boost-bg bg-dark-violet h-[350px] flex justify-center items-center flex-col gap-[1rem]">
        <h1 className="text-white bold-font text-[24px]">Boost your links today</h1>
        <Link href={'/'} className="bg-cyan text-white regular-font pl-10 pr-10 pt-3 pb-3 rounded-[20px] no-select text-[18px]">
         Get Started
        </Link>
     </div>
     </main>
    )
}