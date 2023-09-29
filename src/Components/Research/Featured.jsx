import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
    let featured = [
        {
            title: "Media Relations, Corporate Communications",
            desc: "San Francisco, California, United States — Communications",
        },
        {
            title: "Senior Software Engineer, Data Acquisition",
            desc: "San Francisco, California, United States — Language",
        },
        {
            title: "Post Infra Training Data Engineer",
            desc: "San Francisco, California, United States — Reinforcement Learning",
        },
        {
            title: "Software Engineer, Model Inference",
            desc: "San Francisco, California, United States — Applied AI Engineering",
        },
        {
            title: "Software Engineer – Model Inference",
            desc: "San Francisco, California, United States — Applied AI Engineering",
        },

    ]
    return (
        <div>
            <div className='w-full h-[1px] bg-black mt-24 mx-5'></div>
            <div className="grid grid-cols-2 mt-3 px-5">
                <h1 className='text-5xl update_title font-[400] '>Featured roles</h1>
                <div>
                    <p className='text-[27px] font-[500] mb-8'>
                        We are constantly seeking talented individuals to join our team. Explore featured roles or view all open roles.</p>
                    <Link to="/" className='underline text-xl font-[400] '>View all careers</Link>
                </div>
            </div>

            <div className="mt-12 px-5">
                {
                    featured.map((item, index) => (
                        <div key={index} className='flex justify-between  py-7 border-t border-gray-400 '>
                            <div>
                                <Link to="/" className='flex flex-col group'>
                                    <span className='text-xl font-[650] group-hover:underline '>{item.title}</span>
                                    <span className='text-xl font-semibold'>{item.desc}</span>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className='flex items-center space-x-0 justify-center text-xl font-semibold underline'>
                                    <span >Apply now</span>
                                    <span ><svg data-v-cbc994d7="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="a-icon--arrow-north-east400 a-icon--text a-icon--no-align top-[0.05em] relative f-ui-1 " data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}><polygon data-v-cbc994d7="" fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon></svg></span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className=' px-4 mt-20'>
                <div className='w-full bg-black h-[1.5px]'></div>
            </div>
            <div className="mx-4">
                <h1 className='text-6xl update_title font-[400] pt-2'>Explore all research.</h1>
            </div>

            <div className='w-full my-20  px-4'>
                <Link to="/" className='text-2xl border-[2px] border-black flex items-center justify-center pt-7 pb-9  text-center hover:bg-black hover:text-white'>View search index</Link>
            </div>
        </div>
    )
}

export default Featured
