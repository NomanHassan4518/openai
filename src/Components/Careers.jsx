import React from 'react'
import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <div className='px-4'>
      <div className="grid grid-cols-2  pt-4">
        <div>
          <h1 className='text-5xl update_title'>Careers at OpenAI</h1>
        </div>
        <div>
          <h1 className='text-3xl mb-6'>Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.</h1>
          <Link to="/" className=' text-xl  relative after:w-full after:h-[1.7px] after:bg-white after:absolute after:top-7 after:left-0'>view careers</Link>
        </div>
      </div>

      <div className='w-full h-full mt-16'>
        <img src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=1400" alt="" />
      </div>

      <div className=' px-4 mt-20'>
        <div className='w-full bg-gray-400 h-[1px]'></div>
      </div>

      <div className="grid grid-cols-2 mt-6">
        <div>
          <h1 className='text-5xl mr-5 leading-[56px]'>"I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space."</h1>
          <p className='mt-5 text-xl font-semibold'>Lilian Weng</p>
          <p className='font-semibold text-lg'>Applied AI at OpenAI</p>
        </div>
        <div className='w-full h-full'>
          <img src="https://images.openai.com/blob/734af367-24c1-4043-934c-269a6a3ec47e/stangel-2022-0484.jpg?trim=0,537,40,462&width=1400" alt="" />
        </div>
      </div>

      <div className=' px-4 mt-20'>
        <div className='w-full bg-white h-[1.5px]'></div>
      </div>
      <div className="mx-4">
        <h1 className='text-6xl pt-2'>Join us in shaping the future of technology.</h1>
      </div>

      <div className='w-full mt-20  px-4'>
        <Link to="/" className='text-2xl border-[2px] border-white flex items-center justify-center pt-7 pb-9  text-center hover:bg-white hover:text-black'>View Careers</Link>
      </div>
      
    </div>

    
  )
}

export default Careers
