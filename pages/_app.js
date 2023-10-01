import '@/styles/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    <Script src ="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" />
    </>
  ) 
}
