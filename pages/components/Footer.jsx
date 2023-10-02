import React from "react";
import Image from "next/image";
export default function Foooter(){
    return(
        <div className="h-[200px] bg-Vdark-Violet ">
            <div className="footer_logo_container w-full flex justify-center pt-[3rem]">
              <Image
                 src={'footerlogo.svg'}
                 width={100}
                 height={100}
                 alt="footer logo"
              />
            </div>
        </div>
    )
}