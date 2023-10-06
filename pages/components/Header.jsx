import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header(){
  const [openMenu, setopenMenu] = useState()
  function handleMenu(){
    if(!openMenu){
      document.documentElement.style.overflow = 'hidden'
    }else if (openMenu){
      document.documentElement.style.overflow = 'scroll'
    }
     setopenMenu(!openMenu)
  }
    return(
        <div style={{maxWidth: '1250px', margin: '0px auto'}} className="  header-container bg-inherit  h-[70px] tablet:h-[90px] w-full flex items-center  justify-between tablet:pl-4 tablet:pr-4">
         <div className="pl-6">
            <Image src={'./logo.svg'}
              alt="logo"
              width={100}
              height={100}
            />
         </div>

         <div className="link-wrapper z-40 laptop:static absolute w-full top-[3.2rem] tablet:top-[4rem] laptop:top-0 flex justify-center">
          {/* come back here */}
            <div className={`links w-[90%] laptop:w-full laptop:justify-between rounded-[10px] bg-dark-violet laptop:h-[70px] laptop:items-center laptop:flex laptop:bg-inherit ${!openMenu ? 'h-0 transition-all duration-[.2s] ease-out' : 'h-[420px] transition-all duration-[.2s] ease-in'} overflow-y-hidden mt-[1rem] mb-[1rem] `}>
              <div className="mb-[2rem] mt-[1rem] laptop:mt-0 laptop:mb-0  laptop:ml-[2rem]">
                <ul className="flex flex-col items-center pt-[1rem]  laptop:pt-0 laptop:flex-row laptop:text-Vdark-Blue laptop:text-[14px] text-white text-[18px] bold-font gap-[2rem] laptop-link">
                  <Link href={'./'}>Features</Link>
                  <Link href={'./'}>Pricing</Link>
                  <Link href={'./'}>Resources</Link>
                </ul>
              </div>
              <div className="w-full flex justify-center mb-[2rem] laptop:hidden">
              <div className="line w-[90%] h-[0.5px] bg-Grayish-Violet" ></div>
              </div>
              <div className="flex justify-center pb-[4rem] laptop:pb-0 ">
                  <ul className="bold-font text-[18px] text-white flex-col flex gap-[2rem] items-center laptop:flex-row laptop:text-[14px]">
                  <Link href={'./'} className='laptop:text-Vdark-Blue laptop-link hover:bold-font'>Login</Link>
                  <Link href={'./'} className="bg-cyan w-[300px] h-[50px] flex items-center justify-center rounded-[20px] text-center laptop:w-[120px] laptop:h-[40px]">Signup</Link>
                  </ul>
              </div>
            </div>
         </div>

         {/* for burger menu */}
         <div onClick={handleMenu} className=" no-select burger laptop:hidden text-4xl text-Grayish-Violet pr-6">
         <ion-icon name={`${!openMenu ? 'menu': 'close'}`}></ion-icon>
         </div>
        </div>
    )
}