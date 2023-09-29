import React from 'react'
import { Link } from 'react-router-dom'

const OverviewHome = () => {
    return (
        <div>
            <div className='bg-[#fff1d6] h-[80rem] '>
                <div className='pt-52 px-5 grid grid-cols-2'>
                    <div className='text-6xl font-[500] mr-32 leading-[70px] text-[#0000ff]'>
                        Pioneering research on the path to AGI
                    </div>

                    <div className=''>
                        <h1 className='text-[#0000ff] text-3xl font-[400] '>We believe our research will eventually lead to artificial general intelligence, a system that can solve human-level problems. Building safe and beneficial AGI is our mission.</h1>
                        <div className="mt-8 space-x-12">
                            <Link to='/' className='border-[1px] border-[#0000ff] text-[#0000ff] px-4 py-1 text-xl font-semibold hover:bg-[#0000ff] hover:text-white '>View Search Index</Link>
                            <Link to="/" className=' text-[#0000ff] text-xl font-[500] underline '>Learn about safety</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full mt-16 px-5'>
                    <img src="https://images.openai.com/blob/522d2eaf-74eb-4df8-bb4c-1dbb339e85c1/stangel-2022-1640.jpg?trim=720,0,0,0&width=1400" alt="" />
                </div>
            </div>

            <div className='bg-white px-5'>
                <div className='w-full h-[1px] bg-gray-400 mt-24'></div>
                <div className='mt-2'>
                    <p className='text-[55px] overview_title leading-[100%]' >“Safely aligning powerful AI systems is one of the most important unsolved problems for our mission. Techniques like learning from human feedback are helping us get closer, and we are actively researching new techniques to help us fill the gaps.”</p>
                    <h1 className='mt-8 font-semibold text-xl'>Josh Achiam</h1>
                    <p className="mt-1 text-xl">Researcher at OpenAI</p>
                </div>

                <div className='w-full h-[1px] bg-black mt-24'></div>
                <div className='grid grid-cols-2 mt-3'>
                    <div className='font-[400] text-5xl overview_title'>
                        Focus areas
                    </div>
                    <div className='text-[28px] font-[400] font-[Georgia] leading-[120%] '>
                        We build our generative models using a technology called deep learning, which leverages large amounts of data to train an AI system to perform a task.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewHome
