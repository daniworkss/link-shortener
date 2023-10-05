/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react"
import Link from "next/link"
import Advancestats from "./Advanced-stats"
import axios from 'axios';
import { useState, useRef } from "react"
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
 

// to handle shortening the links passed in from the input 
   async function handleSubmit(){
    // this os to set the link copied text to be invisible while creating a new short link for the user
    setlinkCopied(false)
        const encodedParams = new URLSearchParams();
        // this passes the link in the input element i.e linkvalue into the new encodedParams variable it is then passed into the options to make 
        // a request
        encodedParams.set('url', linkValue);

        const options = {
            // link options is spread here. visit the lib api.js to view the contents of linkoptions
        ...linkOptions,
        // from the encodedparams above
        data: encodedParams,
        };
    //   it all starts from here
       if (linkValue.trim() !== ''){
        seterrorMessage('')
        linkRef.current.style.border = '0px'

            try {
                const response = await axios.request(options);
                // to enable loading component
                setLoading(true)
                setTimeout(()=>{
                    // to disable loading component
                    setLoading(false)
                   const linkResponse=(response.data);

                //object deconstruction to get just the new link and prevent errors
                   let {result_url} = linkResponse
                    const newItem = {
                        linkValue,
                        result_url
                    }
                    
                    setshortenedLinkItems([...shortenedLinkItems, newItem])
                    console.log(shortenedLinkItems)
                    // empty the result url so you can generate new ones above
                    result_url= ''
                    setlinkValue('')
                }, 3000)

            } catch (error) {
                console.error(error);
                seterrorMessage('Something went wrong. Please enter a valid url')
                linkRef.current.style.border = '2px solid red'
            }
           
       } else{
        seterrorMessage('Please enter in a url')
        linkRef.current.style.border = '2px solid red'
       }
    }

// use cliboard.js to copy the link
useEffect(()=>{

try {
// .copy-button is the className of the button that is going to be used to copy the link to clipboard
const clipboard = new ClipboardJS('.copy-button');
    clipboard.on('success', (e) => {
        console.log('List copied to clipboard:\n' + e.text);
        // here user has successfully copied the text so set to true
        setlinkCopied(true)
      });
      return () => {
        clipboard.destroy(); // Clean up when the component unmounts
      };
} catch (error) {
    console.error(error.message, 'failed to copy message')
}
},[]) 
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
            <div className="flex flex-col w-full h-[80px]">
            <input style={{outline: 'none'}}
            ref={linkRef}
            value={linkValue}
             onChange={e => setlinkValue(e.target.value)}
             type="text" 
             placeholder="Shorten a link here"  
             className={`pl-2 text-[18px] h-[60px]  rounded-[5px] regular-font text-Grayish-Violet`}
             
             />
             <p className="italic-font text-[14px] text-red mt-[5px]">{errorMessage}</p>
            </div>
            <button
            onClick={handleSubmit}
            className="bg-cyan bold-font no-select  text-white h-[60px] flex justify-center items-center text-[18px] rounded-[5px]"
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
      <div className="bg-advancestat-bg pt-[8rem] -mt-[5rem]">
        <div className="-mt-[1rem] h-[40px] mb-3 flex justify-center items-center regular-font text-Vdark-Blue">
            <p className={`${linkCopied ? 'block': 'hidden'}`}>Link Copied!</p>
        </div>
      <div className="shortlinks-container w-full justify-center flex  flex-col items-center gap-[1.5rem]" >
       {
        shortenedLinkItems.map((items, i)=>(
            <div key={i} className="bg-white w-[90%] shortened_link_box pl-3 pr-3 pt-8  h-[180px] rounded-[5px] flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[1rem]">
              {/* div is used here to make an overflow in the css */}
              <div className="regular-font  overflow-div">{items.linkValue}</div>
              <div className="line w-full h-[1px] bg-Gray"></div>
              {/* for new link */}
               <a className="regular-font text-cyan">{items.result_url}</a>
              </div>
              <button data-clipboard-text={items.result_url}  className={`w-full bg-cyan copy-button text-white bold-font h-[45px]`}>
                Copy
              </button>
            </div>
        ))
       }
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