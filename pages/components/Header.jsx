import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header(){
  const [openMenu, setopenMenu] = useState()
    return(
        <div className="bg-red-100 h-[80px] w-full flex items-center  justify-between">
         <div className="pl-6">
            <Image src={'./logo.svg'}
              alt="logo"
              width={100}
              height={100}
            />
         </div>

         <div className="link-wrapper absolute w-full top-[5rem] flex justify-center">
          {/* come back here */}
            <div className={`links w-[90%] rounded-[10px] bg-dark-violet ${!openMenu ? 'h-0 transition-all duration-[.2s] ease-out' : 'h-[420px] transition-all duration-[.2s] ease-in'} overflow-y-hidden mt-[1rem] mb-[1rem] `}>
              <div className="mb-[2rem] mt-[1rem]">
                <ul className="flex flex-col items-center pt-[1rem] text-white text-[18px] bold-font gap-[2rem]">
                  <Link href={'./'}>Features</Link>
                  <Link href={'./'}>Pricing</Link>
                  <Link href={'./'}>Resources</Link>
                </ul>
              </div>
              <div className="w-full flex justify-center mb-[2rem]">
              <div className="line w-[90%] h-[0.5px] bg-Grayish-Violet" ></div>
              </div>
              <div className="flex justify-center pb-[4rem]">
                  <ul className="bold-font text-[18px] text-white flex-col flex gap-[2rem] items-center">
                  <Link href={'./'}>Login</Link>
                  <Link href={'./'} className="bg-cyan w-[300px] h-[50px] flex items-center justify-center rounded-[20px] text-center">Signup</Link>
                  </ul>
              </div>
            </div>
         </div>

         {/* for burger menu */}
         <div onClick={()=> setopenMenu(!openMenu)} className=" no-select burger laptop:hidden text-4xl text-Grayish-Violet pr-6">
         <ion-icon name="menu"></ion-icon>
         </div>
        </div>
    )
}