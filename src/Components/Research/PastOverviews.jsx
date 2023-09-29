import React from 'react'
import { Link } from 'react-router-dom'


const PastOverviews = () => {
    let text = [
        {
            img: "https://images.openai.com/blob/5ae77333-6ec9-4b5b-bf73-39f030012b5b/image-gpt.jpg?trim=0,0,836,0&width=800",
            title: "Image GPT",
            desc: "Jun 17, 2022",
        },
        {
            img: "https://images.openai.com/blob/9267c72e-6cc1-42f6-a047-114d73fa6ee1/solving-rubiks-cube.jpg?trim=0,520,0,319&width=800",
            title: "Solving Rubik’s Cube with a robot hand",
            desc: "Oct 15, 2019",
        },
        {
            img: "https://images.openai.com/blob/40c42048-863a-4651-862a-223a15c21cbf/emergent-tool-use.jpg?trim=444,0,427,0&width=800",
            title: "Emergent tool use from multi-agent interaction",
            desc: "Sep 17, 2019",
        },
    ]
    return (
        <div>
            <div className='w-full h-[1px] bg-black mt-24 mx-5'></div>
            <div className="grid grid-cols-2 mt-3 px-5">
                <h1 className='text-5xl update_title font-[400] '>Past highlights</h1>
                <div>
                    <p className='text-[27px] font-[500] mb-8'>
                        Our current AI research builds upon a wealth of previous projects and advances.</p>
                    <Link to="/" className='underline text-xl font-[400]'>View all Search</Link>
                </div>
            </div>

            <div className="my-12 grid grid-cols-3 gap-5 px-5">
                {
                    text.map((item, index) => (
                        <div key={index} className=''>
                            <Link to="/" >
                                <div className='w-full h-full'>
                                    <img src={item.img} alt="" />
                                    <h1 className='mt-2 text-lg font-bold'>{item.title}</h1>
                                    <p className='mt-0 text-lg font-[500]'>{item.desc}</p>
                                </div>

                            </Link>
                        </div>
                    ))
                }
            </div>

          
        </div>
    )
}

export default PastOverviews
