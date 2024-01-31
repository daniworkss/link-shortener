/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import Advancestats from "./Advanced-stats"
import axios from 'axios';
import { useState, useRef, useEffect } from "react"
import { linkOptions } from "@/lib/api";
import Loading from "./Loading-component";
import ClipboardJS from "clipboard";

export default function Maincontent(){

   const [linkValue, setlinkValue] = useState('')
   const [errorMessage, seterrorMessage] = useState('')
   //to hadle loading component
   const [loading, setLoading]= useState(false)
//link ref to manipulate the input when no link is passed in
   const linkRef = useRef()
// to handle the collection of links and maping them out 
   const [shortenedLinkItems, setshortenedLinkItems] = useState([])

   // this is to check if the user copied the text and show a message if the user has copied the text
   const [linkCopied, setlinkCopied] = useState(false)
   const [linkCopyMessage, setlinkCopyMessage] = useState('')
 

// to handle shortening the links passed in from the input 
   async function handleSubmit(){
    // this is to set the link copied text to be invisible while creating a new short link for the user
    setlinkCopied(false)
        const options = {
            // link options is spread here. visit the lib api.js to view the contents of linkoptions
        ...linkOptions,
       data:{
        url:linkValue,
       }
      };
    //   it all starts from here
       if (linkValue.startsWith('https') || linkValue.startsWith('http')){
        seterrorMessage('')
        linkRef.current.style.border = '0px'
            try {
                // to enable loading component
                setLoading(true)
                const response = await axios.request(options);
                // to disable loading component
                setLoading(false)
                const linkResponse=(response.data);
                //object deconstruction to get just the new link
                let {shortened} = linkResponse
                const newItem = {
                    linkValue,
                    shortened
                }    
                setshortenedLinkItems([...shortenedLinkItems, newItem])
                console.log(shortenedLinkItems)
                // empty the result url so you can generate new ones above
                shortened=''
                setlinkValue('')
                

            } catch (error) {
              setLoading(false)
               console.log(error)
                seterrorMessage('Something went wrong. Please try again')
                linkRef.current.style.border = '1px solid red '
            }
           
       } else{
        seterrorMessage('Please enter a valid url')
        linkRef.current.style.border = '1px solid red '
       }
    }

// use cliboard.js to copy the link
  useEffect(()=>{
        try {
        // .copy-button is the className of the button that is going to be used to copy the link to clipboard
        const clipboard = new ClipboardJS('.copy-button');
            clipboard.on('success', () => {
                // here user has successfully copied the text so set to true
                setlinkCopied(true)
                setlinkCopyMessage('Link Copied!!')
                setTimeout(()=>{
                  setlinkCopied(false)
                }, 2000)
              });
              return () => {
                clipboard.destroy(); // Clean up when the component unmounts
              };
        } catch (error) {
            console.error(error.message, 'failed to copy message')
            setlinkCopyMessage('Something Went Wrong...')

        }
  },[]) 

return(
     <main>
        <div className="laptop:flex laptop:w-full laptop:justify-center">
        <div className="hero-section bg-white pt-[2rem] flex flex-col laptop:h-[400px] laptop:pl-4 laptop:pr-4 laptop:flex-row-reverse gap-[1rem]" style={{maxWidth: '1200px'}}>
        <div className="flex justify-center w-full no-select laptop:-mr-[4rem]">
            <div className="w-full  h-[270px] laptop:h-[320px]">
            <img className="hero-img ml-[3rem] tablet:ml-[5rem] laptop:ml-0 laptop:static" src="./illustration-working.svg" alt="hero-image" />
            </div>
           
        </div>
        <div className="hero-text w-full ">
            <div>
            <h1 className="text-[42px] laptop:w-[70%] leading-11 laptop:leading-[70px] laptop:text-[52px] bold-font text-Vdark-Blue  text-center laptop:text-left tablet:mt-[7rem] laptop:mt-0">More than just shorter links</h1>
            </div>

           <div className="w-full flex justify-center laptop:justify-start">
           <p className="text-[22px] pl-6 pr-6 mt-[.5rem] text-Grayish-Violet text-center laptop:text-left laptop:pl-0 laptop:pr-0 tablet:w-[80%]">Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
           </div>
           <div className="w-full flex justify-center laptop:justify-start mt-[1.5rem] pb-8 no-select">
           <Link href={'#target-element'} className="bg-cyan  hover:opacity-[50%] transition-opacity duration-75 ease-in no-select text-white bold-font text-[18px] pl-[3rem]  pr-[3rem] pt-[15px] pb-[15px] rounded-[25px] ">Get Started</Link>
           </div>
        </div>
      </div>
        </div>

      {/* for shortening link */}
      <div className="link-wrapper mt-[2rem] flex justify-center ">
        <div  className="link-container flex flex-col justify-center pl-4 pr-4 gap-[1rem] bg-dark-violet rounded-[10px] laptop:rounded-[5px] w-[90%] h-[200px] tablet:h-[220px] tablet:pl-6 tablet:pr-6 laptop:h-[120px] mt-[3rem] laptop:items-center laptop:flex-row" style={{maxWidth:'1080px'}}>
            <div className="flex flex-col w-full h-[80px] " id='target-element'>
            <div className="h-[70px] w-full">
              <input style={{outline: 'none'}}
                ref={linkRef}
                value={linkValue}
                onChange={e => setlinkValue(e.target.value)}
                type="text" 
                placeholder="Shorten a link here"  
                className={`pl-2 text-[18px] h-[60px] w-full laptop:h-[65px]  rounded-[5px] regular-font text-Grayish-Violet laptop:w-full laptop:mt-2`}
              
              />
            </div>
             {/* <p className="italic-font text-[14px] text-red mt-[5px] ">{errorMessage}, hello nigga</p> */}
            </div>
            <button
            onClick={handleSubmit}
            className="bg-cyan bold-font laptop:w-[200px] no-select  text-white h-[60px] flex justify-center items-center text-[18px] rounded-[5px]"
             href={'/'}>
             {
                loading ? 
                <Loading/> :
                "Shorten it!"
             }
            </button>
        </div>
      </div>


      {/* this container will hold all links in it  */}
      <div className="bg-advancestat-bg pt-[8rem] -mt-[5rem] tablet:-mt-[7rem] laptop:-mt-[4rem] ">
        <div className="h-[40px] w-full  flex items-center justify-center ">
        <div className={` flex justify-center items-center ${ linkCopied ? 'h-[20px] transition-all duration-[.3s] ease-in' : 'h-0 overflow-hidden transition-all duration-[.3s] ease-out'}  laptop:text-[16px] mb-3 flex justify-center items-center regular-font text-Vdark-Blue`}>
            <p>{linkCopyMessage}</p>
        </div>
        </div>
      <div className="shortlinks-container w-full justify-center flex  flex-col items-center gap-[1.5rem]" style={{margin: '0px auto', maxWidth: '1200px'}} >
       {
        shortenedLinkItems.map((items, i)=>(
            <div key={i} className="bg-white w-[90%] shortened_link_box pl-3 pr-3 pt-8  laptop:justify-between h-[180px] rounded-[5px] flex flex-col gap-[1rem] laptop:h-[70px] laptop:flex-row laptop:items-center laptop:pt-0">
              <div className="flex flex-col gap-[1rem] laptop:flex-row laptop:justify-between laptop:w-full">
              {/* div is used here to make an overflow in the css */}
              <div className="regular-font  overflow-div">{items.linkValue}</div>
              <div className="line w-full h-[1px] bg-Gray laptop:hidden"></div>
              {/* for new link */}
               <a className="regular-font text-cyan">{items.shortened}</a>
              </div>
              <button data-clipboard-text={items.shortened}  className={` laptop:w-[200px] w-full bg-cyan copy-button pl-6 pr-6 rounded-[10px] text-white bold-font h-[45px]`}>
                Copy
              </button>
            </div>
        ))
       }
      </div>
      </div>
     <Advancestats/>
     <div className=" boost-bg bg-dark-violet h-[250px]  laptop:h-[300px] flex justify-center items-center flex-col gap-[1rem]">
        <h1 className="text-white bold-font text-[24px] tablet:text-[32px] tablet:mb-[.3rem]">Boost your links today</h1>
        <div>
        <Link href={'/'} className="bg-cyan hover:p-[15px] transition-p duration-[.1s] ease-linear text-white regular-font pl-10 pr-10 pt-3 pb-3 rounded-[20px] no-select text-[18px]">
         Get Started
        </Link>
        </div>
     </div>
     </main>
    )
}