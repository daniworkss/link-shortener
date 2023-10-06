import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Foooter(){
    return(
        <div className="flex w-full bg-Vdark-Violet justify-center laptop:h-[250px]">
            <div style={{maxWidth: '1200px'}}className="pb-[1rem] laptop:w-full bg-inherit pt-[1rem] laptop:flex laptop:justify-between laptop:items-start ">
            <div className="footer_logo_container w-full flex justify-center pt-[2rem] laptop:w-[20%]">
              <Image
                 src={'footerlogo.svg'}
                 width={120}
                 height={120}
                 alt="footer logo"
              />
            </div>

            <div className="mt-4 pt-[1.5rem]">
                <li className="bold-font text-white text-center laptop:text-left mb-[1rem] " style={{listStyle: 'none'}}>Features</li>
                <ul className="text-Grayish-Violet flex flex-col text-center laptop:text-left gap-[5px] regular-font">
                  <Link href={'/'}>Link Shortening</Link>
                  <Link href={'/'}>Branded Links</Link>
                  <Link href={'/'}>Analytics</Link>
                </ul>
            </div>

            <div className="mt-4 pt-[1.5rem]">
                <li className="bold-font text-white text-center mb-[1rem] laptop:text-left " style={{listStyle: 'none'}}>Resources</li>
                <ul className="text-Grayish-Violet flex flex-col text-center gap-[5px] laptop:text-left regular-font">
                  <Link href={'/'}>Blog</Link>
                  <Link href={'/'}>Developers</Link>
                  <Link href={'/'}>Support</Link>
                </ul>
            </div>

            <div className="mt-4 pt-[1.5rem]">
                <li className="bold-font text-white text-center mb-[1rem] laptop:text-left " style={{listStyle: 'none'}}>Company</li>
                <ul className="text-Grayish-Violet flex flex-col text-center laptop:text-left gap-[5px] regular-font">
                  <Link href={'/'}>About</Link>
                  <Link href={'/'}>Our Team</Link>
                  <Link href={'/'}>Contact</Link>
                </ul>
            </div>
{/* icons */}
            <div className="flex gap-[10px] justify-center mt-[3rem] pb-[2rem] laptop:mt-8 laptop:p-0">
               <div className="text-white text-[24px]">
               <ion-icon name="logo-facebook"></ion-icon>
               </div>
               <div className="text-white text-[24px]">
               <ion-icon name="logo-twitter"></ion-icon>
               </div>
               <div className="text-white text-[24px]">
               <ion-icon name="logo-pinterest"></ion-icon>
               </div>
               <div className="text-white text-[24px]">
               <ion-icon name="logo-instagram"></ion-icon>
               </div>
            </div>
        </div>
        </div>
    )
}