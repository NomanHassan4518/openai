import React from 'react'
import { Link } from 'react-router-dom'

const LatestUpdate = () => {
    let update = [
        {
            img: "https://images.openai.com/blob/9c95036b-c2f5-4af8-a9c4-ed6c411f77e4/chatgpt-can-now-see-hear-and-speak-alt.jpg?trim=0,420,0,420&width=1400",
            title: "ChatGPT can now see, hear, and speak",
            date: "Sep 25, 2023",
        },
        {
            img: "https://images.openai.com/blob/b196df3a-6fea-4d86-87b2-f9bb50be64c7/leaf.png?trim=0,0,0,0&width=800",
            title: "DALL·E 3",
            date: "Sep 20, 2023",
        },
        {
            img: "https://images.openai.com/blob/71c1edf1-06f2-415c-826b-364f72fa74c1/red-teaming-network.png?trim=0,0,0,0&width=800",
            title: "OpenAI Red Teaming Network",
            date: "Sep 19, 2023",
        },
        {
            img: "https://images.openai.com/blob/5334a8a6-515d-4698-92f1-5266c3076ca0/announcing-openai-devday.png?trim=0,0,0,0&width=800",
            title: "Join us for OpenAI’s first developer conference on November 6 in San Francisco",
            date: "Sep 6, 2023",
        },
    ]
    return (
        <div className='py-8 px-4'>
            <div className="flex items-center justify-between w-full">
                <h1 className='text-5xl update_title' >Latest Update</h1>
                <Link to="/" className='font-semibold text-lg relative after:w-full after:h-[1.7px] after:bg-white after:absolute after:top-6 after:left-0'>View all updates</Link>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-4 gap-4">
                    {
                        update.map((item, index) => (
                            <div key={index}>
                                <Link to="/">
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='mt-3'>
                                        <h1 className='text-xl font-semibold hover:underline'>{item.title}</h1>
                                        <p className='font-semibold text-xl mt-2'>{item.date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className=' px-4 mt-20'>
                <div className='w-full bg-white h-[1.5px]'></div>
            </div>
        </div>
    )
}

export default LatestUpdate
