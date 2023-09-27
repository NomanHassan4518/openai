import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LatestUpdate from './LatestUpdate';

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

  

    const handlePause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(false);
            } else {
                video.pause();
                setIsPlaying(true);
            }
        }

        console.log(video.paused);
    };

    let homeLinks = [
        {
            title:"Pioneering research on the path to AGI",
            linkName:"Learn about our research"
        },
        {
            title:"Transforming work and creativity with AI",
            linkName:"Explore our products"
        },
        {
            title:"Join us in shaping the future of technology",
            linkName:"View careers"
        },
    ]
    return (
        <div className=' absolute top-0 z-10 '>

            <div className='  z-10  ' >
                <video
                    ref={videoRef}
                    autoPlay playsInline loop muted >
                    <source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='w-full h-[47.5rem]  absolute top-0 z-30 bg-black opacity-60'>
                </div>
            </div>

            <div className='absolute z-40 top-0    w-full h-[47rem] '>
                <div className='flex justify-end pb-20 items-center    w-full h-full flex-col'>
                    <div className='text-white text-7xl font-semibold space-y-4 mr-52'>
                        <p>Creating safe AGI that</p>
                        <p>benefits all of humanity</p>
                    </div>
                    <div className='mt-12 w-full flex justify-between px-4  text-white '>
                        <Link to="/" className='border-2 ml-44 border-white p-2 text-lg font-semibold hover:bg-white hover:text-black '>Learn about OpenAI</Link>
                        <button onClick={handlePause} className=' bg-black p-2 w-40 text-center text-xl font-semibold hover:text-black hover:bg-white '>{isPlaying === true ?
                            <div className='flex items-center w-full justify-center'>
                                <span>
                                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--play400 a-icon--text a-icon--no-align flex mt-5 md:mt-0 f-ui-1 lg:mt-1 md:-ml-4" data-new="" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="2 2 14 8 2 14 2 2"></polygon></svg>
                                </span>
                                <span>Play video</span>
                            </div>
                            :


                            <div className='flex items-center w-full justify-center'>
                                <span>
                                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--pause400 a-icon--text a-icon--no-align flex mt-5 md:mt-0 f-ui-1 lg:mt-1 md:-ml-4" data-new="" style={{ width: "1em", height: "1em" }}><g data-v-cbc994d7="" fill="currentColor"><rect x="9.81" y="2" width="1.38" height="12"></rect><rect x="4.81" y="2" width="1.38" height="12"></rect></g></svg>
                                </span>
                                <span>Pause video</span>
                            </div>
                        }</button>
                    </div>
                </div>
            </div>

            <div className='bg-black text-white'>
              <div className="grid grid-cols-3 mx-4 py-16 ">
                {
                    homeLinks.map((item , index) =>(
                        <Link to="" key={index}>
                            <div className=' '>
                                <h1 className='font-bold text-3xl mb-3'>{item.title}</h1>
                                <Link to="/" className=' text-xl relative after:w-full after:h-[1.7px] after:bg-white after:absolute after:top-7 after:left-0'>{item.linkName}</Link>
                            </div>
                        </Link>
                    ))
                }
              </div>

              <div className=' px-4 mt-20'>
              <div className='w-full bg-white h-[1.5px]'></div>
              </div>

            </div>

            <div className='bg-black text-white'>
                <LatestUpdate/>
            </div>
        </div>
    )
}

export default Home
