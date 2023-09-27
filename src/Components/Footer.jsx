import { React, } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  let scrolltoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <div className="mx-4">
        <h1 className='text-6xl pt-2'>Join us in shaping the future of technology.</h1>
      </div>

      <div className='w-full mt-20  px-4'>
        <Link to="/" className='text-2xl border-[2px] border-white flex items-center justify-center pt-7 pb-9  text-center hover:bg-white hover:text-black'>View Careers</Link>
      </div>

      <div className="mt-32 grid grid-cols-12 px-5">
        <Link to="/" className='col-span-4 '>

          <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1180 320" class="a-icon--logo-text flex h-32 max-w-[126px]" data-new="" aria-hidden="true" style={{ width: "118px", height: "32px" }}><g data-v-cbc994d7="" fill="currentColor"><path d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z"></path><path d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z"></path><path d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z"></path><path d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z"></path><path d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z"></path><path d="m1163.69 68.18h-30.72v172.32h30.72z"></path><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"></path></g></svg>

        </Link>
        <div className='col-span-8'>
          <div className="grid grid-cols-4">
            <div>
              <h1 className='font-bold text-xl'>Research</h1>
              <div className="flex flex-col">
                <Link to="/" className='hover:underline font-[400] text-xl'>Overview</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Index</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>GPT-4</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>DALL·E 3</Link>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl'>API</h1>
              <div className="flex flex-col">
                <Link to="/" className='hover:underline font-[400] text-xl'>Overview</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Data privacy</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Pricing</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl flex  items-center'>
                  <span>Docs</span>
                  <span>
                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--arrow-north-east400 a-icon--text a-icon--no-align  relative f-ui-1 " data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg>
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl'>ChatGPT</h1>
              <div className="flex flex-col">
                <Link to="/" className='hover:underline font-[400] text-xl'>Overview</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Enterprise</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl flex  items-center'>
                  <span>Try ChatGPT</span>
                  <span>
                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--arrow-north-east400 a-icon--text a-icon--no-align  relative f-ui-1 " data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg>
                  </span>
                </Link>

              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl'>Company</h1>
              <div className="flex flex-col">
                <Link to="/" className='hover:underline font-[400] text-xl'>About</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Blog</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Careers</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Charter</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Security</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Customer stories</Link>
                <Link to="/" className='hover:underline font-[400]  text-xl'>Safety</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' px-4 mt-20'>
        <div className='w-full bg-white h-[1.5px]'></div>
      </div>

      <div className="grid grid-cols-12 px-5 mt-3">
        <div className='col-span-4'>
          <h1 className='text-xl font-bold'>OpenAI © 2015 – 2023</h1>
          <div className="flex flex-col">
            <Link to="/" className='hover:underline text-xl '>Terms & policies</Link>
            <Link to="/" className='hover:underline text-xl '>Privacy policy</Link>
            <Link to="/" className='hover:underline text-xl'>Brand guidelines</Link>
          </div>
        </div>
        <div className='col-span-8'>
          <div className="flex flex-row space-x-6">
            <Link to="https://twitter.com/OpenAI" className='hover:underline text-xl font-semibold '>Twitter</Link>
            <Link to="https://youtube.com/OpenAI" className='hover:underline text-xl font-semibold '>YouTube</Link>
            <Link to="https://github.com/openai" className='hover:underline text-xl font-semibold'>GitHub</Link>
            <Link to="https://soundcloud.com/openai_audio" className='hover:underline text-xl font-semibold'>SoundCloud</Link>
            <Link to="https://www.linkedin.com/company/openai" className='hover:underline text-xl font-semibold'>LinkedIn</Link>
          </div>

          <div className="mt-12">
            <button onClick={scrolltoTop} className='flex items-center text-xl hover:underline space-x-0'>
              <span>Back to top</span>
              <span><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-up400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4" data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="12.73 7.25 8 2.52 3.27 7.25 4.25 8.23 7.31 5.17 7.31 14 8.69 14 8.69 5.17 11.75 8.23 12.73 7.25"></polygon></svg></span>
            </button>
          </div>
        </div>
      </div>

      <div className='bg-white mt-16'>
        <div className='bg-black' style={{ marginTop: "0px", height: "23px" }}></div>
        <div className='bg-black' style={{ marginTop: "1px", height: "22px" }}></div>
        <div className='bg-black' style={{ marginTop: "2px", height: "21px" }}></div>
        <div className='bg-black' style={{ marginTop: "3px", height: "20px" }}></div>
        <div className='bg-black' style={{ marginTop: "4px", height: "19px" }}></div>
        <div className='bg-black' style={{ marginTop: "5px", height: "18px" }}></div>
        <div className='bg-black' style={{ marginTop: "6px", height: "17px" }}></div>
        <div className='bg-black' style={{ marginTop: "7px", height: "16px" }}></div>
        <div className='bg-black' style={{ marginTop: "8px", height: "15px" }}></div>
        <div className='bg-black' style={{ marginTop: "9px", height: "14px" }}></div>
        <div className='bg-black' style={{ marginTop: "10px", height: "13px" }}></div>
        <div className='bg-black' style={{ marginTop: "11px", height: "12px" }}></div>
        <div className='bg-black' style={{ marginTop: "12px", height: "11px" }}></div>
        <div className='bg-black' style={{ marginTop: "13px", height: "10px" }}></div>
        <div className='bg-black' style={{ marginTop: "14px", height: "9px" }}></div>
        <div className='bg-black' style={{ marginTop: "15px", height: "8px" }}></div>
        <div className='bg-black' style={{ marginTop: "16px", height: "7px" }}></div>
        <div className='bg-black' style={{ marginTop: "17px", height: "6px" }}></div>
        <div className='bg-black' style={{ marginTop: "18px", height: "5px" }}></div>
        <div className='bg-black' style={{ marginTop: "19px", height: "4px" }}></div>
        <div className='bg-black' style={{ marginTop: "20px", height: "3px" }}></div>
        <div className='bg-black' style={{ marginTop: "21px", height: "2px" }}></div>
        <div className='bg-black' style={{ marginTop: "22px", height: "1px" }}></div>
        <div className='bg-black' style={{ marginTop: "23px", height: "0px" }}></div>
      </div>

    </div>
  )
}

export default Footer
