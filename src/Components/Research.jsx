import React from 'react'
import { Link } from 'react-router-dom'

const Research = () => {
    let research = [
        {
            img: "https://images.openai.com/blob/96a6dba4-e46c-4f98-b718-915479d1c133/gpt-4vision-system-card.png?trim=0,0,0,0&width=800",
            title: "GPT-4V(ision) system card",
            date: "Sep 25, 2023",
        },
        {
            img: "https://images.openai.com/blob/169a9863-5725-45cf-b096-6d2e5b6cebe9/confidence-building-measures-for-artificial-intelligence-workshop-proceedings.png?trim=0,0,0,0&width=800",
            title: "Confidence-Building Measures for Artificial Intelligence: Workshop proceedings",
            date: "Aug 1, 2023",
        },
        {
            img: "https://images.openai.com/blob/d4f299e7-2084-43d6-80f5-40e9404f15e2/frontier-ai-regulation-managing-emerging-risks-to-public-safety.png?trim=0,0,0,0&width=800",
            title: "Frontier AI regulation: Managing emerging risks to public safety",
            date: "Jul 6, 2023",
        },
        {
            img: "https://images.openai.com/blob/373bf52a-5373-4d4e-88fe-7fbf738ec6d1/improving-mathematical-reasoning-with-process-supervision.jpg?trim=0,3439,0,144&width=800",
            title: "Improving mathematical reasoning with process supervision",
            date: "May 31, 2023",
        },
    ]
    return (
        <div className='px-4'>
            <div className="grid grid-cols-2  pt-4">
                <div>
                    <h1 className='text-5xl update_title'>Research</h1>
                </div>
                <div>
                    <h1 className='text-3xl mb-6'>
                        We research generative models and how to align them with human values.</h1>
                    <Link to="/" className=' text-xl  relative after:w-full after:h-[1.7px] after:bg-white after:absolute after:top-7 after:left-0'>Learn about our research</Link>
                </div>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-4 gap-4">
                    {
                        research.map((item, index) => (
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

export default Research
