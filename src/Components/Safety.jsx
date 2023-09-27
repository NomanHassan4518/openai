import React from 'react'
import { Link } from 'react-router-dom'

const Safety = () => {
    return (
        <div className='px-4'>
            <div className="grid grid-cols-2  pt-4">
                <div>
                    <h1 className='text-5xl update_title'>Safety & responsibility</h1>
                </div>
                <div>
                    <h1 className='text-3xl mb-6'>Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.</h1>
                    <Link to="/" className=' text-xl  relative after:w-full after:h-[1.7px] after:bg-white after:absolute after:top-7 after:left-0'>Learn about safety</Link>
                </div>
            </div>

            <div className='w-full h-full mt-16'>
                <img src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=1400" alt="" />
            </div>

            <div className=' px-4 mt-20'>
                <div className='w-full bg-white h-[1.5px]'></div>
            </div>
        </div>
    )
}

export default Safety
