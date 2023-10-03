import { React, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const GPT4 = () => {
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
        console.log();
    };

    return (
        <div className='bg-black text-white'>
            <div className='pt-52 pl-52   pr-8 pb-12'>
                <p className='text-7xl font-semibold'>GPT-4 is OpenAI’s most</p>
                <p className='text-7xl font-semibold'>advanced system, producing</p>
                <p className='text-7xl font-semibold'>safer and more useful responses</p>
                <div className="flex items-center  space-x-8 mt-12">
                    <Link to="/" className='flex text-xl font-semibold border-2 border-white items-center justify-center p-1 hover:bg-white hover:text-black'>
                        <span>Try on ChatGPT Plus</span>
                        <span className='mr-3'><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 ml-2 -mr-4" data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg></span>
                    </Link>
                    <Link to="/" className='text-xl font-semibold underline'>View GPT-4 research</Link>
                </div>
                <div className='mt-16 relative'>
                    <video
                        ref={videoRef}
                        autoPlay playsInline loop muted >
                        <source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="w-full bg-black h-[39rem] absolute top-0 z-30 opacity-30"></div>
                    <div className='absolute bottom-5 left-5 z-50'>
                        <button onClick={handlePause} className=' bg-black p-2 w-40 text-center text-xl font-semibold hover:text-black hover:bg-white '>{isPlaying === true ?
                            <div className='flex items-center w-full justify-center'>
                                <span>
                                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--play400 a-icon--text a-icon--no-align flex mt-5 md:mt-0 f-ui-1 lg:mt-1 md:-ml-4" data-new="" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="2 2 14 8 2 14 2 2"></polygon></svg>
                                </span>
                                <span>Play video</span>
                            </div>
                            :
                            <div className='flex items-center w-full justify-center'>
                                <span>
                                    <svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--pause400 a-icon--text a-icon--no-align flex mt-5 md:mt-0 f-ui-1 lg:mt-1 md:-ml-4" data-new="" style={{ width: "1em", height: "1em" }}><g data-v-cbc994d7="" fill="currentColor"><rect x="9.81" y="2" width="1.38" height="12"></rect><rect x="4.81" y="2" width="1.38" height="12"></rect></g></svg>
                                </span>
                                <span>Pause video</span>
                            </div>
                        }</button>
                    </div>
                </div>

            </div>

            <div className="px-5">
                <div className="w-full h-[2px] bg-white mt-12"></div>
                <h1 className="text-6xl update_title mt-3">
                    GPT-4 can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities.
                </h1>
            </div>
        </div>
    )
}

export default GPT4
